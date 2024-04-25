const pessoa = {
    nome: "Lucas",
    idade: 18,
    profissao: "Desenvolvedor de Software",
    email: "lucas@teste.com",
    empregada: true,
    descrever: function(){
        console.log(`Nome: ${this.nome}`)
    }
};

for(let chave in pessoa){
    console.log(chave + ": " + pessoa[chave])
}

console.log(`Nome: ${pessoa.nome}`)
console.log(`Nome: ${pessoa['nome']}`)
console.log(`Email: ${pessoa.email}`)
pessoa.nome = "Leo"
console.log(pessoa.nome)

delete pessoa.empregada
console.log(pessoa)

pessoa.falar = function(){
    return (`Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`)
}
console.log(pessoa.falar())
console.log(pessoa)

//exercício: meu objeto
const notebook = {
    marca: "samsung",
    cor: "preto",
    teclado: "qwerty",
    tela: 15.6,
    ligado: false,
    ligar: function() {
        this.ligado = true;
    },
    desligar: function() {
        this.ligado = false;
    },
};
notebook.ligar()
console.log(notebook)

// for in
for(let chave in notebook){
    console.log(chave + ": " + notebook[chave])
}

//for of
let number = [10,20,100]
for(let num of number){
    console.log(num)
}

// voce tem uma lista de objetos que representam
//diferentes tipo de veículos e suas características.
//seu objetivo é primeiro usar o for in para listar
//todas as propriedades e valores de cada veículo.
//depois, utiliar o for of para listar apenas
//os modelos dos veículos
const veiculos = [
    {
        modelo: "Chevette",
        portas: 2,
        ano: 1996,
        preco: 8000
    },
    {
        modelo: "Gol Bolinha",
        portas: 2,
        ano: 2003,
        preco: 10000 
    }
]

for (const v in veiculos) {
    console.log(veiculos[v]);
}

for (const veiculo of veiculos) {
    console.log(veiculo.modelo);
}

//forEach

let cores = ['Azul', 'Preto', 'Branco']

cores.forEach((cor, indice) => {
    console.log(`${indice} - ${cor}`)
})

//multidimensional arrays
let compras = []
compras ['frutas'] = new Array('banana', 'laranja')
compras['frutas'].forEach((value, index) => {
    console.log(`${index} - ${value}`)
})

// exercício: construa array de numeros e calcule a soma
//total dos numeros e tambem imprima cada numero multiplicado
// por dois
let numeros = [1,2,3,4,5,6,7,8,9,10]
let soma = 0
numeros.forEach((value, index) => {
    soma += value
    console.log(`${index} - ${value * 2}`)
})
console.log(soma)

// jaques
let bicicletaFactory = function (cor, tipo, marca){
    return{
        cor: cor,
        tipo: tipo,
        marca: marca,
        ligar: function(){
            console.log("Ligando...")
        },
        desligar: function(){
            console.log("Desligando...")
        }
    }
}

let bicicleta1 = bicicletaFactory("vermelha", "ciclismo", "caloi")
let bicicleta2 = bicicletaFactory("azul", "ciclismo", "trek")

console.log(bicicleta1)
console.log(bicicleta2)