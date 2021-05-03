function myFun2(array) {
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(min);
    return max;
}
let a = [1, 2, 3, 0, -5, -8, 10]
myFun2(a);