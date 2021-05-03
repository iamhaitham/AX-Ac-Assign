function secondToLast(arr) {
    if (arr.length > 1) {
        return arr[arr.length - 2];
    } else {
        return null;
    }
}

let arr = [42, true, 4, "Liam", 7];
console.log(secondToLast(arr));