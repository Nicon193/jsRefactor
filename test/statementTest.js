const test = require('ava');
const {statement} = require('../src/statement');


test('BigCo Buy Tickets', t => {
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
              'audience': 40,
          },
      ],
  };
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` Hamlet: $650.00 (55 seats)\n`
      + ` As You Like It: $580.00 (35 seats)\n`
      + ` Othello: $500.00 (40 seats)\n`
      + `Amount owed is $1,730.00\n`
      + `You earned 47 credits \n`;
  //then
  t.is(result, expectResult);

});


test('BigCo Buy Tickets', t => {
  //given
  const invoice = {
      'customer': 'BigCo',
      'performances': [
          {
              'playID': 'hamlet',
              'audience': 25,
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
  //when
  const result = statement(invoice, plays);

  const expectResult = 'Statement for BigCo\n'
      + ` Hamlet: $400.00 (25 seats)\n`
      + ` As You Like It: $580.00 (35 seats)\n`
      + ` Othello: $500.00 (40 seats)\n`
      + `Amount owed is $1,480.00\n`
      + `You earned 22 credits \n`;
  //then
  t.is(result, expectResult);
});


test('BigCo Buy Tickets', t => {
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
      + ` Hamlet: $650.00 (55 seats)\n`
      + ` As You Like It: $330.00 (10 seats)\n`
      + ` Othello: $500.00 (40 seats)\n`
      + `Amount owed is $1,480.00\n`
      + `You earned 37 credits \n`;
  //then
  t.is(result, expectResult);

});


test('BigCo Buy Tickets', t => {
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