const arrayNumere = [16,24,9,6,71,83,18,44,52,91,18];

const divizori = (array, divizor) => {
    return array.filter((x) => {
        if (x % divizor == 0) {
            return true;
        }
        return false;
    }).reduce((acc,current) => {
        return acc + current;
    }, 0);
}

console.log(divizori(arrayNumere, 4));
