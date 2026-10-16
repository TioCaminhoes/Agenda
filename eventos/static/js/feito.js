
function buscar() {
   const busca = document.getElementById('busca').value.toLowerCase();
   const mensagemVazio = document.getElementById('mensagem-vazio')
   const card = document.querySelectorAll('.card')

   for (let i = 0; i < card.length; i++) {
       if (card[i].textContent.toLowerCase().includes(busca)) {
           card[i].style.display = 'block';
           mensagemVazio.style.display = 'none';
       } else {
           card[i].style.display = 'none';
           mensagemVazio.style.display = 'block';
       }
   }
}
// ===== CONTAGEM REGRESSIVA =====
function contar(card) {
    var texto = card.querySelector('.texto-contador');
    var dataEvento = new Date(card.dataset.inicio);

    function atualizar() {
        var agora = new Date();
        var diferenca = dataEvento - agora;

        if (diferenca <= 0) {
            texto.textContent = 'O evento já começou!';
            return;
        }

        var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        var horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
        var minutos = Math.floor(diferenca / (1000 * 60)) % 60;
        var segundos = Math.floor(diferenca / 1000) % 60;

        texto.textContent = 'Faltam ' + dias + ' dias, ' + horas + ' horas, ' +
                            minutos + ' minutos e ' + segundos + ' segundos';
    }

    atualizar();
    setInterval(atualizar, 1000);
}

var todosCards = document.querySelectorAll('.card');
for (var j = 0; j < todosCards.length; j++) {
    contar(todosCards[j]);
}

//botao ocultar atividades

function ocultarAtividades() {
    const atividades = document.querySelector('.atividades-box');
    const texto = document.getElementById('atividades');
    if (atividades.style.display == 'none') {
        atividades.style.display = 'block';
        texto.textContent = 'Ocultar Atividades';

    } else {
        atividades.style.display = 'none';
        texto.textContent = 'Mostrar Atividades';
    }
    
}