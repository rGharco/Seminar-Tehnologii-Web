class EvenSequence {
    #initValue;
    static #nextValue;

    constructor(initValue) {
        this.#initValue = initValue;
    }

    nextValue() {
        if (this.#initValue % 2 == 0) {
            EvenSequence.#nextValue = this.#initValue + 2;
        }    
        else {
            EvenSequence.#nextValue = this.#initValue + 1;
        }

        return EvenSequence.#nextValue;
    }
}

seq1 = new EvenSequence(3);
console.log(seq1.nextValue());


