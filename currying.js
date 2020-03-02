//A técnica de transformar uma função com múltiplos parâmetros em uma sequência de funções que aceitam apenas um parâmetro é chamada de Currying.
console.log("Ecmas 5 currying");
var add = function(x, y) {
    return x + y;
};
console.log(add(5, 2));

// currying
var add_c = function(x) {
    return function(y) {
        return x + y;
    };
};
console.log(add_c(5)(2));
console.log(add_c(5))

var addFive = add_c(5);
var addTen = add_c(10);

console.log(addFive(3));
console.log(addFive(1));

console.log(addTen(1));
console.log(addTen(10));

console.log("Ecmas 5 currying");

var greeting = function(greet) {
    return function(name) {
        return greet + ' ' + name;
    };
};

var hello = greeting('Hello');
console.log(hello('World'));
console.log(hello('Maycon'));

console.log("Ecmas 6 currying");

const greeting2 = (greet) => (name) => greet + ' ' + name;
const hello2 = greeting2('Hello');
console.log(hello2('World'));
console.log(hello2('Maycon'));
