//Podemos compor funções pequenas para gerar outras mais complexas de forma bem fácil em JavaScript.
// A vantagem é o poder de usar essas funções mais complexas, de forma simples, em toda aplicação.
console.log("Ecmas 5");

var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

var toUpperCase = function(x) {
    return x.toUpperCase();
};

var exclaim = function(x) {
    return x + '!';
};

var angry = compose(toUpperCase, exclaim);

console.log(angry('ahhh'));

console.log("Ecmas 6");

const compose2 = (f, g) => (x) => f(g(x));
const toUpperCase2 = (x) => x.toUpperCase();
const exclaim2 = (x) => x + '!';
const angry2 = compose2(toUpperCase2, exclaim2);
console.log(angry2('ahhh'));
