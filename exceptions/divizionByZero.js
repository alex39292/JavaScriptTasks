class DivizionByZero extends Error {
    constructor(message) {
        super(message);
        this.name = "DivizionByZero";
    }
}

function divizion(a, b) {
    if (b === 0) {
        throw new DivizionByZero("to zero can not be divided");
    } else {
        return a / b;
    }
}

try {
    console.log( divizion(1, 0) ); //to zero can not be divided
} catch (err) {
    if (err instanceof DivizionByZero) {
        console.log(err.message);
    } else {
        console.log(err.name);
    }
} 
