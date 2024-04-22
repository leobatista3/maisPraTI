//pesquisar em array
let listaLeo = Array('Cachaça', 'Cerveja', 'Vodka')

let aux = listaLeo.indexOf('Cachaça')
if(aux === -1){
    console.log('Elemento fora do array')
}else{
    console.log("Elemento existe no array: " + aux)
}
// sort
let listaLeo2 = Array(1, 10, 2)
console.log(listaLeo2.sort())