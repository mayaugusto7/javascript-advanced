var Animal = {
    walk: function() {
        console.log("I'm walking...");
    }
};

var Dog = Object.create(Animal); // É um prototype de Animal

Animal.walk();
Dog.walk(); // É um prototype de Animal por isso consegue invocar o metodo walk()

var Airplane = {
    fly: function() {
        console.log("I'm flying...");
    }
};

// Airplane.walk(); is not a function   