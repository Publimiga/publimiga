import { services } from "@/data/content";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-content px-4 py-16 md:px-0 md:py-[72px]">
      <div className="md:px-9">
        <SectionHeader eyebrow="Criatividade & estratégia" title="O que eu faço." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border-2 border-border bg-surface-raised p-6 md:min-h-[293px]">
              <div aria-hidden className="grid size-9 place-items-center rounded-sm bg-pink-soft text-[18px] font-bold text-pink">
                {s.icon}
              </div>
              <h3 className="mt-6 mb-3 font-display text-heading-sm font-bold text-ink">{s.title}</h3>
              <p className="text-body text-ink-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
