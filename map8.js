var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function(elem){
    elem.fullName = elem.firstName + ' ' + elem.surname;
    return elem;
}) ;


console.log(arr2);
