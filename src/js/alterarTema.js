// const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// const body = document.querySelector("body");
// const imagemLuaTrocaDeTema = document.querySelector("lua");
// const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
// botaoAlterarTema.addEventListener("click", () => {
//         console.log("clicou no botão");
//         body.classList.toggle("modo-escuro");
//         if (modoEscuroEstaAtivo) {
//                 imagemLuaTrocaDeTema.setAttribute("./src/imagem/sol.png");
//         } else {
//                 imagemLuaTrocaDeTema.setAttribute("./src/imagem/lua.png");
//         }
// });



// 1. Seleciona os elementos do HTML
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

// Corrigido: Seleciona a imagem pela classe ".imagem-botao"
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// 2. Adiciona o "escutador" de evento de clique no botão
botaoAlterarTema.addEventListener("click", () => {
    // 3. Alterna a classe "modo-escuro" no body
    // O .toggle() adiciona a classe se não existir, e remove se existir.
    body.classList.toggle("modo-escuro");

    // 4. Verifica se o modo escuro está ativo AGORA (depois do clique)
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // 5. Troca a imagem com base no modo que está ativo
    if (modoEscuroEstaAtivo) {
        // Se o modo escuro ESTÁ ATIVO, mostra a imagem do sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sol.png");
    } else {
        // Se o modo escuro NÃO ESTÁ ATIVO, mostra a imagem da lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/lua.png");
    }
});