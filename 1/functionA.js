let exibirFuncao = function(){
    console.log("Olá")
}

exibirFuncao()
//

function exibirArtigo(callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('Funcões de callback em caso de sucesso')
    }else{
        callbackErro('Erro callback')
    }
}

let callbackSucesso = function(titulo){
    console.log(titulo)
}

let callbackErro = function(erro){
    console.log(erro)
}

exibirArtigo(callbackSucesso, callbackErro)