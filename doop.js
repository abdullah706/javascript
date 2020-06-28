
var args = process.argv.slice(2);

var num1 = Number(args[0]);
var operator = args[1];
var num2 = Number(args[2]);

if (args.length !== 3) {
    console.log('error');
} else {
    doop(num1, operator, num2);
}

function doop(num1, operator, num2) {
    switch(operator) {
        case "+": 
            console.log(num1 + num2);
            break;
        case "-": 
            console.log(num1 - num2);
            break;
        case "*": 
            console.log(num1 * num2);
            break;
        case "/": 
            console.log(num1 / num2);
            break;      
        case "%": 
            console.log(num1 % num2);
            break; 
    }
}

    console.log('first arg: ', process.argv[2]);