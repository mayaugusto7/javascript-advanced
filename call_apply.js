// As funções call e apply nos deixam invocar métodos como se estivéssemos no contexto de um outro objeto:

let myself = { firstName: 'Matheus', lastName: 'Lima' };

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

showFullName.call(myself);
// Matheus Lima

showFullName.apply(myself);
// Matheus Lima


var myself = { age: 26 };

function isOlderThan() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(this.age < arguments[i]);
    }
}

isOlderThan.call(myself, 30, 40, 15); // aceita , 
// true true false

isOlderThan.apply(myself, [30, 40, 15]); //apply aceita um array