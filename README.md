# PromoVip Achadinhos — Landing page

Página única estática, responsiva e pronta para GitHub Pages. Não precisa de framework, instalação ou processo de build.

## 1. Botão do WhatsApp já configurado

O botão principal já direciona para o grupo PromoVip Achadinhos:

`https://wa.me/message/KBI7ST4XQHFXM1`

O endereço está definido em `config.js`. Para trocar o grupo no futuro, basta substituir o valor de `whatsappGroupUrl` por outro convite oficial `https://chat.whatsapp.com/...`.

## 2. Meta Pixel

O Pixel `2294746627958091` já está instalado no `index.html`.

- `PageView`: disparado ao carregar a página.
- `Lead`: disparado quando o visitante clica no botão configurado para entrar no grupo do WhatsApp.

Você pode conferir a atividade em Gerenciador de Eventos da Meta, usando a ferramenta de teste de eventos. A confirmação de recebimento depende do carregamento do Pixel, consentimento/privacidade do navegador e configurações de bloqueio do visitante.

## 3. Publicar no GitHub Pages

1. Extraia o ZIP.
2. Crie um repositório no GitHub.
3. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
4. No repositório, abra **Settings → Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
7. Aguarde o GitHub publicar e abra o endereço informado na seção Pages.

## Arquivos

- `index.html` — estrutura da página e instalação do Pixel.
- `styles.css` — visual, responsividade e animações.
- `script.js` — ativação do CTA e evento `Lead`.
- `config.js` — link de convite do WhatsApp.
- `assets/promovip-logo.png` — logotipo enviado.

## Observações

- É uma página estática: não requer servidor, banco de dados, API ou chave secreta.
- A animação respeita a preferência de movimento reduzido do dispositivo (`prefers-reduced-motion`).
- A fonte externa usa Google Fonts; se não carregar, há fontes alternativas locais do sistema.
