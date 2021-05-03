function maxMinAvg(arrayName) {
    let arrnew = [];
    let sum = 0;
    let avg = 0;
    let max = arrayName[0];
    let min = arrayName[0];
    for (let i = 0; i < arrayName.length; i++) {
        sum += arrayName[i];
        if (arrayName[i] < min) {
            min = arrayName[i];
        }
        if (arrayName[i] > max) {
            max = arrayName[i];
        }
    }
    avg = sum / arrayName.length;
    arrnew.push(max, min, avg);
    return arrnew;
}

let arr = [1, 5, 10, -2];
console.log(maxMinAvg(arr));