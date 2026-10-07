import { WhatsAppIcon } from "./WhatsAppIcon";
import { waGeneral } from "@/lib/contact";

export function CTASection({
  title = "Prêt à commander ?",
  text = "Contactez MAN Professionnel sur WhatsApp pour connaître les prix et les conditions de livraison.",
  cta = "Commander sur WhatsApp",
}: { title?: string; text?: string; cta?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="relative overflow-hidden rounded-lg border bg-card p-10 md:p-14">
        <div className="stripe-accent absolute right-0 top-0 h-full w-24 opacity-20" />
        <h2 className="max-w-2xl text-3xl font-black uppercase md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">{text}</p>
        <a href={waGeneral()} target="_blank" rel="noreferrer" className="btn-primary mt-8">
          <WhatsAppIcon className="h-4 w-4" /> {cta}
        </a>
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-6xl">{title}</h1>
        {text && <p className="animate-fade-up mt-5 max-w-2xl text-lg text-muted-foreground">{text}</p>}
      </div>
    </section>
  );
}
