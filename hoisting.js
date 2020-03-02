// Definição de hoisting => A declaração de variáveis em JavaScript é hoisted (ou elevada), mas não sua inicialização
// Para evitar problemas inesperados, tente sempre declarar todas a variáveis no topo do escopo, mesmo que você não as tenha inicializado ainda.
// Ou então atualize para o ES6 e passe a usar as keywords let e const. Elas funcionam da maneira esperada:

let n = 1;

function init() {
    let n = 2; 
    console.log(n); // undefined
}

init();

function var_hosting() {
    var n = 1;
    if (true) {
        var n = 2;
        console.log(n); // 2
    }

    console.log(n); // 2
}

var_hosting();

function let() {
    let n = 1;
    if (true) {
        let n = 2;
        console.log(n); // 2
    }
    console.log(n); // 1
}

let();