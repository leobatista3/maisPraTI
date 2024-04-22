const elementos = [1, 5, 9, 2];

function inverterVetor(vetor) {
  return [...vetor].reverse(vetor);
}

function inverterComFor(vetor) {
  let vetorResultante = [];
  let contador = 0;
  for (index = vetor.length - 1; index >= 0; index--) {
    vetorResultante[contador] = vetor[index];
    contador++;
  }
  return vetorResultante;
}

console.log(inverterVetor(elementos));
console.log(inverterComFor(elementos));

