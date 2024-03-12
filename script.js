var textarea = document.getElementById("textarea");
var alerta = document.querySelector(".alerta");

function criptografar() {
    var textarea = document.getElementById("textarea"); // Obtém o elemento textarea
    var texto = textarea.value; // Obtém o texto digitado

    // Substitui cada caractere de acordo com as regras especificadas
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    var textoCriptografadoTextArea = document.getElementById("textoCriptografado");
    textoCriptografadoTextArea.value = texto;
}

function descriptografar() {
    var textarea = document.getElementById("textarea"); // Obtém o elemento textarea
    var texto = textarea.value; // Obtém o texto criptografado

    // Substitui cada sequência criptografada de volta para os caracteres originais
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    var textoCriptografadoTextArea = document.getElementById("textoCriptografado");
    textoCriptografadoTextArea.value = texto;
}
function copiar(){
    var textarea = document.getElementById("textoCriptografado"); // Obtém o elemento textarea
    textarea.select(); // Seleciona todo o texto no textarea
    document.execCommand("copy"); // Copia o texto selecionado para a área de transferência
    alert("Texto copiado para a área de transferência!"); // Exibe uma mensagem de confirmação
}

textarea.addEventListener("input", function() {
    var texto = textarea.value;

    if (/[A-ZÀ-ÚÁÉÍÓÚÂÊÎÔÛÃÕ´^áéíóúãõ~ôûîêâ]/.test(texto)) {
        alerta.style.color = "red";
        textarea.value = "";
    } else {
        alerta.style.color = "#ffff";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Esconde os elementos de mensagem inicialmente
    document.getElementById("btn-copiar").style.display = "none";
    document.getElementById("textoCriptografado").style.display = "none";

    // Verifica o conteúdo do textarea e exibe/oculta os elementos conforme necessário
    document.getElementById("textarea").addEventListener("input", function() {
        var texto = document.getElementById("textarea").value.trim();

        // Se o textarea estiver vazio, exibe os elementos de mensagem
        if (texto === "") {
            document.querySelector(".direita img").style.display = "block";
            document.querySelector(".direita h1").style.display = "block";
            document.querySelector(".direita p").style.display = "block";
            document.getElementById("textoCriptografado").style.display = "none";
            document.getElementById("btn-copiar").style.display = "none";
        } else {
            // Se o textarea tiver conteúdo, exibe o textarea criptografado e o botão de copiar
            document.querySelector(".direita img").style.display = "none";
            document.querySelector(".direita h1").style.display = "none";
            document.querySelector(".direita p").style.display = "none";
            document.getElementById("textoCriptografado").style.display = "block";
            document.getElementById("btn-copiar").style.display = "block";
        }
    });
});
