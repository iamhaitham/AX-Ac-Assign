function iterateAnArray(arrayName) {
    let sum = 0;
    for (let i = 0; i < arrayName.length; i++) {
        sum += arrayName[i];
    }
    return sum;
}
let arr = [-1, 10, 2]
console.log(iterateAnArray(arr));