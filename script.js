const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    // document.style.backgroundImage = "none";

    document.getElementById("imagem-garoto").style.display = "none";
    document.getElementById("mensagem-nao-encontrada").style.display = "none";

    document.getElementById("textarea-direita").style.backgroundColor = "black";

    document.getElementById("textarea-direita").style.color = "white";

    document.getElementById("textarea-direita").style.fontSize = "25px";

    document.querySelector(".conteudo-da-direita").style.backgroundColor = "black";

    if (textoEncriptado == 0){
        document.getElementById("mensagem-nao-encontrada").style.display = "block"
        document.getElementById("mensagem-nao-encontrada").style.color = "white"
    }

}



console.table(matrizCodigo);

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;

}


function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado;
}


function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;

}

function copiar() {
    var textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Mensagem copiada: " + textoCopiado.value + "✅");
    }