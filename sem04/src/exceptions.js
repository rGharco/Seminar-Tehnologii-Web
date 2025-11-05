function increaseSalary(salaryArray, percentage) {
    if(!(salaryArray instanceof Array) && (typeof percentage != number || percentage instanceof Number)) {
        throw new Error("Must include an Array type and a number type");
    }

    for(let i = 0; i < salaryArray.length; i++) {
        salaryArray[i] = salaryArray[i] * ((percentage + 100) / 100);
        console.log(salaryArray[i]);
    }
}

increaseSalary([100,200,300], 10);

