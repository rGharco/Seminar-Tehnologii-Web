const reduce = (array, callbackFn, initialValue) => {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callbackFn(accumulator, array[i], i, array);
    }
    return accumulator;
};

const array = [1, 2, 3];
const result = reduce(array, (acc, current) => acc + current, 0);

console.log(result);

