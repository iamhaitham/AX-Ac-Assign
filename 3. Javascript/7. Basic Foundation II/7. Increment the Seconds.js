function myFun7(arrayName) {
    let arrnew = [];
    for (let i = 0; i < arrayName.length; i++) {
        if (i % 2 != 0) {
            arrnew[i] = arrayName[i] + 1;
        } else {
            arrnew[i] = arrayName[i];
        }
    }
    console.log(arrnew);

    return arr;
}
let arr = [2, 4, 3, 7, 5, 0, -2, -7];
console.log(arr);
console.log(myFun7(arr));