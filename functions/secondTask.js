function determineMyName(name) {
    return ( name === 'aliaksandr') ? "Hello " + name : "It's not my name";
}

console.log( determineMyName('aliaksandr') ); //Hello aliaksandr
console.log( determineMyName('John') ); //It's not my name
