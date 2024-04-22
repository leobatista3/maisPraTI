let soma = function(n1, n2){
    return n1 + n2
}

let subtracao = function(n1, n2){
    return n1 - n2
}

let multiplicacao = function(n1, n2){
    return n1 * n2
}

let divisao = function(n1, n2){
    return n1 / n2
}

function calculadora(op, n1, n2, soma, subtracao, multiplicacao, divisao){
    switch(op){
        case "soma":
            let resultado = soma(n1, n2)
            return resultado
            break
    }
}

calculadora("Soma: ", 10, 10, soma)