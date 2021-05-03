function myFun13(arr) {
    let temp;
    for (let i = 0; i < arr.length / 2; i += 2) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

let arr = [2, 3, 4, 5, 6, 7, 8];
console.log(myFun13(arr));

// [0,1,2,3,4,5,6] --> [6,1,4,3,2,5,0]