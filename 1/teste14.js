//pedir ao usuario para adivinhar um num entre 1 e 10
const prompt = require('prompt-sync')();

const numeroCorreto =  Math.floor((Math.random() * 10) + 1);
console.log(numeroCorreto);
let tentativa;

do{
    tentativa = parseInt(prompt("Adivinhe entre 1 - 10: "));
    if(tentativa < numeroCorreto){
        console.log("Tente um número maior!");
    }else if(tentativa > numeroCorreto){
        console.log("Tente um menor!");
    }
}while(tentativa !== numeroCorreto);

console.log("Você acertou!");