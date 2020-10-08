let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (x) => (x >= a && x <= b);
}

function inArray(arr) {
    return (x) => arr.includes(x);
}

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2