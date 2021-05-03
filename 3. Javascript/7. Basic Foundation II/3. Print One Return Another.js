function myFun3(arr) {
    let odd;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length - 2]);
    return odd;
}
let a = [99, 88, 77, 66]
myFun3(a);