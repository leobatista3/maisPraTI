// ex 2
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Num 1: "));
let n2 = parseInt(prompt("Num 2: "));

if(n1 > n2){
    console.log("Num 1 maior");
}else if(n2 > n1){
    console.log("Num 2 maior");
}else{
    console.log("Iguais");
}