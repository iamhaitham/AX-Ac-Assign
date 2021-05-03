function findMax(arrayName) {
    let max = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] > max) {
            max = arrayName[i];
        }
    }
    return max;
}
let arr = [-3, 3, 5, 7]
console.log(findMax(arr));