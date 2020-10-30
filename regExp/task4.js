const regexp = /([0-9A-Fa-f]{2}:){5}([0-9A-Fa-f]{2})/;

console.log(regexp.test('01:32:54:67:89:AB')); // true

console.log(regexp.test('0132546789AB')); // false (нет двоеточий)

console.log(regexp.test('01:32:54:67:89')); // false (5 чисел, должно быть 6)

console.log(regexp.test('01:32:54:67:89:ZZ')); // false (ZZ в конце строки)