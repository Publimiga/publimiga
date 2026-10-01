import Image, { type StaticImageData } from "next/image";
import { cn } from "./cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mb-2 text-eyebrow font-bold uppercase tracking-[0.06em] text-blue", className)}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  script,
  scriptAlt,
  align = "left",
  size = "md",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  /** Palavra manuscrita (SVG da marca) no fim do título. */
  script?: StaticImageData;
  scriptAlt?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  as?: "h1" | "h2";
}) {
  const sizes = {
    md: "text-[40px] leading-[1.1] md:text-display-md",
    lg: "text-[42px] leading-[1.1] md:text-display-lg",
    xl: "text-[48px] leading-[1.05] md:text-display-xl",
  };
  return (
    <header className={cn(align === "center" && "text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className={cn("font-display font-extrabold tracking-[-0.02em] text-ink", sizes[size])}>
        {title}
        {script && (
          <>
            {" "}
            <Image
              src={script}
              alt={scriptAlt ?? ""}
              unoptimized
              className="inline-block h-[0.78em] w-auto align-[-0.05em]"
            />
          </>
        )}
      </Tag>
    </header>
  );
}
