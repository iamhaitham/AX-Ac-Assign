function sumOdd5000() {
    let sum = 0;
    for (let i = 1; i < 5001; i += 2) {
        sum += i;
    }
    return sum;
}
sumOdd5000();