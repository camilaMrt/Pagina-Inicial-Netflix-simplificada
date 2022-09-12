
let perguntasBotao = document.getElementById("botaoPergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("imagemPergunta")

function abrirMenu(){

    if (menu.style.display == "none"){
        menu.style.display = "block"
        imagem.id = "imagemPerguntaGirar"
    }else {
        menu.style.display = "none"
        imagem.id = "imagemPergunta"
    }
}

perguntasBotao.addEventListener("click", abrirMenu)


