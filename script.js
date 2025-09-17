document.addEventListener('DOMContentLoaded', function() {
    const naoButton = document.getElementById('nao');
    const simButton = document.getElementById('sim');
    const mainContainer = document.querySelector('.container');
    const memeContainer = document.getElementById('meme-container');
    const restartButton = document.getElementById('restart');

    // Função para mover o botão Não
    function moverBotao() {
        if (naoButton.style.position !== 'fixed') {
            naoButton.style.position = 'fixed';
            naoButton.style.zIndex = '10';
        }
        const maxX = window.innerWidth - naoButton.offsetWidth;
        const maxY = window.innerHeight - naoButton.offsetHeight;
        const novoX = Math.random() * maxX;
        const novoY = Math.random() * maxY;
        naoButton.style.left = novoX + 'px';
        naoButton.style.top = novoY + 'px';
    }

    // Evento para o botão Não: mover no mouseover
    naoButton.addEventListener('mouseover', moverBotao);

    // Evento para o botão Sim: mostrar emoji joia
    simButton.addEventListener('click', function() {
        mainContainer.style.display = 'none';
        memeContainer.style.display = 'flex';
    });

    // Evento para reiniciar
    restartButton.addEventListener('click', function() {
        memeContainer.style.display = 'none';
        mainContainer.style.display = 'block';
        // Resetar posição do botão Não
        naoButton.style.position = '';
        naoButton.style.left = '';
        naoButton.style.top = '';
        naoButton.style.zIndex = '';
    });
});