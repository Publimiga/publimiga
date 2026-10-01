import Image from "next/image";
import type { CaseStudyData } from "@/data/content";
import { Badge, Star } from "./Badge";
import { cn } from "./cn";
import { ImageLightbox } from "./ImageLightbox";

export function CaseStudy({ data, flip = false }: { data: CaseStudyData; flip?: boolean }) {
  const blocks = [
    ["Desafio", data.challenge],
    ["Ideia", data.idea],
    ["Resultado", data.result],
  ] as const;

  return (
    <article
      id={data.id}
      className={cn(
        "grid items-center gap-8 border-b border-border py-12 md:grid-cols-2 md:gap-[55px] md:px-11",
        // A coluna de 587px acompanha a imagem, dos dois lados.
        flip ? "lg:grid-cols-[1fr_587px]" : "lg:grid-cols-[587px_1fr]",
      )}
    >
      <ImageLightbox
        image={data.image}
        alt={data.title}
        className={cn("relative aspect-video overflow-hidden rounded-md bg-pink-soft", flip && "md:order-2")}
      >
        <Image
          src={data.image}
          alt={data.title}
          placeholder="blur"
          sizes="(min-width: 1024px) 587px, (min-width: 768px) 50vw, 100vw"
          className="size-full object-cover"
        />
        <Badge variant="label" className="absolute top-1.5 right-1.5">
          Imagem do case
        </Badge>
      </ImageLightbox>

      <div className={cn(flip && "md:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="category">{data.category}</Badge>
          {data.award && (
            <>
              <Badge variant="award">{data.award}</Badge>
              <Star />
            </>
          )}
        </div>
        <h3 className="mt-3 mb-3 max-w-[440px] font-display text-[34px] leading-[1.15] font-extrabold tracking-[-0.01em] text-ink md:text-heading-case">
          {data.title}
        </h3>
        <p className="mb-4 text-meta text-ink-muted">{data.meta}</p>
        {blocks.map(([label, text]) => (
          <div key={label}>
            <p className="mt-3 mb-1 text-eyebrow font-bold uppercase tracking-[0.12em] text-pink">{label}</p>
            <p className="max-w-[440px] text-body text-ink-muted">{text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
