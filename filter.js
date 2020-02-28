var months = [
    { shortName: 'JAN', fullName: 'January', number: 1 },
    { shortName: 'FEV', fullName: 'February', number: 2 },
    { shortName: 'MAR', fullName: 'February', number: 3 },
    { shortName: 'APR', fullName: 'February', number: 4 },
    { shortName: 'MAI', fullName: 'February', number: 5 },
    { shortName: 'JUN', fullName: 'February', number: 6 },
    { shortName: 'JUL', fullName: 'February', number: 7 },
    { shortName: 'AUG', fullName: 'February', number: 8 },
    { shortName: 'SET', fullName: 'February', number: 9 },
    { shortName: 'OCT', fullName: 'February', number: 10 },
    { shortName: 'NOV', fullName: 'February', number: 11 },
    { shortName: 'DEC', fullName: 'February', number: 12 }
];

var firstSemester = months.filter(function(month) {
    return month.number <= 6
});

console.log(firstSemester);