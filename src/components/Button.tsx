import { cn } from "./cn";

export function Button({
  variant = "primary",
  href,
  external = false,
  children,
}: {
  variant?: "primary" | "outline";
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex h-[46px] items-center justify-center rounded-full border-2 px-6 text-body font-bold transition-colors",
        variant === "primary"
          ? "border-pink bg-pink text-on-overlay hover:border-pink-deep hover:bg-pink-deep"
          : "border-pink text-pink hover:bg-pink-soft",
      )}
    >
      {children}
    </a>
  );
}
