import Image from "next/image";
import type { Highlight } from "@/data/content";
import { Badge } from "./Badge";

/** `clone`: cópia visual (loop do carrossel) — fora do leitor de tela e do Tab. */
export function CaseCard({
  item,
  onClick,
  clone,
}: {
  item: Highlight;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  clone?: boolean;
}) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      draggable={false}
      aria-hidden={clone || undefined}
      tabIndex={clone ? -1 : undefined}
      className="group relative block aspect-video w-[300px] select-none overflow-hidden rounded-md border-2 border-pink-soft bg-ink sm:w-[440px]"
    >
      <Image
        src={item.image}
        alt={item.title}
        draggable={false}
        sizes="(min-width: 640px) 440px, 300px"
        placeholder="blur"
        className="pointer-events-none size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-[68px] items-center justify-between gap-3 bg-overlay px-4">
        <span className="truncate font-display text-heading-card font-bold text-on-overlay">{item.title}</span>
        <Badge variant="solid">{item.category}</Badge>
      </div>
    </a>
  );
}
