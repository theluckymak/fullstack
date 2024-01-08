function isThreePower(number) {
    if (number <= 0) {
        return false;
    }

    while (number !== 1) {
        if (number % 3 !== 0) {
            return false;
        }
        number /= 3;
    }

    return true;
}