let elementos = [1, 2, 3, 4];

function somaElementos(vetor) {
  let soma = 0;
  for (let index = 0; index < vetor.length; index++) {
    soma += vetor[index];
  }
}

console.log("A soma é: ", somaElementos(elementos));
