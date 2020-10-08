function selectFromArray(...arrgs) {
    let array = [];
    for (i = 1; i < arrgs.length; i+=2) {
        array.push(arrgs[i]);
    }
    return array;
}

console.log( selectFromArray(1,2,3,4,5,6,7,8,9,10) ); //2,4,6,8,10