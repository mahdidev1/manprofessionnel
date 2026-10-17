import { createFileRoute } from "@tanstack/react-router";
import catInterior from "@/assets/cat-interior.jpg";
import { PageHeader, CTASection } from "@/components/CTASection";
import { WhyUs } from "@/components/WhyUs";
import home from "@/assets/home.jpg"

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — MAN Professionnel" },
      { name: "description", content: "MAN Professionnel développe et distribue des produits pour le nettoyage et l'entretien automobile." },
      { property: "og:title", content: "À propos — MAN Professionnel" },
      { property: "og:description", content: "MAN Professionnel développe et distribue des produits pour le nettoyage et l'entretien automobile." },
    ],
  }),
  component: About,
});

const pillars = ["Qualité professionnelle", "Expertise automobile", "Variété de produits", "Service client", "Formats professionnels", "Livraison"];

function About() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="MAN Professionnel — Votre partenaire pour l'entretien automobile" />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
        <img src={home} alt="Nettoyage professionnel d'un tableau de bord" loading="lazy" className="aspect-[4/3] w-full rounded-lg border object-cover" />
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            MAN PROFESSIONNEL : Propose une large gamme de produits dédiés aux entreprises dans le secteur de l’entretien automobile. Les produits chimiques pour le nettoyage et l’entretien des voitures sont fabriqués par le Laboratoire 7N-LAB          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
           Conformément aux normes rigoureuses de qualité et de protection de l’environnement. En conséquence, chacun de nos produits est une combinaison unique de haute efficacité et d’approche écologique.          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {pillars.map((p) => (
              <li key={p} className="border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wide">{p}</li>
            ))}
          </ul>
        </div>
      </section>
      <WhyUs />
      <CTASection />
    </>
  );
}
