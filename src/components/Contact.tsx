import { contact } from "@/data/content";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-content px-4 py-20 text-center md:px-0 md:py-24">
      <SectionHeader eyebrow="Contato" title="Bora criar junto?" align="center" size="xl" />
      <p className="mx-auto mt-6 max-w-[600px] text-body-lg text-ink-muted">
        Se você gostou do que viu e quer ser meu parceiro, clica em um dos botões aqui em baixo e vem viajar na
        maionese comigo!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={contact.phone.href} external>
          {contact.phone.label}
        </Button>
        <Button variant="outline" href={contact.instagram} external>
          Instagram
        </Button>
        <Button variant="outline" href={contact.linkedin} external>
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
