function negatives(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] < 0) {
            arrayName[i] = 0;
        }
    }
    return arrayName;
}
let arr = [1, 5, 10, -2];
console.log(negatives(arr));