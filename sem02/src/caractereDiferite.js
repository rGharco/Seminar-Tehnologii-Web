function differentCharacters(string1, string2) {
    let count = 0;

    if (string1.length != string2.length) {
        return -1;
    }
    else {
        for(let i = 0; i < string1.length; i++) {
            if (string1[i] != string2[i]) {
                count++;
            }
        }
    }

    return count;
}

console.log(differentCharacters(`DADA2`, `MAMA`));
console.log(differentCharacters(`DADA`, `MAMA`));
