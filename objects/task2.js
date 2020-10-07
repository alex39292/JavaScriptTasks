function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let object = {};
console.log(isEmpty(object));
object.name = 'Name';
console.log(isEmpty(object));