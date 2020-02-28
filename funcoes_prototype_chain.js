var object = {
    func: function() {
        return this.name;
    }
};

var anotherObject = Object.create(object);
anotherObject.name = 'Matheus';

console.log(anotherObject.func());