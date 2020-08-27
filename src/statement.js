 function usdFormat(amount){
    return new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD',
               minimumFractionDigits: 2,
             }).format(amount / 100);
    }

  function calculateUnitPrice(perf,plays){
    const play =  playFor(perf,plays);
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

  function  calculateCredits(perf,plays){
    const play =  playFor(perf,plays);
    let volumeCredits =0;
    volumeCredits += Math.max(perf.audience - 30, 0);
     if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);
     return volumeCredits;
  }

  function playFor(perf,plays){
    return plays[perf.playID];
  }


 function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    const play =  playFor(perf,plays);
    let thisAmount = calculateUnitPrice(perf,plays);
    volumeCredits += calculateCredits(perf,plays);
    result += ` ${play.name}: ${usdFormat(thisAmount)} (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${usdFormat(totalAmount)}\n`;
  result += `You earned ${volumeCredits} credits \n`;
  return result;
}

module.exports = {
  statement,
};
