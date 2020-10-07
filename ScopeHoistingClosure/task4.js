let sum = function(a) {
    return function(b) {
        return a + b;
    };
}

console.log(sum(8)(2));