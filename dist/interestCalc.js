"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalAccruedAmount = void 0;
const roundNumber2DecPlace = (amount) => {
    return Math.round(amount * 100) / 100;
};
const totalAccruedAmount = (p, t, i) => {
    // interest amount in decimal form
    const interest = i / 100;
    // convert time to years
    let days = t / 365;
    let amount = p * (1 + interest * days);
    const rounded = roundNumber2DecPlace(amount);
    return rounded;
};
exports.totalAccruedAmount = totalAccruedAmount;
// p = Principal Amount
// i = Interest Amount (non decimal form)
// t = time in days
