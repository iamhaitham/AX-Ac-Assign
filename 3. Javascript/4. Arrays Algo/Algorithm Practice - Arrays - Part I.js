var testArr = [6, 3, 5, 1, 2, 4]

let Sum = 0;
for (let Num = 0; Num < testArr.length; Num++) {
    Sum += testArr[Num];
    console.log(`Num: ${testArr[Num]}, Sum: ${Sum}`);
}