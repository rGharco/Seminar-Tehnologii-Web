Number.prototype.times = function (functionToCall) {
    for(let i = 0; i < this; i++) {
        functionToCall(i);
    }
}

Number(3).times(() => {
    console.log("Printing...");
});