Assumptions:

- For MVP, no compound interest / strecth goal is annual compound. Called simple interest?
- The investment could span over several years or only a day
- Interest is added at midnight (day end) no matter what time it was placed in the fund. i.e placed in a 10pm would still earn one day interest for that day

# PLAN

### Research

How interest works, is compounding common/expected.
Libraries that may help deal with dates better that JS Date.

### MATH

Work out interest on daily basis daily, convert annual yield into daily. My make dealing with multiple yield rates easier to manage.

A = P(1 + rt)

A = Total Accrued Amount (principal + interest)
P = Principal Amount
I = Interest Amount
r = Rate of Interest per year in decimal; r = R/100
R = Rate of Interest per year as a percent; R = r \* 100
t = Time Period involved in months or years. t = (days/365)

### SPRINT

STACK: TS, NODE. Frontend if time? : small HTML page
use TDD

- Set up project. TS, JS compiled to separate folder.
- - install dependencies inc. JEST

## CALC

- Write test for simple interest formula
- Write function for simple interest
- - Test

## GET DAYS

- Write test for num of days (i.e input converted to length)
- - Write test for num of days inc. separate rates. i.e return obj {high: (12 days), low: 79 (days)} ,

## COMBINE

Use value returned from getDays function to plug into calc funciton

- WRITE TEST
