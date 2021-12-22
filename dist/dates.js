"use strict";
const differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
const getOverlappingDaysInIntervals = require('date-fns/getOverlappingDaysInIntervals');
const eachYearOfInterval = require('date-fns/eachYearOfInterval');
const addYears = require('date-fns/addYears');
const getYear = require('date-fns/getYear');
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    years() {
        return eachYearOfInterval({ start: this.start, end: this.end });
    }
}
// (Start, End)
const lowInterestPeriod = new Interval(new Date(2021, 0, 1), new Date(2021, 3, 20));
const highInterestPeriod = new Interval(new Date(2021, 3, 21), new Date(2021, 11, 30));
// Invest from the 1st of April to 10th of May
const investedDates = new Interval(new Date(2021, 3, 1), new Date(2023, 4, 10));
// LOOP to create all possible low interest periods
const allLowInterestPeriods = [];
for (let i = 0; i < investedDates.years().length; i++) {
    let year = getYear(investedDates.years()[i]);
    // BUG, Check month formatting. adding one to the month?
    let lowInterestPeriod = new Interval(new Date(year, 0, 1), new Date(year, 3, 20));
    allLowInterestPeriods.push(lowInterestPeriod);
}
const daysInvested = (investedDates) => {
    let lowInterestTotalDays = 0;
    for (let i = 0; i < allLowInterestPeriods.length; i++) {
        lowInterestTotalDays += getOverlappingDaysInIntervals({ start: allLowInterestPeriods[i].start, end: allLowInterestPeriods[i].end }, { start: investedDates.start, end: investedDates.end });
    }
    const totalDays = differenceInCalendarDays(investedDates.end, investedDates.start);
    const highInterestDays = totalDays - lowInterestTotalDays;
    return { total: totalDays, hi: highInterestDays, lo: lowInterestTotalDays };
};
let totalStats = daysInvested(investedDates);
console.log(totalStats);
module.exports = daysInvested;
// PLAN
/* ------------------------ // Get input from a user ------------------------ */
// Format input to Date type
// GET distance betweetn the two dates in calendar days
// Create an interval that represents the different interest periods, possibly over a number of years
// get total possible years and create a loop to create all possible intervals of low interest days
// Low and high should equal initial distance (above)
// Use low and high as 'TIME' in the calc function then + together
