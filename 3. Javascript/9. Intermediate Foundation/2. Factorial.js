function factorial(num) {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
let num = 5;
console.log(factorial(num));