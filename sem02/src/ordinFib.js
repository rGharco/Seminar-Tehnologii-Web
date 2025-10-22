function fibonacci (ordin) {
    if (ordin <= 1) {
        return ordin;
    }
    else {
        return fibonacci(ordin-1) + fibonacci(ordin-2);
    }
}

console.log(fibonacci(process.argv[2]));
