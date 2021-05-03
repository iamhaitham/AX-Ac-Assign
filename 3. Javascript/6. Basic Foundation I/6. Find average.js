function findAverage(arrayName) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arrayName.length; i++) {
        sum += arrayName[i];
    }
    avg = sum / arrayName.length;
    return avg;
}
let arr = [1, 3, 5, 7, 20];
console.log(findAverage(arr));