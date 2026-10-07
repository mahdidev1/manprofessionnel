import activeFoam from "@/assets/active-foam.jpg";
import dashboard from "@/assets/dashboard-premium.jpg";
import moteur from "@/assets/moteur-degraissant.jpg";
import pneus from "@/assets/pneus-renov.jpg";
import hero from "@/assets/hero.jpg";
import catInterior from "@/assets/cat-interior.jpg";
import catEngine from "@/assets/cat-engine.jpg";
import catTire from "@/assets/cat-tire.jpg";

export type CategoryKey = "lavage" | "interieur" | "moteur" | "pneus";

export const categories: {
  key: CategoryKey;
  label: string;
  short: string;
  description: string;
  image: string;
}[] = [
  { key: "lavage", label: "Lavage automobile", short: "Lavage", description: "Produits conçus pour le lavage extérieur des véhicules.", image: hero },
  { key: "interieur", label: "Entretien intérieur", short: "Intérieur", description: "Produits pour tableaux de bord et surfaces intérieures.", image: catInterior },
  { key: "moteur", label: "Entretien moteur", short: "Moteur", description: "Produits pour éliminer graisses et saletés des moteurs.", image: catEngine },
  { key: "pneus", label: "Entretien pneus", short: "Pneus", description: "Produits qui nettoient et ravivent l'aspect des pneus.", image: catTire },
];

export type Product = {
  slug: string;
  name: string;
  category: CategoryKey;
  tagline: string;
  description: string;
  format: string;
  highlights: string[];
  image: string;
};

/** Add new products here — every page reads from this list. */
export const products: Product[] = [
  {
    slug: "active-foam",
    name: "Active Foam",
    category: "lavage",
    tagline: "Shampooing professionnel pour canon à mousse",
    description: "Shampooing professionnel spécialement conçu pour le lavage automobile et l'utilisation avec un canon à mousse.",
    format: "Bidon 5 L",
    highlights: ["Forte capacité de nettoyage", "Mousse abondante", "Adapté au lavage automobile", "Utilisation professionnelle", "Format économique 5 L"],
    image: activeFoam,
  },
  {
    slug: "dashboard-premium",
    name: "Dashboard Premium",
    category: "interieur",
    tagline: "Nettoyage et entretien des tableaux de bord",
    description: "Produit professionnel destiné au nettoyage et à l'entretien des tableaux de bord et surfaces intérieures automobiles.",
    format: "Bidon 5 L",
    highlights: ["Nettoyage intérieur", "Entretien du tableau de bord", "Finition propre", "Utilisation professionnelle", "Format 5 L"],
    image: dashboard,
  },
  {
    slug: "moteur-degraissant",
    name: "Moteur Dégraissant",
    category: "moteur",
    tagline: "Dégraissant professionnel pour moteurs",
    description: "Dégraissant professionnel destiné au nettoyage des moteurs et à l'élimination des graisses et saletés.",
    format: "Bidon 5 L",
    highlights: ["Action dégraissante", "Élimination des saletés", "Adapté au nettoyage moteur", "Usage professionnel", "Format 5 L"],
    image: moteur,
  },
  {
    slug: "pneus-renov",
    name: "Pneus Renov",
    category: "pneus",
    tagline: "Nettoyage et rénovation de l'aspect des pneus",
    description: "Produit professionnel destiné au nettoyage et à la rénovation de l'apparence des pneus.",
    format: "Bidon 5 L",
    highlights: ["Nettoyage des pneus", "Rénovation visuelle", "Finition professionnelle", "Usage automobile", "Format 5 L"],
    image: pneus,
  },
];

export const getCategory = (key: CategoryKey) => categories.find((c) => c.key === key)!;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
