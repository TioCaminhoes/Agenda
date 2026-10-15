
function buscar() {
    var campo = document.getElementById('busca');
    var texto = campo.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    var mensagem = document.getElementById('mensagem-vazio');
    var achou = false;

    for (var i = 0; i < cards.length; i++) {
        var titulo = cards[i].querySelector('h2').textContent.toLowerCase();

        if (titulo.includes(texto)) {
            cards[i].style.display = 'block';
            achou = true;
        } else {
            cards[i].style.display = 'none';
        }
    }

    if (achou) {
        mensagem.style.display = 'none';
    } else {
        mensagem.style.display = 'block';
    }
}

var campoBusca = document.getElementById('busca');
if (campoBusca) {
    campoBusca.addEventListener('input', buscar);
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


// ===== BOTÃO OCULTAR ATIVIDADES =====
var botao = document.querySelector('.esconder-atividades');
var caixa = document.querySelector('.atividades-box');

if (botao && caixa) {
    botao.addEventListener('click', function () {
        if (caixa.style.display === 'none') {
            caixa.style.display = 'block';
            botao.textContent = 'Ocultar Atividades';
        } else {
            caixa.style.display = 'none';
            botao.textContent = 'Mostrar Atividades';
        }
    });
}