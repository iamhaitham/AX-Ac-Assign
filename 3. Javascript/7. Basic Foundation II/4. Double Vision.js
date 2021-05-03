function myFun4(arr) {
    let arrnew = [];
    for (let i = 0; i < arr.length; i++) {
        arrnew[i] = arr[i] * 2;
    }
    return arrnew;
}

let x = [1, 2, 3];
console.log(myFun4(x));