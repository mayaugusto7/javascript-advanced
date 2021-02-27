function generateDate() {
    let date = new Date();
    return generate(date);
}

function generate(date) {
    return date;
}

// cada vez que é executada retorna um valor diferente impure fn
console.log(generateDate());
console.log(generateDate());
console.log(generateDate());
console.log(generateDate());
console.log(generateDate());