let elementos = [1, 2, 3, 4, 9, 4];

function acharMaiorValor(vetor) {
  return vetor.reduce((acumulador, valorAtual) => {
    return Math.max(acumulador, valorAtual);
  }, vetor[0]);
}

function acharMaiorComMax(vetor) {
  return Math.max(...vetor);
}

function acharMaiorComFor(vetor) {
  let auxiliar = 0;
  for (let index = 0; index < vetor.length; index++) {
    if (vetor[index] > auxiliar) {
      auxiliar = vetor[index];
    }
  }
  return auxiliar;
}

console.log(acharMaiorValor(elementos));
console.log(acharMaiorComMax(elementos));
console.log(acharMaiorComFor(elementos));
