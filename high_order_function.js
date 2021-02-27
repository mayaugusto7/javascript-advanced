// Quando uma função opera sobre outra função
// recebendo um função como parametro ou
// retornando uma função como parametro são chamadas high-order-functions

const calculate = (fn, x, y) => {
    return fn(x, y);
};

const sum = (x, y) => {
    return x + y;
};

const multiply = (x, y) => {
    return x * y;
};

console.log(calculate(sum, 2, 5)); // 7
console.log(calculate(multiply, 2 , 5)); // 10

const fullName = (fn, name, last) => {
    return fn(name, last);
}

const fn = (name, last) => name + ' ' + last;

console.log(fullName(fn, 'Maycon', 'Ribeiro'));
console.log(fullName(fn, 'Marcos', 'Antônio'));
console.log(fullName(fn, 'Rosemary', 'Martins'));