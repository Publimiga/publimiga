"use client";

import { useEffect, useRef } from "react";
import type { Highlight } from "@/data/content";
import { CaseCard } from "./CaseCard";

/** Velocidade do auto-play (px/s) e pausa depois de uma interação antes de voltar a rolar. */
const SPEED = 40;
const RESUME_MS = 1500;

/** Carrossel em 2 linhas com loop infinito: a de cima corre pra direita, a de baixo pra esquerda. */
export function CaseCarousel({ items }: { items: Highlight[] }) {
  // Mesma distribuição do grid do Figma: pares em cima, ímpares embaixo.
  const top = items.filter((_, i) => i % 2 === 0);
  const bottom = items.filter((_, i) => i % 2 === 1);

  return (
    <div aria-label="Cases em destaque">
      <div className="flex flex-col gap-2">
        <CarouselRow items={top} direction="right" />
        <CarouselRow items={bottom} direction="left" />
      </div>
      <p className="mt-3 px-3 text-eyebrow uppercase tracking-[0.08em] text-ink-muted">
        Arraste para navegar · Clique para ver o case
      </p>
    </div>
  );
}

/**
 * Uma linha com loop infinito: rola sozinha e dá pra arrastar.
 * Renderiza 3 cópias dos cards e mantém o scroll perto da do meio — ao passar de
 * meia cópia para qualquer lado, pula uma cópia inteira (visualmente idêntico).
 */
function CarouselRow({ items, direction }: { items: Highlight[]; direction: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scroll: 0, moved: false });
  const play = useRef({ pos: 0, hover: false, focus: false, holdUntil: 0 });
  const copies = [items, items, items];

  useEffect(() => {
    const el = ref.current;
    if (!el || items.length === 0) return;
    const p = play.current;
    // Conteúdo indo pra direita = scrollLeft diminuindo.
    const step = direction === "right" ? -1 : 1;
    let setWidth = 0;

    const measure = () => {
      const first = el.children[0] as HTMLElement;
      const nextCopy = el.children[items.length] as HTMLElement;
      setWidth = nextCopy.offsetLeft - first.offsetLeft;
    };

    const onScroll = () => {
      // Com foco de teclado não pula de cópia, senão o card focado sai da tela.
      let delta = 0;
      if (p.focus) delta = 0;
      else if (el.scrollLeft < setWidth * 0.5) delta = setWidth;
      else if (el.scrollLeft > setWidth * 1.5) delta = -setWidth;
      if (delta) {
        el.scrollLeft += delta;
        drag.current.scroll += delta;
        p.pos += delta;
      }
      // Scroll que não veio do auto-play (arraste, toque, roda, teclado): pausa um pouco.
      if (Math.abs(el.scrollLeft - p.pos) > 1) {
        p.pos = el.scrollLeft;
        p.holdUntil = performance.now() + RESUME_MS;
      }
    };

    measure();
    el.scrollLeft = setWidth;
    p.pos = el.scrollLeft;

    const resize = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    resize.observe(el);
    el.addEventListener("scroll", onScroll, { passive: true });

    // `pos` guarda o valor fracionado; somar direto no scrollLeft arredonda e trava.
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!p.hover && !p.focus && !drag.current.active && now >= p.holdUntil) {
        p.pos += (step * SPEED * dt) / 1000;
        el.scrollLeft = p.pos;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, [items.length, direction]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    play.current.holdUntil = Infinity;
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { active: true, startX: e.clientX, scroll: ref.current.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active || !ref.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    ref.current.scrollLeft = d.scroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    play.current.holdUntil = performance.now() + RESUME_MS;
  };

  const onCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") play.current.hover = true;
      }}
      onPointerLeave={() => {
        play.current.hover = false;
        endDrag();
      }}
      onFocus={(e) => {
        play.current.focus = e.target.matches(":focus-visible");
      }}
      onBlur={() => {
        play.current.focus = false;
      }}
      className="no-scrollbar grid cursor-grab auto-cols-max grid-flow-col gap-2 overflow-x-auto active:cursor-grabbing"
    >
      {copies.map((copy, c) =>
        copy.map((item, i) => <CaseCard key={`${c}-${i}`} item={item} onClick={onCardClick} clone={c !== 1} />),
      )}
    </div>
  );
}
