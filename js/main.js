const pesquisando = document.getElementById("pesquisando");
const resultado =  document.getElementById("resultado");

function cripto() {
    var output = document.querySelector('#texto-resultado');

    pesquisando.style.display = "none";
    resultado.style.display = "flex";
    
    var input = document.querySelector('#texto-principal');
    var mensagem = input.value;
    var novaMensagem = "";

    var listaCaractere = mensagem.split("");

    for(var i = 0; i < listaCaractere.length; i++) {
        if(listaCaractere[i] == "a") {
            listaCaractere[i] = "ai";
        }

        else if(listaCaractere[i] == "e") {
            listaCaractere[i] = "enter";
        }

        else if(listaCaractere[i] == "i") {
            listaCaractere[i] = "imes";
        }

        else if(listaCaractere[i] == "o") {
            listaCaractere[i] = "ober";
        }
        
        else if(listaCaractere[i] == "u") {
            listaCaractere[i] = "ufat";
        }

        novaMensagem = novaMensagem + listaCaractere[i];
    }
output.value = novaMensagem;
console.log(novaMensagem)
}