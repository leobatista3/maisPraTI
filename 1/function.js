function Cerveja(teor, cevada){
    let potencia = teor * cevada
    return potencia
}

let prompt = require('prompt-sync')()

let te = prompt("Teor de álcool: ")
let ce = prompt("Cevada: ")

//Passando parâmetros
let result = Cerveja(te, ce)

console.log('Potencia da cerveja: ' + result)
