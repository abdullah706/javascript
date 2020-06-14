function vowelCount(str) {
    var res = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'u' || str[i] === 'o') {
            res = res + 1;
        }
    }
    return res;
}

console.log(vowelCount('hello'));