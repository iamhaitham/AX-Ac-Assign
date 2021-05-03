function fibonacci(num) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[num];
}
let num = 7;

console.log(fibonacci(num));


/*
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/