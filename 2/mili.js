//encontrar diferenca de milissegundos entre duas datas

let data = new Date(2023, 4, 20)
let data2 = new Date()

let miliSegundos = Math.abs(data.getTime(2023, 4, 20) - data2.getTime());
console.log(miliSegundos)

