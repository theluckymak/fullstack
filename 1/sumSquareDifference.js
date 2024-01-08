function sumSquareDifference(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    let sumOfSquares = 0;
    for (let i = 1; i <= num; i++) {
        sumOfSquares += i ** 2;
    }

    let squareOfSum = sum ** 2;

    return squareOfSum - sumOfSquares;
}