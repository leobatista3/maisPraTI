const matriz = [
  [1, 2],
  [3, 4],
];

function somarMatriz(matriz) {
  let soma = 0;
  for (let index = 0; index < matriz.length; index++) {
    for (let j = 0; j < matriz[index].length; j++) {
      soma += matriz[index][j];
    }
  }
  return soma;
}

console.log(somarMatriz(matriz));
