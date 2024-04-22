//Arrays multidimensionais ou Matriz
let lista_leo = Array();
lista_leo['Matuta'] = Array();
lista_leo['Matuta'][0] = "Limão"
lista_leo['Matuta'][1] = "Mel"
lista_leo['Matuta'][2] = "Laranja"
lista_leo['Matuta'][3] = "Umburana"
lista_leo['RaparigaDaQuinta'] = Array()
lista_leo['RaparigaDaQuinta'][0] = "Tinto"
lista_leo['RaparigaDaQuinta'][1] = "Seco"
lista_leo['RaparigaDaQuinta'][2] = "Branco"
console.log(lista_leo)
lista_leo['RaparigaDaQuinta'].push('Rosé') //Inserção de elementos no final de array
console.log(lista_leo)
lista_leo['RaparigaDaQuinta'].unshift('Espumante')//Inserção de elementos no começo de array
console.log(lista_leo)
// excluir no final: lista_leo['RaparigaDaQuinta'].pop('')
// excluir no começo: lista_leo['RaparigaDaQuinta'].shift('')