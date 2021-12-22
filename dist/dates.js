"use strict";
const differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
const getOverlappingDaysInIntervals = require('date-fns/getOverlappingDaysInIntervals');
const differenceInCalendarYears = require('date-fns/differenceInCalendarYears');
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    years() {
        return differenceInCalendarYears(this.end, this.start);
    }
}
// (Start, End)
const lowInterestPeriod = new Interval(new Date(2021, 0, 1), new Date(2021, 3, 20));
const highInterestPeriod = new Interval(new Date(2021, 3, 21), new Date(2021, 11, 30));
// Invest from the 1st of April to 10th of May
const investedDates = new Interval(new Date(2021, 3, 1), new Date(2021, 4, 10));
//
const lowInterestDays = getOverlappingDaysInIntervals({ start: lowInterestPeriod.start, end: lowInterestPeriod.end }, { start: investedDates.start, end: investedDates.end });
const daysInvested = (investedDates) => {
    const lowInterestDays = getOverlappingDaysInIntervals({ start: lowInterestPeriod.start, end: lowInterestPeriod.end }, { start: investedDates.start, end: investedDates.end });
    const totalDays = differenceInCalendarDays(investedDates.end, investedDates.start);
    const highInterestDays = totalDays - lowInterestDays;
    return { total: totalDays, hi: highInterestDays, lo: lowInterestDays };
};
console.log(daysInvested(investedDates));
module.exports = daysInvested;
// PLAN
/* ------------------------ // Get input from a user ------------------------ */
// Format input to Date type
// GET distance betweetn the two dates in calendar days
// Create an interval that represents the different interest periods, possibly over a number of years
// Get an array of ALL DATES between the input dates
// LOOP through the array, if it matches a date within the specified period + 1 to low, if not +1 to high
// Low and high should equal initial distance (above)
// Use low and high as 'TIME' in the calc function then + together
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, (name: string) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// })
