"use strict";
// Static retun on investment. No changing rates
const r = 12 / 100;
const roundNumber2DecPlace = (amount) => {
    return Math.round(amount * 100) / 100;
};
const totalAccruedAmount = (p, t) => {
    // convert time to years
    let days = t / 365;
    let amount = p * (1 + r * days);
    const rounded = roundNumber2DecPlace(amount);
    return rounded;
};
const testAmount = totalAccruedAmount(20, 345);
console.log(testAmount);
module.exports = totalAccruedAmount;
// A = P(1 + rt)
// A = Total Accrued Amount (principal + interest)
// P = Principal Amount
// I = Interest Amount
// r = Rate of Interest per year in decimal; r = R/100
// R = Rate of Interest per year as a percent; R = r \* 100
// t = Time Period involved in months or years. t = (days/365)
