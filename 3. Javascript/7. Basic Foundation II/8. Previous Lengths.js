function myFun8(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

let x = ["hello", "dojo", "awesome"];
console.log(myFun8(x));