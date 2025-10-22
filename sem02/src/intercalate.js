let intercalate = (array1, array2) => {
    let array = new Array();

    for(let i = 0; i < array1.length; i++) {
        array.push(array1[i]);
        array.push(array2[i]);
    }
    return array;
}

console.log(intercalate([1,2,3],[4,5,6]));
