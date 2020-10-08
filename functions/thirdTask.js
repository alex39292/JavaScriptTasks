function calculateType(arg) {
    return typeof arg;
}

console.log( calculateType(123) ); //number
console.log( calculateType('123') ); //string
console.log( calculateType([1,2,3]) ); //object