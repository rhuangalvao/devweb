  let minhaImagem = document.querySelector('img');

  minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox_PNG32.png') {
      minhaImagem.setAttribute ('src','imagens/Mozilla-Firefox-Logo-Transparent-PNG.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox_PNG32.png');
    }
  }

  let meuBotao = document.querySelector('button');
  let meuCabecalho = document.querySelector('h1');

  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla is cool, ' + meuNome;
    }
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla is cool, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario(); }
