const a = 123;
const b = 'some text';
const c = true;

//boolean * string
console.log(c * b); //NaN

//number * boolean
console.log(a * c); //123

//number * string
console.log(a * b); //NaN

//string * number
console.log(b * a); //NaN

//string * string 
console.log(b * b); //NaN