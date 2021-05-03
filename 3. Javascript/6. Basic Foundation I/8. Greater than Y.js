function greaterThanY(arrayName, Y) {
    let counter = 0;
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i] > Y) {
            counter++;
        }
    }
    return counter;
}

let arr = [1, 3, 5, 7];
let Y = 3;

console.log(greaterThanY(arr, Y));