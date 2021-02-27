function square(x) {
    return x * x;
}

// cada vez que executada retorna sempre o mesmo valor (immutable an non side-effects)
console.log(square(2));
console.log(square(4));
console.log(square(6));
console.log(square(8));