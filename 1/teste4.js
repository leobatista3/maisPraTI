// ex4 calculadora
const prompt = require('prompt-sync')();

let n1, n2, op, resultado;
n1 = parseInt(prompt("Num 1: "));
n2 = parseInt(prompt("Num 2: "));
op = prompt("Operação: ")

if(op === '+'){
    resultado = n1 + n2;
}else if(op === '-'){
    resultado = n1 - n2;
}else if(op === '*'){
    resultado = n1 * n2;
}else if(op === '/'){
    if(n2 != 0){
        resultado = n1 / n2;
    }else{
        console.log("Erro: divisão por zero não é possível!");
        resultado = undefined;
    }
}else{
    console.log("Operação inválida!");
}

if(resultado != undefined){
    console.log("Resultado: ", resultado)
}
