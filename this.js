//no JavaScript o valor de this é determinado pelo contexto de invocação da função e onde elas foram chamadas.

console.log(this);

function func() {
    return this;
}

console.log(func()); 

// this no objeto refere-se ao proprio objeto
var object = {
    func: function() {
        return this;
    }
}

console.log(object.func);


var father = {
    name: "father",
    child: {
        name: "child",
        func: function() {
            return this.name;
        }
    }            
}

console.log(father.child.func()); 