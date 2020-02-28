//O bind é muito semelhante ao call e apply: serve para passarmos um contexto para uma função,
//que não é dela, e podermos executá-la. A diferença é que call e apply invocam a função imediatamente:

var person = {
    name: "Maycon",
    hello: function(thing) {
        console.log(this.name + " disse Olá " + thing)
    }
};

person.hello.call(person, 'Brazil');

var hello = person.hello.bind(person);
hello("Mundo");// Maycon disse Olá Mundo

//É comum usarmos o bind para o disparo de eventos:

element.addEventListener('click', this.onClick.bind(this));