function parse(str) {
    const regExp = /(-?\d+(?:\.\d+)?)\s*([\*\/\-\+])\s*(-?\d+(?:\.\d+)?)/;

    const result = str.match(regExp);

    if (!result) {
        result = [];
    } else {
        result.shift();
    }

    return result;
}

console.log(parse("1.2 * 3.4"));