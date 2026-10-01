import { cn } from "./cn";

type Variant = "category" | "award" | "tag" | "label" | "solid";

const variants: Record<Variant, string> = {
  category: "bg-pink-soft text-pink-deep",
  award: "bg-blue-soft text-blue",
  tag: "bg-surface-raised text-ink",
  label: "bg-surface-raised text-ink h-[22px] text-micro",
  solid: "bg-pink text-on-overlay h-5 px-2 text-micro",
};

export function Badge({
  variant = "category",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[23px] items-center whitespace-nowrap rounded-full px-2.5 text-tag font-bold uppercase tracking-[0.02em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Star({ className }: { className?: string }) {
  return <span role="img" aria-label="premiado" className={cn("star-shape inline-block size-5 bg-star", className)} />;
}
