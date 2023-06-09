const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemSolTrocaDeTema = document.querySelector(".imagem-botao");



botaoAlterarTema.addEventListener("click", () => {
        console.log("clicou no botão");

        const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

        body.classList.toggle("modo-escuro");

        if (modoEscuroEstaAtivo) {

                imagemSolTrocaDeTema.setAttribute("src", "https://bit.ly/42f4XYX");

        } else {

                imagemSolTrocaDeTema.setAttribute("src", "https://bit.ly/3oMbyMC");


        }
});