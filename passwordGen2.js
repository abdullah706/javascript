function passwordGen2(num) {
    if (num < 6 || num > 15) {
        return 'erreur de taille';
    } else {
        var result = '';
        for ( var i = 0; i < num; i++ ) {
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        return result;
    }
}

console.log(passwordGen2(1));
