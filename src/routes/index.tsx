import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import Cream  from "@/components/CreamCarSection";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waGeneral } from "@/lib/contact";
import CarParfumBanner from "@/components/CarParfumBanner";

const TITLE = "MAN Professionnel | Produits professionnels pour l'entretien automobile";
const DESC = "Découvrez les produits professionnels MAN Professionnel pour le lavage, l'entretien et le detailing automobile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[92vh] items-end overflow-hidden pt-16">
        <img src={hero} alt="Voiture couverte de mousse dans une station de lavage professionnelle" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className=" hero-overlay absolute inset-0" />
        <div className="relative mt-15 mx-auto w-full max-w-7xl px-5 pb-20 md:pb-28">
          <p className="eyebrow animate-fade-up">Professional automotive care</p>
          <h1 className="animate-fade-up mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.92] md:text-7xl" style={{ animationDelay: "100ms" }}>
            La qualité professionnelle pour un résultat <span className="text-primary">impeccable</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "200ms" }}>
            Des produits professionnels pour le lavage, l’intérieur et l’extérieur des véhicules.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
            <Link to="/products" className="btn-primary">Découvrir nos produits <ArrowRight className="h-4 w-4" /></Link>
            <a href={waGeneral()} target="_blank" rel="noreferrer" className="btn-outline"><WhatsAppIcon className="h-4 w-4" /> Commander sur WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow">Catégories</p>
        <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">Une solution pour chaque surface</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((c) => (
            <Link key={c.key} to="/products" className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg border">
              <img src={c.image} alt={c.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="relative p-6">
                <h3 className="text-xl font-black uppercase">{c.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Voir les produits <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Nos produits</p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">La gamme 5 L</h2>
          </div>
          <Link to="/products" className="btn-outline">Tous les produits</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
))}
        </div>
      </section>
  <CarParfumBanner/>
<Cream/>
      <WhyUs />
      <CTASection />
    </>
  );
}
