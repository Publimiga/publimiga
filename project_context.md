# Contexto do projeto

## O quê
Site one-page de portfólio da **publimiga** (Angela, publicitária — redação, direção de arte, redes sociais, branding). Desenvolvido por Lucas Chicoski.

## Origem
- Figma: *Publimiga Portfólio — Design Editável* (frame desktop 1440×6214). Acesso via API não foi possível; usado o **export PDF**.
- Tokens, componentes e assets extraídos para o Design System "Publimiga" (artifact claude.ai) e portados para este projeto.

## Seções (ordem)
1. Nav fixa (72px) — âncoras: Sobre mim, Cases, Redes sociais (→ Frajola), Branding (→ Entrelaço), Contato
2. Hero — logotipo + carrossel de 8 cards em 2 linhas (arrastar/clicar)
3. Sobre mim — foto, bio, 6 habilidades, 3 números (03 / 15+ / 3 anos)
4. O que eu faço — Campanhas, Redes sociais, Branding
5. Cases — M-BOOM!, Cif, Frajola, The Next Step, Com Sipolatti no lar, Entrelaço (imagem alterna lado)
6. Contato — WhatsApp, Instagram, LinkedIn
7. Rodapé

## Decisões
- 2026-10-01 — Tailwind v4 escolhido pelo usuário (vs CSS Modules).
- 2026-10-01 — Contraste mantido fiel ao Figma (pink 3.1:1 em texto pequeno; crédito do rodapé 1.3:1) por decisão do usuário.
- 2026-10-01 — Corrigidos 2 typos do Figma no conteúdo: "Mercado Livro" → "Mercado Livre"; "Acampanha" → "A campanha".
- Responsivo: Figma só tem desktop; mobile foi derivado (colunas empilham, tamanhos de título reduzidos).

## Pendências
- Links de Instagram/LinkedIn.
- Imagem do card "The Next Step" no carrossel (hoje = Estúdio Eliane, como no Figma).
- Confirmar fonte display (Bricolage Grotesque inferida).
- `npm install`/`build` ainda não executado no ambiente de geração (registry bloqueado) — rodar localmente.
