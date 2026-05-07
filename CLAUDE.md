# CLAUDE.md — Demello Design Co. Portfolio

## Projeto

Portfólio pessoal de Júlio de Mello (Senior Product Designer).
URL de produção: **demello.art.br** (hospedado no GitHub Pages via `CNAME`).

---

## Estrutura de arquivos

```
portfolio/
├── index.html               # Página principal
├── 404.html                 # Redireciona URLs antigas para demello.art.br
├── CNAME                    # Domínio personalizado — não apagar
├── cases/
│   ├── supernova.html       # Case: Supernova Design System
│   └── provu-belvo.html     # Case: Comprovação de Renda Automatizada
└── assets/
    ├── css/
    │   ├── base.css         # Reset, tokens de tema, nav, rodapé, idioma
    │   ├── index.css        # Estilos exclusivos da homepage
    │   └── case.css         # Estilos exclusivos das páginas de case study
    ├── js/
    │   └── ui.js            # Tema, idioma, logo, e-mail anti-spam, lightbox
    └── img/                 # Imagens e SVGs do projeto
```

---

## Regra obrigatória: Google Analytics em todo HTML novo

Todo arquivo HTML novo deve incluir o snippet abaixo como **último item dentro de `<head>`**, imediatamente antes de `</head>`:

```html
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8T7TXVVT8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J8T7TXVVT8');
  </script>
```

ID de medição: `G-J8T7TXVVT8`

---

## Estrutura padrão do `<head>`

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da página — Demello Design Co.</title>
  <link rel="icon" type="image/svg+xml" href="[../]assets/img/favicon-32x32.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Inter:wght@300;400;500;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="[../]assets/css/base.css">
  <link rel="stylesheet" href="[../]assets/css/[index|case].css">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8T7TXVVT8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J8T7TXVVT8');
  </script>
</head>
```

O elemento `<html>` deve sempre ter:
```html
<html lang="pt-BR" data-theme="dark" data-lang="pt">
```

---

## Sistema de temas (dark / light)

Controlado via `data-theme` no `<html>`. Padrão: `dark`.

- Alternado pelo botão `#themeToggle` na nav.
- Preferência salva em `localStorage` (`theme`).
- Tokens definidos em `base.css` sob `:root, [data-theme="dark"]` e `[data-theme="light"]`.
- A logo da nav troca automaticamente via `data-logo-dark` / `data-logo-light` no `<img>`.

### Tokens de cor principais

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0D0D0D` | `#F5F3EE` |
| `--bg2` | `#141414` | `#EDEAE3` |
| `--bg3` | `#1A1A1A` | `#E4E1DA` |
| `--text` | `#F0EDE8` | `#111110` |
| `--muted` | `#888880` | `#6B6B65` |
| `--accent` | `#C8B700` | `#C8B700` |

---

## Sistema de idiomas (PT / EN)

Controlado via `data-lang` no `<html>`. Padrão: `pt`.

- Alternado pelo dropdown `#langToggle` / `#langMenu` na nav.
- Preferência salva em `localStorage` (`lang`).
- Conteúdo por idioma usa as classes `.lang-pt` e `.lang-en`.
- `base.css` oculta automaticamente o idioma inativo:
  ```css
  [data-lang="pt"] .lang-en { display: none; }
  [data-lang="en"] .lang-pt { display: none; }
  ```

---

## Tipografia

- **Cal Sans** — títulos e números de destaque (`.case-title`, `.section-title`, `.metric-value`, `.process-number`)
- **Inter** — corpo de texto (weight: 300 padrão, 400, 500, 900 disponíveis)

---

## Script global: `assets/js/ui.js`

Incluir em **todas as páginas**, antes de `</body>`:
```html
<script src="[../]assets/js/ui.js"></script>
```

Responsável por:
- Inicialização e alternância de tema
- Inicialização e alternância de idioma
- Atualização da logo da nav
- Proteção anti-spam do e-mail (apenas no `index.html`, via `#email-contact` e `#email-text`)
- Lightbox de imagens (ativado ao clicar em `.case-img img` ou `.case-img-grid img`)

---

## Lightbox

Presente nas páginas de case study. Requer no HTML:
```html
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Preview de imagem">
  <button class="lightbox-close" id="lightboxClose" aria-label="Fechar preview">&#x2715;</button>
  <div class="lightbox-content">
    <img class="lightbox-img" id="lightboxImg" src="" alt="">
  </div>
</div>
```

- Imagens em `.case-img img` abrem o lightbox normal.
- Imagens em `.case-img-grid img` abrem o lightbox com fundo branco (`.is-grid`).

---

## Componentes de case study (`case.css`)

| Classe | Uso |
|---|---|
| `.case-hero` | Cabeçalho com tags, título, subtítulo e metadados |
| `.case-cover` | Imagem de capa full-width (aspect-ratio 16/7) |
| `.case-body` | Coluna centralizada (max-width 780px) |
| `.section` | Bloco de conteúdo com `.section-label`, `.section-title`, `.section-text` |
| `.highlight` | Citação ou insight com borda esquerda na cor de acento |
| `.metrics` | Grid de métricas quantitativas (`.metric-value` em Cal Sans) |
| `.process` | Lista de etapas numeradas |
| `.challenges` | Cards de desafios com ícone |
| `.outcomes` | Grid 2 colunas de resultados qualitativos |
| `.divider` | Linha decorativa de 40px na cor de acento |
| `.case-img` | Contêiner de screenshot clicável (abre lightbox) |
| `.case-img-grid` | Grid de imagens comparativas (`.cols-2`, `.cols-3`) |
| `.case-nav` | Navegação anterior/próximo case |
| `.btn-yellow` | CTA primário com fundo dourado (`--accent`) |

---

## Proteção do e-mail (index.html)

O endereço de e-mail é montado por JavaScript para dificultar spam. Não escrever o endereço em texto plano no HTML. O `ui.js` injeta o valor em `#email-text` e o `href` em `#email-contact`.

---

## Rodapé

Incluir em todas as páginas. O ano é inserido via JS:
```html
<footer>
  <p>&copy; <span id="footer-year"></span> Demello Design Co.</p>
  <p>São Paulo, BR</p>
</footer>
<script>
  var fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();
</script>
```

---

## Deploy

- Hospedagem: GitHub Pages (branch `main`)
- Domínio: `demello.art.br` (via `CNAME`)
- Não há build step — arquivos servidos diretamente como HTML/CSS/JS estáticos
- Não apagar o arquivo `CNAME`
