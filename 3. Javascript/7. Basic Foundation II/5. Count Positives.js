function myFun5(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++;
        }

    }
    arr[arr.length - 1] = counter;
    return arr;
}
let x = [-1, 1, 1, 1];
console.log(myFun5(x));