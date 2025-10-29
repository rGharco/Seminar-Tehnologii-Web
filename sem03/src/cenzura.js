const dictionary = ["este", "nu este", "da", "nu"];

const censorFn = (stringText, arrayDictionary) => {
    const stringArray = stringText.split(" ");

    const indexArray = [];

    for(const element of arrayDictionary) {
        if (stringArray.indexOf(element) == -1) {
            continue;
        }
        else {
            indexArray.push(stringArray.indexOf(element));
        }
    }

    for(const index of indexArray) {
        let censorStringLength = stringArray[index].length;
        stringArray.splice(index,1,"*".repeat(censorStringLength));
    }

    

    return stringArray.join(" ");
}

const cenzuraChaining = (stringText, arrayDictionary) => {
    return stringText.split(" ").map(stringElement => {
        for(const dictionaryElement of arrayDictionary) {
            if(stringElement == dictionaryElement) {
                stringElement = "*".repeat(stringElement.length);    
            }
        }
        return stringElement;
    }).join(" ");
}

//console.log(censorFn("Javascript este un limbaj da nu e asa misto", dictionary));
console.log(cenzuraChaining("Javascript este un limbaj da nu e asa misto", dictionary));
