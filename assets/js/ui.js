/* ═══════════════════════════════════════════════════════════
   ui.js — Controle de tema e idioma

   Usado em todas as páginas do portfólio. Responsável por:
   - Tema escuro/claro (aplicado via data-theme no <html>)
   - Idioma PT/EN (aplicado via data-lang no <html>)
   - Logo da nav (troca entre versão branca e preta)
   - Proteção anti-spam do e-mail de contato

   Preferências de tema e idioma são persistidas via localStorage
   para que o usuário não precise redefinir a cada visita.

   O código está dentro de um IIFE para evitar que variáveis
   locais vazem para o escopo global da página.
═══════════════════════════════════════════════════════════ */
(function () {

  /* ─── Referências ao DOM ─────────────────────────────────
     Usamos querySelector em vez de getElementById para que
     o JS funcione em qualquer página sem depender de IDs fixos.
  ──────────────────────────────────────────────────────── */
  var html = document.documentElement;
  var logo = document.querySelector('.nav-logo img');

  /* ─── Inicialização de tema ──────────────────────────────
     Lê a preferência salva no localStorage. Se não houver
     registro anterior, usa 'dark' como padrão.
     Aplica o valor no atributo data-theme do <html> para
     ativar as variáveis CSS do tema correto (via base.css).
  ──────────────────────────────────────────────────────── */
  var savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateLogo(savedTheme);

  /* ─── Inicialização de idioma ────────────────────────────
     Mesma lógica do tema: lê localStorage ou usa 'pt' como
     padrão. Aplica data-lang no <html> para ativar as regras
     CSS que ocultam .lang-pt ou .lang-en (via base.css).
  ──────────────────────────────────────────────────────── */
  var savedLang = localStorage.getItem('lang') || 'pt';
  html.setAttribute('data-lang', savedLang);

  /* ─── Botão de tema escuro/claro ─────────────────────────
     A cada clique, alterna entre 'dark' e 'light', persiste
     a escolha no localStorage e atualiza a logo da nav.
  ──────────────────────────────────────────────────────── */
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateLogo(next);
    });
  }

  /* ─── Dropdown de idioma (PT / EN) ───────────────────────
     Abre/fecha ao clicar no botão .lang-toggle.
     Ao selecionar uma opção, aplica o idioma no <html>,
     salva no localStorage e fecha o menu.
  ──────────────────────────────────────────────────────── */
  var langMenu   = document.getElementById('langMenu');
  var langToggle = document.getElementById('langToggle');

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation(); // impede que o clique propague para o document
      langMenu.classList.toggle('open');
    });

    langMenu.addEventListener('click', function (e) {
      var opt = e.target.closest('.lang-option');
      if (!opt) return;
      var next = opt.getAttribute('data-lang');
      html.setAttribute('data-lang', next);
      localStorage.setItem('lang', next);
      langMenu.classList.remove('open');
    });
  }

  /* ─── Fecha dropdown ao clicar fora ─────────────────────
     Listener no document: qualquer clique fora do dropdown
     remove a classe 'open', fechando o menu automaticamente.
  ──────────────────────────────────────────────────────── */
  document.addEventListener('click', function () {
    if (langMenu) langMenu.classList.remove('open');
  });

  /* ─── Proteção anti-spam do e-mail ───────────────────────
     O endereço é montado em fragmentos para dificultar a
     leitura por robôs que varrem HTML em busca de e-mails.
     Só executa se os elementos de contato existirem na página
     (presentes apenas no index.html).
  ──────────────────────────────────────────────────────── */
  var emailContact = document.getElementById('email-contact');
  var emailText    = document.getElementById('email-text');
  if (emailContact && emailText) {
    var u = 'julio' + '.' + 'mello' + '@' + 'gmail' + '.' + 'com';
    emailContact.href     = 'mai' + 'lto:' + u;
    emailText.textContent = u;
  }

  /* ─── Função auxiliar: atualiza a logo da nav ────────────
     Lê os caminhos de imagem dos atributos data-logo-dark e
     data-logo-light no elemento <img> da logo. Isso permite
     que cada página defina seus próprios caminhos relativos
     diretamente no HTML, sem alterar este arquivo JS.
  ──────────────────────────────────────────────────────── */
  function updateLogo(theme) {
    if (!logo) return;
    var src = theme === 'light'
      ? logo.getAttribute('data-logo-light')
      : logo.getAttribute('data-logo-dark');
    if (src) logo.src = src;
  }


  /* ─── Lightbox de imagens ────────────────────────────────────
     Ao clicar em qualquer .case-img img, abre um preview com
     fundo desfocado. Fecha ao clicar no X, no fundo overlay
     ou ao pressionar Escape.
  ──────────────────────────────────────────────────────── */
  var lightbox      = document.getElementById('lightbox');
  var lightboxImg   = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.case-img img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }
  }

})();
