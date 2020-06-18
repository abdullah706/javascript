function passwordGen(num) {
    if (num < 6 || num > 15) {
        return 'erreur de taille';
    } else {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < num; i++ ) {
            result += characters[Math.floor(Math.random() * 26)];
        }
        return result;
    }
}

console.log(passwordGen(7));