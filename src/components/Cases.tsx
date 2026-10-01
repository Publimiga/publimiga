import amo from "@/assets/brand/amo-script.svg";
import { cases } from "@/data/content";
import { CaseStudy } from "./CaseStudy";
import { SectionHeader } from "./SectionHeader";

export function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-content px-4 py-16 md:px-0 md:py-[72px]">
      <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow="Cases" title="Campanhas que eu" script={amo} scriptAlt="amo!" />
        <p className="text-body-lg text-ink-muted md:w-[330px]">
          Aqui é só um gostinho do que eu já fiz!
          <br />
          Quem sabe o próximo case é com você?
        </p>
      </div>
      {cases.map((c, i) => (
        <CaseStudy key={c.id} data={c} flip={i % 2 === 1} />
      ))}
    </section>
  );
}
