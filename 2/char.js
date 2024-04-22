let nome = 'Dick Vigarista'
console.log(nome);
console.log(nome.replace('Dick Vigarista', 'Pica Pau'));

let nomeAlterado = nome.replace('Dick Vigarista', 'Pica Pau')
console.log(nomeAlterado)

console.log(nome.substr('7', '5')) //imprime os 5 proximos dados, a partir da posição 7

console.log(nome.toLocaleUpperCase())
console.log(nome.toLocaleLowerCase())
console.log('-' + nome.trim() + '-') // retira os espaços em branco do inicio e do final da string '-'