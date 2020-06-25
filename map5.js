var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(function (word){
var x = word.split('');
//console.log(new);
var arrRev = x.reverse();
//console.log(arrRev);
var revword = arrRev.join('');
return revword;

});
console.log(arr2);
