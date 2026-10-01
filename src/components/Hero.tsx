import Image from "next/image";
import wordmark from "@/assets/brand/publimiga-wordmark.png";
import { highlights } from "@/data/content";
import { CaseCarousel } from "./CaseCarousel";

export function Hero() {
  return (
    <section aria-label="Início" className="pb-16 md:pb-24">
      <h1 className="flex justify-center px-4 pt-10 pb-2 md:pt-[61px]">
        <Image src={wordmark} alt="publimiga" priority sizes="576px" className="h-auto w-[300px] md:w-[576px]" />
      </h1>
      <CaseCarousel items={highlights} />
    </section>
  );
}
