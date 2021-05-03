function myFun14(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6];
let num = -1;
console.log(myFun14(arr, num))