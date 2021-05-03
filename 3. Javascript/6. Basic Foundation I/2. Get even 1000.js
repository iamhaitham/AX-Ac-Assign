function getEven1000() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
getEven1000();