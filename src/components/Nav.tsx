import { navItems } from "@/data/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <nav aria-label="Principal" className="no-scrollbar flex h-[72px] items-center gap-6 overflow-x-auto px-4 md:justify-center md:gap-9">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-nav font-bold uppercase tracking-[0.08em] text-pink underline-offset-4 hover:underline"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
