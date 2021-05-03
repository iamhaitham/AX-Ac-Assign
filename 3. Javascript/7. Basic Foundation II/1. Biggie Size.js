function myFun1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}



let x = [-1, 3, 5, -5];
console.log(myFun1(x));