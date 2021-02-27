console.log("-------------Maps");

const months = [
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

const shortNameMothsMap = months.map(function(month) {
    return month.shortName;
})

console.log(shortNameMothsMap);

const numbers = [1, 2, 3];
const square = number => number * number;
const squareNumber = numbers.map(square);
console.log(squareNumber);

const students = [
    { name: 'Anna', grade: 6},
    { name: 'John', grade: 4},
    { name: 'Maria', grade: 9}
];

const teachers = [
    { name: 'Mark', salary: 2500},
    { name: 'Mark', salary: 3700},
    { name: 'Mark', salary: 1900}
];

const byName = (object) => object.name;
const byNames = (list) => list.map(byName);

console.log(byNames(students));
console.log(byNames(teachers));