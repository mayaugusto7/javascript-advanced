console.log("Filter Ecmas 5");

var numbers = [1, 4, 7, 10];

var isBiggerThanFour = function(value) {
    return value > 4;
};

var numbersBiggerThanFour = numbers.filter(isBiggerThanFour);
console.log(numbersBiggerThanFour);

console.log("Filter Ecmas 6");

const numbers2 = [1, 4, 7, 10];
const isBiggerThanFour2 = (value) => value > 4;
const numbersBiggerThanFour2 = numbers2.filter(isBiggerThanFour2);
console.log(numbersBiggerThanFour2);