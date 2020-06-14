function alphabetSoup(str) {
    return str.split('').sort().join('');
}

console.log(alphabetSoup('hello'));

console.log('hello'.split(''));
console.log('hello'.split('').sort());
console.log('hello'.split('').sort().join(''));