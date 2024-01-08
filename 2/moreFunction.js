function moreFunction(number) {
    return function(array) {
        return array.map(element => element / number);
    };
}