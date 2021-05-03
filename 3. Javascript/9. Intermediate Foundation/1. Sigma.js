function sigma(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let num = 10;
console.log(sigma(num));