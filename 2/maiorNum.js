function maiorNumMatriz(matriz){
    let maior = matriz[0][0]
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior){
                maior = matriz[i][j]
            }
        }
    }
    return maior
}

console.log("O maior númeo da minha matriz é: ", maiorNumMatriz([[1, 2],[3, 4]]))