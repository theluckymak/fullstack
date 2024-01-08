function getBoomerangsCount(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {

        if (arr[i] === arr[i + 2]) {
            count++;
        }
    }

    return count;
}