 function usdFormat(amount){
    return new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD',
               minimumFractionDigits: 2,
             }).format(amount / 100);
    }

  function calculateUnitPrice(perf,play){
    let thisAmount =0;
          switch (play.type) {
            case 'tragedy':
              thisAmount = 40000;
              if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
              }
              break;
            case 'comedy':
              thisAmount = 30000;
              if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
              }
              return thisAmount += 300 * perf.audience;
              break;
            default:
              throw new Error(`unknown type: ${play.type}`);
          }
           return thisAmount;
      }

  function  calculateCredits(perf,play){
    let volumeCredits =0;
    volumeCredits += Math.max(perf.audience - 30, 0);
     if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);
     return volumeCredits;
  }

  function playFor(perf,plays){
    return plays[perf.playID];
  }


  function generateFormData(invoice,plays){
        let totalAmount = 0;
        let volumeCredits = 0;
        let formData = [];
        for (let perf of invoice.performances) {
            const play = playFor(perf,plays);
            let thisAmount = calculateUnitPrice(perf, play);
            formData.push({
              playName: play.name,
              amount: usdFormat(thisAmount),
              audience: perf.audience
            })
            totalAmount += thisAmount;
            volumeCredits += calculateCredits(perf, play);
          }
          totalAmount = usdFormat(totalAmount);
          return { formData, totalAmount, volumeCredits };
  }

    function createStatementData(invoice, plays){
        let result = `Statement for ${invoice.customer}\n`;
        let detail = generateFormData(invoice, plays);
        for (let formDataDetail of detail.formData) {
            result += ` ${formDataDetail.playName}: ${formDataDetail.amount} (${formDataDetail.audience} seats)\n`;
          }
         result += `Amount owed is ${detail.totalAmount}\n`;
         result += `You earned ${detail.volumeCredits} credits \n`;
         return result

    }


    function createStatementHTML(invoice, plays) {
        let result = `<h1>Statement for ${invoice.customer}</h1>`;
        let detail = generateFormData(invoice, plays);
        result += `<ul>`;
        for (let formDataDetail of detail.formData) {
            result += ` <li>${formDataDetail.playName}: ${formDataDetail.amount} (${formDataDetail.audience} seats)</li>`;
        }
        result += `</ul>`;
        result += `<h3>Amount owed is ${detail.totalAmount}</h3>`;
        result += `<h4>You earned ${detail.volumeCredits} credits</h4>`;
        return result
    }

 function statement (invoice, plays) {
    return createStatementData(invoice, plays);
}

 function statementHTML(invoice, plays){
    return createStatementHTML(invoice,plays);
}

module.exports = {
  statement,
  statementHTML,
};
