// Quando uma função opera sobre outra função
// recebendo um função como parametro ou
// retornando uma função como parametro são chamadas high-order-functions

var calculate = function(fn, x, y) {
    return fn(x, y);
};

var sum = function(x, y) {
    return x + y;
};

var mult = function(x, y) {
    return x * y;
};

console.log(calculate(sum, 2, 5));
console.log(calculate(mult, 2, 5));

// usando arrow functions
const sum2 = (x, y) => x + y;
const mult2 = (x, y) => x * y;

console.log(calculate(sum2, 2, 5));
console.log(calculate(mult2, 2, 5));

