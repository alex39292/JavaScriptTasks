function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

const object = {};
console.log(isEmpty(object));
object.name = 'Name';
console.log(isEmpty(object));