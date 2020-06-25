var arr =  [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2 = arr.map(function (nom){
return  nom.firstName + ' ' + nom.surname
});
console.log(arr2);