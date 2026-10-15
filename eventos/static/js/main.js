const buscar = document.getElementById('busca');
const mensagemVazio = document.getElementById('mensagem-vazio');
const cards = document.querySelectorAll('.card');

buscar.addEventListener('input', () => {
    const termoBusca = buscar.value.toLowerCase();
    cards.forEach(card => {
        const titulo = card.querySelector('h2').textContent.toLowerCase();
        if (titulo.includes(termoBusca)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    if (cards.some(card => card.style.display === 'block')) {
        mensagemVazio.style.display = 'none';
    } else {
        mensagemVazio.style.display = 'block';
    }
});

/// Adicione um evento de clique para iniciar a contagem para começar 

const eventos = document.querySelectorAll('.card');

eventos.forEach(evento => {
    evento.addEventListener('click', () => {
        iniciarContagem(evento);
    });
});

function iniciarContagem(evento) {
    const dataInicio = new Date(evento.dataset.inicio);
    const agora = new Date();
    const diferenca = dataInicio - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    evento.querySelector('.texto-contador').textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para o evento.`;
}

const botao = document.querySelector('.esconder-atividades');
    const caixaAtividades = document.querySelector('.atividades-box');

    // Verifica se os dois elementos existem na tela para não dar erro
    if (botao && caixaAtividades) {
        botao.addEventListener('click', function() {
            
            // Se a caixa estiver visível (ou seja, diferente de 'none')
            if (caixaAtividades.style.display !== 'none') {
                caixaAtividades.style.display = 'none'; // Esconde a caixa
                botao.textContent = 'Mostrar Atividades'; // Muda o texto do botão
            } else {
                caixaAtividades.style.display = 'block'; // Mostra a caixa
                botao.textContent = 'Ocultar Atividades'; // Volta o texto original
            }
            
        });
    }
</script>