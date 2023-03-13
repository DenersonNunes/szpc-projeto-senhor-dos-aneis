/*
OBJETIVO - quando clicarmos no botão temos que
mostrar a imagem de fundo correspondente
*/
//-passo 1  - dar uim jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//-passo 2 - dar um jeito da indentificar o clique do usuário no botão
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // -passo 3 -desmarcar o botão selecionado anterior
        desativaBotaoSelecionado();

        //-passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //-passo 5 - esconder a imagem anterior
        esconderImagemAtiva();

        //-passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
