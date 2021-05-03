function swapValues(arrayName) {
    let temp;
    temp = arrayName[0];
    arrayName[0] = arrayName[arrayName.length - 1];
    arrayName[arrayName.length - 1] = temp;
    if (arrayName.length >= 2) {
        return arrayName;
    }
}
let arr = [1, 5, 10, -2]
console.log(swapValues(arr));