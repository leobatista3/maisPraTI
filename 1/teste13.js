const prompt = require('prompt-sync')();
let senha;

do{
    senha = prompt("Senha: ");
}while(senha != '123');

console.log("Senha correta!");