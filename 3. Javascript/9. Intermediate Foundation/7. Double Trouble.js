let arrnew = [];

function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i++) {
        arrnew.push(arr[i]);
        arrnew.push(arr[i]);
    }
    return arrnew;
}

let arr = [4, "Ulysses", 42, false];

console.log(doubleTrouble(arr));