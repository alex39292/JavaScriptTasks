function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            console.log(key + ' is now ' + (obj[key] *= 2));
        } else {
        console.log(key + ' is without definitions');
        }
    }
}

const myobject = {
    param1: 2,
    param2: 3,
    param3: "some text"
  };

  multiplyNumeric(myobject);