var months = [
    { shortName: 'JAN', fullName: 'January', number: 1 },
    { shortName: 'FEV', fullName: 'February', number: 2 },
    { shortName: 'MAR', fullName: 'March', number: 3 },
    { shortName: 'APR', fullName: 'April', number: 4 },
    { shortName: 'MAI', fullName: 'May', number: 5 },
    { shortName: 'JUN', fullName: 'June', number: 6 },
    { shortName: 'JUL', fullName: 'July', number: 7 },
    { shortName: 'AUG', fullName: 'August', number: 8 },
    { shortName: 'SET', fullName: 'September', number: 9 },
    { shortName: 'OCT', fullName: 'October', number: 10 },
    { shortName: 'NOV', fullName: 'November', number: 11 },
    { shortName: 'DEC', fullName: 'December', number: 12 }
];

var monthsAcc = months.reduce(function(acc, month) {
    return acc + '/' + month.shortName;
}, '');

console.log(monthsAcc);