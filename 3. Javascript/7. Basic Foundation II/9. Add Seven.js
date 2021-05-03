function MyFun9(arrayName) {
    let array2 = [];
    for (let i = 0; i < arrayName.length; i++) {
        array2[i] = arrayName[i] + 7;
    }
    return array2;
}
let array = [1, 2, 3]
console.log(MyFun9(array));