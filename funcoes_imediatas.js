// Função executada imediamente ao carregar o arquivo.js, ajundar a encapsular o codigo e mante-lo organizado
// Function Expression
var adder = (function() {
    var myPhrase = ""
    return function(x) {
        return myPhrase = !!myPhrase ? myPhrase.concat(" ", x) : myPhrase.concat(x);
    }
})();

console.log(adder("Olá"));
console.log(adder("Mundo"));
console.log(adder("Novo"));

// myPhrase; is not defined
// Function Declaration and Function Expression

// funcao imediata nomeada
(function doSomething(){})();

// funcao imediata anonima
(function(){})();

// funcao imediata nomeada com parametro
(function doSomething(x){ console.log(x);})(1);

// funcao imediata anonima com parametro
(function(x){ console.log(x); })(1);

(function() { /* codigo */ }()); // Método de Douglas Crockford

// retorna uma function expression, nao precisa dos operadores
var doSomething = function() { return "done"; }(); //

new function(){ /* codigo */ };
new function(x, y){ /* codigo */ }(1, 2);

//Economizamos um byte transformando para Function Expression sem usar o grupo de operadores, mas operadores unários.
!function(){ /* codigo */ }();
~function(){ /* codigo */ }();
-function(){ /* codigo */ }();
+function(){ /* codigo */ }();