function dashInsert(str){
    var split = str.split('');
    for (var i = 0; i < split.length; i++) {
        if(Number(split[i]) % 2 === 1 && Number(split[i+1]) % 2 === 1)
        {

            split.splice(i + 1, 0,'-');
            
        }
    }
    return split.join('');

}

console.log(dashInsert('56730'));