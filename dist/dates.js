"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
const getOverlappingDaysInIntervals = require('date-fns/getOverlappingDaysInIntervals');
const eachYearOfInterval = require('date-fns/eachYearOfInterval');
const addYears = require('date-fns/addYears');
const getYear = require('date-fns/getYear');
const interestCalc_1 = require("./interestCalc");
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    years() {
        return eachYearOfInterval({ start: this.start, end: this.end });
    }
}
const getAllLowPeriods = (investedDates) => {
    // LOOP to create all possible low interest periods
    let allLowInterestPeriods = [];
    for (let i = 0; i < investedDates.years().length; i++) {
        let year = getYear(investedDates.years()[i]);
        // BUG, Check month formatting. adding one to the month?
        let lowInterestPeriod = new Interval(new Date(year, 0, 1), new Date(year, 3, 20));
        allLowInterestPeriods.push(lowInterestPeriod);
    }
    //   console.log(allLowInterestPeriods);
    return allLowInterestPeriods;
};
// Invest from the 1st of April 21 to 10th of May 23
const myInvestedDates = new Interval(new Date(2021, 3, 1), new Date(2023, 4, 10));
const allLowPeriods = getAllLowPeriods(myInvestedDates);
const daysInvested = (investedDates) => {
    let lowInterestTotalDays = 0;
    for (let i = 0; i < allLowPeriods.length; i++) {
        lowInterestTotalDays += getOverlappingDaysInIntervals({ start: allLowPeriods[i].start, end: allLowPeriods[i].end }, { start: investedDates.start, end: investedDates.end });
    }
    const totalDays = differenceInCalendarDays(investedDates.end, investedDates.start);
    const highInterestDays = totalDays - lowInterestTotalDays;
    return { total: totalDays, hi: highInterestDays, lo: lowInterestTotalDays };
};
let totalStats = daysInvested(myInvestedDates);
const initialInvestment = 1000;
const highPeriod = (0, interestCalc_1.totalAccruedAmount)(initialInvestment, totalStats.hi, 13.5);
const lowPeriod = (0, interestCalc_1.totalAccruedAmount)(initialInvestment, totalStats.lo, 12);
const totalAmountRetured = highPeriod + lowPeriod;
console.log(totalAmountRetured);
console.log(`${totalAmountRetured} from ${initialInvestment} investment over ${totalStats.total} days`);
console.log(`Days invested total: ${totalStats.total} \nDays in high interest ${totalStats.hi} \nDays in low interest ${totalStats.lo}`);
module.exports = daysInvested;
// PLAN
/* ------------------------ // Get input from a user ------------------------ */
// Format input to Date type
// GET distance betweetn the two dates in calendar days
// Create an interval that represents the different interest periods, possibly over a number of years
// get total possible years and create a loop to create all possible intervals of low interest days
// Low and high should equal initial distance (above)
// Use low and high as 'TIME' in the calc function then + together
