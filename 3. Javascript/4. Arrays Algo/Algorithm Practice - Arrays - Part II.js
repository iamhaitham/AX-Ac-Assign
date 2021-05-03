var testArr = [6, 3, 5, 1, 2, 4]
let newArr = [];
for (let i = 0; i < testArr.length; i++) {
    newArr[i] = testArr[i] * i;
}
console.log(newArr);