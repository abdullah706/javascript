var arr = ['apple', 'croissant', 'pear'];
var arr2 = arr.map(function(smp){
   smp = '<li>' + smp +'</li>';
return smp;

});
console.log(arr2);


var x = 'apple';
x = '<li>' + x +'</li>';

console.log(x);

// '<li>apple</li>


