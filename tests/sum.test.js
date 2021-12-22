const totalAccruedAmount = require('../dist/interestCalc');
const daysInvested = require('../dist/dates');
//

// CLOSE TO to avoid tiny rounding errors
test('gets total return from amount invested', () => {
  expect(totalAccruedAmount(1000, 100, 12)).toBeCloseTo(1032.88);
});

test('gets total return from amount invested', () => {
  expect(totalAccruedAmount(20, 345, 13.5)).toBeCloseTo(22.55);
});
// DATES
const start = new Date(2020, 6, 1);
const end = new Date(2020, 6, 4);
const interval = {
  start: start,
  end: end,
};

test('gets total return from amount invested', () => {
  expect(daysInvested(interval)).toBe(3);
});
