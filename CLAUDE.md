# CLAUDE.md

Guia para agentes trabalhando neste repositório.

## Stack
Next.js 15 (App Router, RSC) · React 19 · TypeScript strict · Tailwind CSS v4 (config CSS-first em `src/app/globals.css`, sem `tailwind.config`).

## Regras
- **Use os tokens**, nunca hex soltos: cores `surface`, `surface-raised`, `ink`, `ink-muted`, `ink-faint`, `pink`, `pink-soft`, `pink-deep`, `border`, `blue`, `blue-soft`, `star`, `overlay`, `on-overlay`; texto `text-display-{xl,lg,md}`, `text-heading-{case,card,sm}`, `text-stat`, `text-body{,-lg}`, `text-meta`, `text-caption`, `text-nav`, `text-eyebrow`, `text-tag`, `text-micro`; raios `rounded-{sm,md,lg,xl,full}`; largura `max-w-content` (1180px).
- Títulos: `font-display font-extrabold tracking-[-0.02em]`. Rótulos: `font-bold uppercase` com tracking.
- Conteúdo só em `src/data/content.ts`; componentes não têm texto de negócio hardcoded (exceto rótulos fixos de UI).
- Server Components por padrão; `"use client"` só em `CaseCarousel` (drag).
- Imagens via import estático + `next/image`; SVGs da marca com `unoptimized`.
- Sem sombras: separação por bordas (`border-border`, 1–2px).
- Contraste: o cliente pediu **fidelidade ao Figma** — não "corrigir" `pink` em texto pequeno nem `ink-faint` sem pedir.
- Voz: português, 1ª pessoa, informal. Cases sempre DESAFIO → IDEIA → RESULTADO.

## Fonte da verdade
Design System "Publimiga" (artifact no claude.ai) + export PDF do Figma. Detalhes em `project_context.md`.
