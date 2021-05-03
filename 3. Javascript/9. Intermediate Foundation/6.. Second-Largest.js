function secondLargest(arr) {
    let max1 = arr[0];
    let max2 = arr[arr.length - 1];
    for (let i = 0; i <= ((arr.length - 1) / 2); i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
        }
    }

    for (let j = arr.length - 1; j > ((arr.length - 1) / 2); j--) {
        if (arr[j] > max2) {
            max2 = arr[j];
        }
    }

    if (max1 > max2) {
        return max2;
    } else {
        return max1;
    }
}

let arr = [42, 1, 4, 3.14, 7];
console.log(secondLargest(arr));