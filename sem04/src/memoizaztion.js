cache = [];

function exponential(n, pow) {
    if (cache[pow]) {
        return cache[pow];
    }
    else if ( pow == 0) {
        return 1;
    }
    else if ( pow == 1) {
        return n;
    }
    let result = n * exponential(n, pow-1);

    cache[pow] = result;
    return result;
}

console.log(exponential(2,200));