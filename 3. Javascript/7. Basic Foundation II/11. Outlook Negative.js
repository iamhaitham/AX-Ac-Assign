function myFun11(arr) {
    let arrnew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrnew[i] = arr[i] * -1
        } else {
            arrnew[i] = arr[i];
        }
    }
    return arrnew;
}


let arr = [1, 2, 7, 0, -1];
console.log(myFun11(arr));