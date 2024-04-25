const filmes = [
    {titulo: "Tropa de Elite", genero: "Ação"},
    {titulo: "Capitão Fantástico", genero: "Drama"},
    {titulo: "O Poderoso Chefão", genero: "Crime"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Oppenheimer", genero: "Biografia"},
    {titulo: "High School Musical", genero: "Musical"},
    {titulo: "Barbie", genero: "Live action"},
]
//com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por genero para cada filme
// no array, verifique se o genero ja existe no objeto contagem. se existir, incremente a contagem,
//se nao, adicione o genero ao objeto com contagem inicial de 1
//após loop, imprima cada genero e o numero de filmes correspondente 
let contagemGeneros = {}

filmes.forEach(filme => {
    if(contagemGeneros[filme.genero]){
        contagemGeneros[filme.genero]++
    }else{
        contagemGeneros[filme.genero] = 1
    }
})

for(let genero in contagemGeneros){
    console.log(`${contagemGeneros[genero]} filme(s) do gênero ${genero}`)
}



