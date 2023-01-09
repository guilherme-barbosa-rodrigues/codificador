//  Div's resultado e pesquisando. 

const pesquisando = document.getElementById("pesquisando");
const resultado =  document.getElementById("resultado");

//  Botões

const criptografar = document.getElementById('criptar');
const descriptografar = document.getElementById('descripto');
const copiar = document.getElementById('copiar');

//  Entrada de texto "textarea"

const entradaDeTexto = document.getElementById('texto-principal')

//  Evento click com funções anonimas

criptografar.addEventListener('click', function() {

    const saida = document.querySelector('#texto-resultado');

//  Trocando as div's
    pesquisando.style.display = "none";

    resultado.style.display = "flex";

//  Pega o texto do input
    var mensagem = entradaDeTexto.value;

    var mensagemValor = "";

    var listaDeCaracteres = mensagem.split("");

//  Varre todos os caracteres e faz a troca.

    for(var x = 0; x < listaDeCaracteres.length; x++) {
        if(listaDeCaracteres[x] == "a") {
            listaDeCaracteres[x] = "ai";
        }

        else if(listaDeCaracteres[x] == "e") {
            listaDeCaracteres[x] = "enter";
        }

        else if(listaDeCaracteres[x] == "i") {
            listaDeCaracteres[x] = "imes";
        }

        else if(listaDeCaracteres[x] == "o") {
            listaDeCaracteres[x] = "ober";
        }
        
        else if(listaDeCaracteres[x] == "u") {
            listaDeCaracteres[x] = "ufat";
        }

        mensagemValor = mensagemValor + listaDeCaracteres[x];
    }
//  Retorna mensagem atualizada para o textarea

saida.value = mensagemValor;
console.log(mensagemValor)
})

descriptografar.addEventListener('click', function() {

    const saida = document.querySelector('#texto-resultado');

    pesquisando.style.display = "none";
    resultado.style.display = "flex";

    var mensagem = entradaDeTexto.value;

    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");

    saida.value = mensagem;
})
//  Botão copiar com função anonima

copiar.addEventListener('click', function(){
    const saida = document.querySelector('#texto-resultado');
    navigator.clipboard.writeText(saida.value);
    alert("Texto copiado para area de transferencia")

})
//  Validação de caracteres

entradaDeTexto.addEventListener('keypress', function(evento){
    if(!checkChar(evento)) {
        evento.preventDefault();
        alert('Apenas letras minúsculas e sem acentos. Tente novamente!');
    }
});

function checkChar(evento) {
    const caractere = String.fromCharCode(evento.keyCode);
    const padrao = '[a-x0-9" "]';

    if(caractere.match(padrao)){
        return true;
    }
}