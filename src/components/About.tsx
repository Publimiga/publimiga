import Image from "next/image";
import portrait from "@/assets/angela-portrait.jpg";
import script from "@/assets/brand/publimiga-script.svg";
import { about } from "@/data/content";
import { Badge } from "./Badge";
import { Eyebrow } from "./SectionHeader";

export function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-content gap-10 px-4 py-16 md:grid-cols-[440px_1fr] md:gap-[72px] md:px-0">
      <Image
        src={portrait}
        alt="Angela, a publimiga"
        placeholder="blur"
        sizes="(min-width: 768px) 440px, 100vw"
        className="aspect-[4/5] w-full rounded-xl object-cover md:w-[440px]"
      />
      <div className="max-w-[640px] self-center">
        <Eyebrow>Sobre mim</Eyebrow>
        <h2 className="font-display text-[42px] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink md:text-display-lg">
          Oi, eu sou a{" "}
          <Image src={script} alt="publimiga." unoptimized className="inline-block h-[1.1em] w-auto align-[-0.3em]" />
        </h2>
        <div className="mt-8 space-y-[18px] text-body-lg text-ink-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Habilidades">
          {about.skills.map((s) => (
            <li key={s}>
              <Badge variant="tag">{s}</Badge>
            </li>
          ))}
        </ul>
        <dl className="mt-[73px] grid grid-cols-3 gap-3 sm:flex">
          {about.stats.map((s) => (
            <div key={s.label} className="border-t-4 border-pink pt-3 sm:w-[202px]">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[26px] leading-[1.1] font-extrabold text-blue sm:text-stat">{s.value}</dd>
              <dd className="mt-2 text-caption text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
