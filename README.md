# Demello Design Co. — Portfólio

Página de portfólio temporária enquanto os cases são desenvolvidos.
Disponível em: **[demello.art.br](https://demello.art.br)**

Tema padrão: dark mode. Idioma padrão: PT. Visitantes podem alternar pelo header.

---

## Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal |
| `404.html` | Redireciona URLs antigas para demello.art.br |
| `avatar2026-800x800px.png` | Foto de perfil |
| `ddc-horizontal-white.svg` | Logo para o tema escuro |
| `ddc-horizontal-black.svg` | Logo para o tema claro |
| `favicon-32x32.svg` | Ícone do site (favicon) |
| `CNAME` | Gerado automaticamente pelo GitHub — não apagar |

---

## Toggle de tema

| Tema | Logo carregada |
|---|---|
| Dark (padrão) | `ddc-horizontal-white.svg` |
| Light | `ddc-horizontal-black.svg` |

A preferência fica salva no navegador do visitante via `localStorage`.

---

## Toggle de idioma

| Idioma | |
|---|---|
| PT (padrão) | Português |
| EN | English |

A preferência fica salva no navegador do visitante via `localStorage`.

---

## Redirecionamento da URL antiga

O arquivo `404.html` redireciona automaticamente qualquer acesso à URL antiga `https://juliodemell0.github.io/portfolio/` para `https://demello.art.br`.

---

## Google Analytics

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

_Demello Design Co. © 2026_
