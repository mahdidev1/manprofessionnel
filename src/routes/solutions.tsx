import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Sparkles, Wrench, Briefcase } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { PageHeader } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions professionnelles — MAN Professionnel" },
      { name: "description", content: "Produits pour stations de lavage, centres de detailing, garages et professionnels automobiles." },
      { property: "og:title", content: "Solutions professionnelles — MAN Professionnel" },
      { property: "og:description", content: "Produits pour stations de lavage, centres de detailing, garages et professionnels automobiles." },
    ],
  }),
  component: Solutions,
});

const segments = [
  { icon: Droplets, title: "Stations de lavage", text: "Des produits adaptés au lavage fréquent des véhicules." },
  { icon: Sparkles, title: "Centres de detailing", text: "Des produits pour la présentation et la finition professionnelle des véhicules." },
  { icon: Wrench, title: "Garages", text: "Des produits pour le nettoyage des moteurs et des composants automobiles." },
  { icon: Briefcase, title: "Professionnels automobiles", text: "Des formats professionnels pensés pour une utilisation régulière." },
];

function Solutions() {
  const advisor = waLink("Bonjour MAN Professionnel, je suis un professionnel et je souhaite parler à un conseiller concernant vos produits.");
  return (
    <>
      <PageHeader eyebrow="Pour les professionnels" title="Des solutions professionnelles pour votre activité" text="MAN Professionnel fournit des produits en bidons de 5 L adaptés aux besoins des professionnels de l'automobile." />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {segments.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="animate-fade-up group rounded-lg border bg-card p-8 transition-colors hover:border-primary/60" style={{ animationDelay: `${i * 80}ms` }}>
              <Icon className="h-9 w-9 text-primary" />
              <h2 className="mt-6 text-2xl font-black uppercase">{title}</h2>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Station de lavage professionnelle" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <h2 className="max-w-xl text-3xl font-black uppercase md:text-5xl">Un besoin spécifique pour votre activité ?</h2>
          <a href={advisor} target="_blank" rel="noreferrer" className="btn-primary mt-8"><WhatsAppIcon className="h-4 w-4" /> Parler à un conseiller</a>
        </div>
      </section>
    </>
  );
}
