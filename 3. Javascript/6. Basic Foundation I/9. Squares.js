function squares(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        arrayName[i] = arrayName[i] ** 2;
    }
    return arrayName;
}
let arr = [1, 5, 10, -2];
console.log(squares(arr));