// busca binária: algoritmo que seja capaz de receber uma lista, e um valor corret,
//e execute uma pesquisa binária para encontrar o valor certo.
const list = [1, 2, 3, 4, 5];
const value = 4;

function binary(list, target) {
    let left = 0;
    let right = list.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right));
        
        if (list[mid] === target) {
            return mid; 
        } else if (list[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }    
    return -1; 
}
const resultIndex = binary(list, value);

if (resultIndex !== -1) {
    console.log(`O valor ${value} está na posição ${resultIndex}.`);
} else {
    console.log(`O valor ${value} não foi encontrado na lista.`);
}