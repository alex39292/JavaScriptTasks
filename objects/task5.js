function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            const multNumber = obj[key] * 2;
            console.info(`${key} is now ${multNumber}`);
        } else {
        console.info(`${key} is without definitions`);
        }
    }
}

const myobject = {
    param1: 2,
    param2: 3,
    param3: "some text"
  };

  multiplyNumeric(myobject);