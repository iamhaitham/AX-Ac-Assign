function myFun6(arrayName) {
    for (let i = 0; i < arrayName.length; i += 3) {
        if (arrayName[i] % 2 != 0 && arrayName[i + 1] % 2 != 0 && arrayName[i + 2] % 2 != 0) {
            console.log("That's odd!");
        }
        if (arrayName[i] % 2 == 0 && arrayName[i + 1] % 2 == 0 && arrayName[i + 2] % 2 == 0) {
            console.log("Even more so!");
        }
    }
}
let x = [1, 3, 5, 7, 8, 9, 12, 16, 20];
myFun6(x);