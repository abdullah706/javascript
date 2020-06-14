function firstReverse(str) {
    var res = '';

    for (var i = str.length - 1; i >= 0; i--) {
        res = res + str[i];

    }

    return res;
}



console.log(firstReverse('Hello'));

console.log(firstReverse('I Love Code'));

// console.log('HelloeAAA'.split('e'));