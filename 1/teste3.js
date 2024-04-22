// ex 3 triangulo
const prompt = require('prompt-sync')();

let um = parseInt(prompt("Lado 1: "));
let dois = parseInt(prompt("Lado 2: "));
let tres = parseInt(prompt("Lado 3: "));

if(um + dois > tres && um + tres > dois && dois + tres > um){
    console.log("É possível formar um triângulo");
}else{
    console.log("Não é possível formar um triãngulo");
}


