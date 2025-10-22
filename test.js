const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test('Converts 1 euro to 1.07 dollars', () => {
  const dollars = fromEuroToDollar(1);
  expect(dollars).toBeCloseTo(1.07); 
});

test('Converts 1 dollar to yen', () => {
  const yen = fromDollarToYen(1);
  expect(yen).toBeCloseTo(146.26);
});

test('Converts 1 yen to pounds', () => {
  const pounds = fromYenToPound(1);
  expect(pounds).toBeCloseTo(0.00556);
});
