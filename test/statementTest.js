const test = require('ava');
const {statement,statementHTML} = require('../src/statement');


test('BigCo Buy no performances', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + `Amount owed is $0.00\n`
      + `You earned 0 credits \n`;
  //then
  t.is(result, expectResult);

});

test('BigCo Buy one performances hamlet and audience is 31', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'hamlet',
              'audience': 31,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` Hamlet: $410.00 (31 seats)\n`
      + `Amount owed is $410.00\n`
      + `You earned 1 credits \n`;
  //then
  t.is(result, expectResult);

});

test('BigCo Buy one performances hamlet and audience is 29', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'hamlet',
              'audience': 29,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` Hamlet: $400.00 (29 seats)\n`
      + `Amount owed is $400.00\n`
      + `You earned 0 credits \n`;
  //then
  t.is(result, expectResult);

});

test('BigCo Buy one performances as-like and audience is 21', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'as-like',
              'audience': 21,
          },

      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` As You Like It: $468.00 (21 seats)\n`
      + `Amount owed is $468.00\n`
      + `You earned 4 credits \n`;
  //then
  t.is(result, expectResult);
});

test('BigCo Buy one performances as-like and audience is 19', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'as-like',
              'audience': 19,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` As You Like It: $357.00 (19 seats)\n`
      + `Amount owed is $357.00\n`
      + `You earned 3 credits \n`;
  //then
  t.is(result, expectResult);
});

test('BigCo Buy two performances as-like and othello and audience is 10 and 40', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [

          {
              'playID': 'as-like',
              'audience': 10,
          },
          {
              'playID': 'othello',
              'audience': 40,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` As You Like It: $330.00 (10 seats)\n`
      + ` Othello: $500.00 (40 seats)\n`
      + `Amount owed is $830.00\n`
      + `You earned 12 credits \n`;
  //then
  t.is(result, expectResult);
});

test('BigCo Buy three performances hamlet, as-like and othello and audience is 55, 35 and 20', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'hamlet',
              'audience': 55,
          },
          {
              'playID': 'as-like',
              'audience': 35,
          },
          {
              'playID': 'othello',
              'audience': 20,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` Hamlet: $650.00 (55 seats)\n`
      + ` As You Like It: $580.00 (35 seats)\n`
      + ` Othello: $400.00 (20 seats)\n`
      + `Amount owed is $1,630.00\n`
      + `You earned 37 credits \n`;
  //then
  t.is(result, expectResult);
});

test('HTML BigCo Buy three performances hamlet, as-like and othello and audience is 55, 35 and 20', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'hamlet',
              'audience': 55,
          },
          {
              'playID': 'as-like',
              'audience': 35,
          },
          {
              'playID': 'othello',
              'audience': 20,
          },
      ],
  };
  //when
  const result = statementHTML(invoice, plays);

  const expectResult = '<h1>Statement for BigCo</h1><ul> <li>Hamlet: $650.00 (55 seats)</li> '
  + '<li>As You Like It: $580.00 (35 seats)</li> <li>Othello: $400.00 (20 seats)</li></ul>'
  +'<h3>Amount owed is $1,630.00</h3><h4>You earned 37 credits</h4>'
  //then
  t.is(result, expectResult);
});

test('Throws exception when get statement given BigCo unknown type play performances', t => {
    //given
    const invoice = {
        'customer': 'BigCo',
        'performances': [
            {
                'playID': 'errorType',
                'audience': 20,
            },
        ],
    };

    const plays = {
        'errorType': {
            'name': 'ErrorType',
            'type': 'unknown',
        },
    };
    //when
    //then
    t.throws(() => statement(invoice, plays), 'unknown type: unknown')
})


const invoice = {
  'customer': 'BigCo',
  'performances': [
    {
      'playID': 'hamlet',
      'audience': 55,
    },
    {
      'playID': 'as-like',
      'audience': 35,
    },
    {
      'playID': 'othello',
      'audience': 40,
    },
  ],
};

const plays = {
  'hamlet': {
    'name': 'Hamlet',
    'type': 'tragedy',
  },
  'as-like': {
    'name': 'As You Like It',
    'type': 'comedy',
  },
  'othello': {
    'name': 'Othello',
    'type': 'tragedy',
  },
};