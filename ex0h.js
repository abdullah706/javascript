function ex0h(str) {
    var xCount = 0;
    var oCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount = xCount + 1;
        }
        if (str[i] === 'o') {
            oCount = oCount + 1;
        }
    }

    if (xCount === oCount) {
        return true;
    } else {
        return false;
    }
}

console.log(ex0h('xooxxo'));

console.log(1 == '1'); // retourne true car compare les valeurs mais pas les types
console.log(1 === '1'); // retourn false car compare les valeurs et les types