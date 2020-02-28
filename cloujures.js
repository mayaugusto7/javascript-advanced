(function() {
    var a = 1;
})();

var b = 2;

// console.log(a);is not defined


function init() {
    var name = 'Matheus';
    function hello() {
        console.log('Olá: ' + name);
    }

    hello();
}

init();

// hello(); is not defined