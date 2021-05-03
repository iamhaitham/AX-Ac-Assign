function myFun10(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let a = arr[i];
        let b = arr[arr.length - 1 - i];
        arr[i] = a + b - a;
        arr[arr.length - 1 - i] = a + b - b;
    }
    return arr;
}
let arr = [3, 1, 6, 4, 2];
console.log(myFun10(arr));

//[2,4,6,1,3]