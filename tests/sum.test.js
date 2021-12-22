const totalAccruedAmount = require('../dist/interestCalc');
//

// CLOSE TO to avoid tiny rounding errors
test('gets total return from amount invested', () => {
  expect(totalAccruedAmount(1000, 100)).toBeCloseTo(1032.88);
});

test('gets total return from amount invested', () => {
  expect(totalAccruedAmount(20, 345)).toBeCloseTo(22.27);
});
