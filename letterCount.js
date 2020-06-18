function letterCount(str, search) {
    var count = 0;
    for  (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === search) {
            count++;
        }
    }

    return count;
}

console.log(letterCount('Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this', 'i'));