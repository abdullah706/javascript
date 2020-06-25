var arr = [1,2,3,4];
function isEven(x){
    return x % 2 === 0;
}
 var arr2 = arr.map(isEven);
 console.log(arr2);