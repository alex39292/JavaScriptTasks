const regExp = /-?\d+(\.\d+)?/g;

const str = "-1.5 0 2 -123.4.";

console.log( str.match(regExp) ); // -1.5, 0, 2, -123.4