console.log("Filter Ecmas 5");

var numbers = [1, 2, 3];

var sum = function(x, y) {
    return x + y;
};

var numberSum = numbers.reduce(sum, 0);
console.log(numberSum);

var months = ['JAN','FEV','MAR','APR','MAI','JUN','JUL','AUG','SET','OCT','NOV','DEC'];

var monthsShortener = function(previous, current) {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
    }
};

var shorteneMonths = months.reduce(monthsShortener, '');
console.log(shorteneMonths);

console.log("Filter Ecmas 6");
const numbers2 = [1, 2, 3];
const sum2 = (x, y) => x + y;
const numberSum2 = numbers2.reduce(sum2, 0);
console.log(numberSum2);

const months2 = ['JAN','FEV','MAR','APR','MAI','JUN','JUL','AUG','SET','OCT','NOV','DEC'];
const monthsShortener2 = (previous, current) => previous === '' ? current : previous + '/' + current;
const shorteneMonths2 = months2.reduce(monthsShortener2, '');
console.log(shorteneMonths2);

const monthsShortener3 = (previous, current) => {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
   }
};