console.log("Ecmas 5");

var numbers = [1, 2, 3];
var square = function(x) {
    return x * x;
};

var squareNumbers = numbers.map(square);
console.log(squareNumbers);

var students = [
    { name: "Anna", grade: 6 },
    { name: "Jonh", grade: 4 },
    { name: "Maria", grade: 9 }
];

var teachers = [
    { name: "Mark", salary: 2500 },
    { name: "Todd", salary: 3700 },
    { name: "Angela", salary: 1900 }
];

var byName = function(object) {
    return object.name
};

var byNames = function(list) {
    return list.map(byName);
};

console.log("Students: " +  byNames(students));
console.log("Teacheres: " + byNames(teachers));

console.log("Ecmas 6");

const numbers2 = [1, 2, 3];
const square2 = (x) => x * x;
let squareNumbers2 = numbers2.map(square2);
console.log(squareNumbers2);

const students2 = [
    { name: "Anna", grade: 6 },
    { name: "Jonh", grade: 4 },
    { name: "Maria", grade: 9 }
];

const teachers2 = [
    { name: "Mark", salary: 2500 },
    { name: "Todd", salary: 3700 },
    { name: "Angela", salary: 1900 }
];

let byName2 = (object) => object.name;
let byNames2 = (list) => list.map(byName2);

console.log("Students: " +  byNames2(students));
console.log("Teacheres: " + byNames2(teachers));