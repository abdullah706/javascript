// var test = "hello paris";
// test.substr(0, 1);
// console.log(test);

// Split
var test = "what a wonderful world";

var tab = test.split(" ");
console.log(test.split(" "));

var res = "";

for (var i = 0; i < tab.length; i++) {
    tab[i] = tab[i].substr(0, 1).toUpperCase() + tab[i].substr(1);
    res = res + tab[i] + " ";
}

console.log(res);