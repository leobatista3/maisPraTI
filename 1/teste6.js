//ex 6 calc switch
const prompt = require('prompt-sync')();

let n1, n2, op, resultado;
n1 = parseInt(prompt("Num 1: "));
n2 = parseInt(prompt("Num 2: "));
op = prompt("Operação: ")

switch(op){
    case '+':
        console.log(n1 + n2);
        break;
    case '-':
        console.log(n1 - n2);
        break;
    case '*':
        console.log(n1 * n2);
        break;
    case '/':
        if(n2 != 0){
            console.log(n1 / n2);
        }        
        break;
}