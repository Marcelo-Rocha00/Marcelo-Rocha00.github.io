// funcao pra mostrar a pagina certa
function mostrarPagina(qual) {
    // esconde todas as paginas
    var paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('ativa');
    }

    // mostra a pagina escolhida
    var paginaEscolhida = document.getElementById('pagina-' + qual);
    if (paginaEscolhida) {
        paginaEscolhida.classList.add('ativa');
    }
}

// funcao do whatsapp
function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || telefone === '' || mensagem === '') {
        alert('Por favor preencha todos os campos!');
        return;
    }

    var texto =
        'Olá! Sou ' + nome +
        '.\n Vim pelo site da seleção'+ 
        '.\n Mensagem: ' + mensagem;

    var textoEncoded = encodeURIComponent(texto);

    // Troque pelo seu número
    var seuNumero = '5581995981321';

    window.open(
        'https://wa.me/' + seuNumero + '?text=' + textoEncoded,
        '_blank'
    );

    document.getElementById('msg-enviada').style.display = 'block';
}
