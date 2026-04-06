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
| `CNAME` | Gerado automaticamente pelo GitHub — não apagar |

---

## Como atualizar o site

- Vá ao repositório em **github.com/juliodemell0/portfolio**
- Clique no arquivo a substituir → **"..."** → **"Replace file"**
- Confirme o commit — alterações ficam no ar em menos de 1 minuto

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

## Domínio

Domínio registrado no **Registro.br**: `demello.art.br`

DNS configurado com:
- 4 registros **A** apontando para os IPs do GitHub Pages
- 1 registro **CNAME** `www` apontando para `juliodemell0.github.io.`

HTTPS ativo via GitHub Pages (Enforce HTTPS).

---

## Redirecionamento da URL antiga

O arquivo `404.html` redireciona automaticamente qualquer acesso à URL antiga `https://juliodemell0.github.io/portfolio/` para `https://demello.art.br`.

---

## Domínio personalizado (manutenção)

Se o domínio precisar ser reconfigurado:

1. Em **Settings → Pages**, adicione `demello.art.br` em **Custom domain**
2. Configure os registros DNS no Registro.br conforme o arquivo `TUTORIAL-DOMINIO.md`
3. Ative **Enforce HTTPS** após a propagação

---

_Demello Design Co. © 2026_
