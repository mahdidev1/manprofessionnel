import { ShieldCheck, Container, Layers, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Qualité professionnelle", text: "Des produits pensés pour répondre aux besoins des professionnels." },
  { icon: Container, title: "Formats économiques", text: "Bidons de 5 L adaptés à une utilisation régulière." },
  { icon: Layers, title: "Large gamme", text: "Solutions pour le lavage, l'intérieur, le moteur et les pneus." },
  { icon: Truck, title: "Livraison", text: "Possibilité de livraison pour faciliter vos commandes." },
];

export function WhyUs() {
  return (
    <section className="bg-light text-light-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow !text-light-foreground/60">Pourquoi nous choisir</p>
        <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">Pensé pour les pros</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-light-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-light p-7">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-light-foreground text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm text-light-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
