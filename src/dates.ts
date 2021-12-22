var differenceInCalendarDays = require('date-fns/differenceInCalendarDays');

interface Interval {
  start: Date;
  end: Date;
}

class Interval {
  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
  }
}

const start = new Date(2020, 6, 1);
const end = new Date(2020, 6, 4);
const investedDates = new Interval(start, end);

const daysInvested = (investedDates: Interval): number => {
  return differenceInCalendarDays(investedDates.end, investedDates.start);
};

module.exports = daysInvested;

// console.log();
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
