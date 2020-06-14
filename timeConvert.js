function timeConvert(num) {
    var hours = num / (60 * 60);
    var minutes = (num % (60 * 60)) / 60;
    var seconds = (num % 60);

    return Math.floor(hours) + ':' + Math.floor(minutes) + ':' + Math.floor(seconds);
}

console.log(timeConvert(126));
console.log(timeConvert(3700));
console.log(timeConvert(3600));