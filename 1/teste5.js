// ex switch
const prompt = require('prompt-sync')();
let dia = parseInt(prompt("Dia: "));

switch(dia){
    case 1:
        console.log("Segunda!");
        break;
    case 2:
        console.log("Terça!");
        break;
    case 3:
        console.log("Quarta!");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
}