function numberToString(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] < 0) {
            arrayName[i] = "Dojo";
        }
    }
    return arrayName;
}
let arr = [-1, -3, 2];
console.log(numberToString(arr));