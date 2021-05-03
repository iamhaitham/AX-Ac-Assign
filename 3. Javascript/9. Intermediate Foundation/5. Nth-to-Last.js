function nthToLast(arr, N) {

    if (arr.length - 1 - (N - 1) < 0) {
        return null;
    } else {
        return arr[arr.length - 1 - (N - 1)];
    }
}
let arr = [5, 2, 3, 6, 4, 9, 7];
let N = 3;
console.log(nthToLast(arr, N));