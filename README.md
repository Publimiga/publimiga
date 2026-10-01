# publimiga — Portfólio

Landing page de portfólio da publimiga (Angela), replicada do Figma *Publimiga Portfólio — Design Editável* com **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Requer Node 18.18+ (recomendado 20+). Deploy direto na Vercel sem configuração extra.

## Estrutura

```
src/
  app/
    layout.tsx       # fontes (next/font: Bricolage Grotesque + DM Sans), metadata, lang pt-BR
    page.tsx         # monta as seções na ordem do Figma
    globals.css      # TOKENS do design system (@theme do Tailwind v4)
  components/        # Nav, Hero, CaseCarousel, CaseCard, About, Services, Cases, CaseStudy, Contact, Button, Badge, SectionHeader, Footer
  data/content.ts    # TODO o texto e a lista de cases — edite aqui
  assets/            # imagens importadas estaticamente (blur placeholder automático)
```

## Editando conteúdo

- **Textos, cases, números, habilidades:** `src/data/content.ts`.
- **Novo case:** adicione um item em `cases` (e, se quiser, em `highlights` para o carrossel), com a imagem 16:9 em `src/assets/cases/`.
- **Cores/tipografia/raios:** `src/app/globals.css` → viram classes (`bg-pink`, `text-ink-muted`, `text-heading-case`, `rounded-md`…).

## Pendências

- [ ] Links reais de **Instagram** e **LinkedIn** em `content.ts` (não estavam no Figma).
- [ ] Card "The Next Step" do carrossel usa a imagem do Estúdio Eliane — igual ao Figma, provavelmente placeholder.
- [ ] Confirmar a fonte dos títulos (inferida como Bricolage Grotesque; o PDF veio com fontes em contorno).
