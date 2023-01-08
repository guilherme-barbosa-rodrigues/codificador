const pesquisando = document.getElementById("pesquisando");
const resultado = document.getElementById("resultado");

function cripto() {
    const saida = document.querySelector('#resultado-area');

    pesquisando.style.display = "none";
    resultado.style.display = "flex";

    var entrada = document.querySelector("#texto-principal");
    var mensagem = entrada.value;
    var mensagemTexto = "";

    var listaDeCaracteres = mensagem.split("")

    for(var i = 0; i < listaDeCaracteres.lenght; i++) {
        if(listaDeCaracteres[i] == "a"){
            listaDeCaracteres[i] = "ai"
        }
        else if(listaDeCaracteres[i] == "e"){
            listaDeCaracteres[i] = "enter"
        }
        else if(listaDeCaracteres[i] == "i"){
            listaDeCaracteres[i] = "imes"
        }
        else if(listaDeCaracteres[i] == "o"){
            listaDeCaracteres[i] = "ober"
        }
        else if(listaDeCaracteres[i] == "u"){
            listaDeCaracteres[i] = "ufat"
        }
        mensagemTexto = mensagemTexto + listaDeCaracteres[i]
    }
    saida.value = mensagemTexto
}

function descripto() {
    const saida = document.querySelector('#resultado-area');

    pesquisando.style.display = "none";
    resultado.style.display = "flex";

    var entrada = document.querySelector("#texto-principal");
    var mensagem = entrada.value;

    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u")

    saida.value = mensagem;
    
}