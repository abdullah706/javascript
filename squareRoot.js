function squareRoot(num) {
    var i = 1;
    
    while (i * i < num) {
        i++;
    }

    if (i * i == num) {
        return i;
    } else {
        return 0;
    }
}

console.log(squareRoot(25));
console.log(squareRoot(32));