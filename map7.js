var arr =  [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2 = arr.map(function (nom){
var prenom =  nom.firstName + ' ' + nom.surname;
var objet = {
    fullName: prenom
    };
  return objet;
});
console.log(arr2);