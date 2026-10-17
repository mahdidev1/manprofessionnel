import activeFoam from "@/assets/active-foam1.png";
import dashboard from "@/assets/dashboard-premium.jpg";
import moteur from "@/assets/moteur-degraissant.jpg";
import pneus from "@/assets/pneus-renov.jpg";
import hero from "@/assets/hero.jpg";
import catInterior from "@/assets/cat-interior.jpg";
import catEngine from "@/assets/cat-engine.jpg";
import catTire from "@/assets/cat-tire.jpg";
import BD0 from "@/assets/active_foam.jpg";
import BD1 from "@/assets/degraissant_moteur.jpg";
import BD2 from "@/assets/interieur_magique.jpg";
import BD3 from "@/assets/shampoing_carrosserie.jpg";
import BD4 from "@/assets/lave_vitre.jpg";
import BD5 from "@/assets/dashboard_premium_blue.jpg";
import BD6 from "@/assets/renovateur_pneus.jpg";
import BD7 from "@/assets/dashboard_premium_white.jpg";
import crem from "@/assets/cream.jpg";
import tapis from "@/assets/tapis.jpg";



import spray1 from "@/assets/spray1.jpg";
import spray2 from "@/assets/spray2.jpg";
import spray3 from "@/assets/spray3.jpg";
import spray4 from "@/assets/spray4.jpg";
import spray5 from "@/assets/spray5.jpg";
import perfum1 from "@/assets/CP1.jpg";
import perfum2 from "@/assets/CP2.jpg";
import perfum3 from "@/assets/CP3.jpg";
import perfum4 from "@/assets/CP4.jpg";
import perfum5 from "@/assets/CP5.jpg";

export type CategoryKey = "Produits de nettoyage" | "Gamme SPRAY" | "Air fresh" | "Crème nettoyante" | "Tapis";

export const categories: {
  key: CategoryKey;
  label: string;
  short: string;
  description: string;
  image: string;
}[] = [
  { key: "Produits de nettoyage", label: "Lavage automobile", short: "Produits de nettoyage", description: "Produits conçus pour le lavage extérieur des véhicules.", image: hero },
  { key: "Gamme SPRAY", label: "Entretien intérieur", short: "Gamme SPRAY", description: "Produits pour tableaux de bord et surfaces intérieures.", image: catInterior },
  { key: "Air fresh", label: "Entretien moteur", short: "Air fresh", description: "Produits pour éliminer graisses et saletés des moteurs.", image: catEngine },
  { key: "Crème nettoyante", label: "Entretien pneus", short: "Crème nettoyante", description: "Produits qui nettoient et ravivent l'aspect des pneus.", image: catTire },
  { key: "Tapis", label: "Tapis", short: "Tapis", description: "Produits qui nettoient et ravivent l'aspect des pneus.", image: catTire },
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
  prix: string;
};

/** Add new products here — every page reads from this list. */
export const products: Product[] = [
  {
    slug: "Activ Foam",
    name: "Active Foam",
    category: "Produits de nettoyage",
    tagline: "Shampooing professionnel pour canon à mousse",
    description: "Son PH doux préserve les cires de protection appliquées lors d’un traitement passé. Formule EXTRA moussante. Sa formule très moussante, retire les saletés et les poussières statiques.",
    format: "Bidon 5 L",
    highlights: ["Nettoyage en profondeur", "Mousse riche et onctueuse", "Sur pour la carrosserie", "Brillance exceptionnelle", "Format économique 5 L"],
    image: BD0,
    prix:"30 dt",
  },  {
    slug: "Dégraissant Moteur",
    name: "Dégraissant Moteur",
    category: "Produits de nettoyage",
    tagline: "Un dégraissant Multi-Usages biodégradable",
description:
   "Un dégraissant Multi-Usages biodégradable.\n- Sans danger sur la carrosserie.\n- Rapide et efficace à utiliser.\n- Nettoyant pour moteurs, jantes, pneus, plastiques, surfaces stratifiées, surfaces carrelées, acier inoxydable, fer, etc.",    format: "Bidon 5 L",
    highlights: ["Dégraissant multi-usages biodégradable",
    "Sans danger sur la carrosserie",
    "Rapide et efficace",
    "Moteurs, jantes, pneus, plastiques, inox…",
    "Format économique 5 L",],
    image: BD1,
    prix:"25 dt",
  }, 
  {
    slug: "Intérieur Magic",
    name: "Intérieur Magic",
    category: "Produits de nettoyage",
    tagline: "Elimine les salissures les plus tenaces sur plastiques, cuirs, tissus.",
    description: "Ne laisse pas de trace – Prêt à l’emploi.\nRecommandé pour le nettoyage de toutes les surfaces de l’habitacle des véhicules (tableau de bord et plastiques intérieurs, sièges, garnitures de portes, tapis, pavillons, housses en vinyle, cuir, caoutchouc…).\nRedonne aux surfaces traitées leur propreté initiale.",
    format: "Bidon 5 L",
    highlights: ["Élimine les salissures les plus tenaces",
    "Plastiques, cuirs et tissus",
    "Ne laisse pas de trace",
    "Prêt à l'emploi",
    "Format économique 5 L"],

    image: BD2,
    prix:"25 dt",
   }, 
  {
    slug: "Shampoing Manuel",
    name: "Shampoing Manuel",
    category: "Produits de nettoyage",
    tagline: "Shampooing concentré destiné au lavage à la main de tous les véhicules.",
    description: "Shampooing concentré destiné au lavage à la main de tous les véhicules.\n- Non agressif et de pH neutre, peut être utilisé sur toutes les parties du véhicule (carrosseries, plastiques, peintures, jantes).\n- Très efficace, élimine toutes les salissures et dissout entièrement le film routier.\n- Fort pouvoir séquestrant pour éviter toute trace de calcaire même avec de l’eau dure.\n- Résultat : carrosserie brillante avec un effet déperlant longue durée limitant l’emploi d’une peau de chamois ou d’une microfibre.\n- Formule concentrée.",
    format: "Bidon 5 L",
    highlights: ["Formule concentrée",
    "pH neutre, non agressif",
    "Dissout entièrement le film routier",
    "Évite les traces de calcaire, même avec l'eau dure",
    "Effet déperlant longue durée",],
    image: BD3,
    prix:"25 dt",
  },  {
    slug: "Lave vitre",
    name: "Lave vitre",
    category: "Produits de nettoyage",
    tagline: "Pouvoir dégraissant élevé",
    description: "LE NETTOYANT VITRE MAN présente un pouvoir dégraissant élevé, peut s’utiliser sur toutes surfaces vitrées.\nA l’intérieur: élimine le dépôt gras présent sur la face interne du pare-brise et des vitres dû à la condensation, au fonctionnement du système d’aération, à la fumée de cigarettes, aux traces de doigts.\nA l’extérieur: élimine toutes les salissures et projections liées au trafic automobile (boue, pollution, gaz d’échappement...).\nLe produit ne laisse ni trace ni reflet pouvant perturber la conduite du véhicule de nuit ou face au soleil",
    format: "Bidon 5 L",
    highlights: ["Fort pouvoir dégraissant",
    "Utilisable à l'intérieur et à l'extérieur",
    "Élimine boue, pollution et traces de doigts",
    "Ne laisse ni trace ni reflet",
    "Format économique 5 L"],
    image: BD4,
    prix:"25 dt",
  },  
  {
    slug: "Dashbord polish",
    name: "Dashbord polish",
    category: "Produits de nettoyage",
    tagline: "Haute luminosité",
    description: "MAN Dashboard Polish est riche en composants de cire brillants, une luminosité plus élevée. Matériaux non toxiques plusieurs odeurs agréables proposées. Convient pour le polissage et la protection des tableaux de bord automobiles, des pare-chocs, des sièges en cuir, des pneus, du caoutchouc, du cuir, du plastique et d'autres produits, avec des fonctions anti-vieillissement.",
    format: "Bidon 5 L",
    highlights: [ "Riche en cire brillante",
    "Haute luminosité",
    "Matériaux non toxiques",
    "Plusieurs odeurs agréables",
    "Effet anti-vieillissement"],
    image: BD5,
    prix:"25 dt",
  },  {
    slug: "Rénovateur Pneus",
    name: "Rénovateur Pneus",
    category: "Produits de nettoyage",
    tagline: "Rapide - houte qualité",
    description: "Le Rénovateur Pneus MAN permet de rénover sans effort les pneumatiques de votre véhicule. Le caoutchouc retrouve sa couleur naturelle et vos pneumatiques leur éclat. Le rénovateur pneus MAN protégera vos pneus pour une meilleure longévité. Il évite ainsi le craquèlement sur le flanc des pneus.Il s'applique sur tous les types de pneumatiques.",
    format: "Bidon 5 L",
    highlights: ["Rénove sans effort",
    "Redonne au caoutchouc sa couleur naturelle",
    "Protège et améliore la longévité des pneus",
    "Évite le craquèlement du flanc",
    "Pour tous types de pneumatiques",],
    image: BD6,
    prix:"25 dt",
  },   
  {
    slug: "Dashboard polish",
    name: "Dashboard polish",
    category: "Produits de nettoyage",
    tagline: "A base de silicone polonais",
    description: "Dashboard polish MAN a base de silicone polonais . Il nettoie, éclaircit et protège contre la saleté, la poussière et les tableaux de bord aux rayons UV et chaque pièce en plastique du véhicule. Il prolonge la durée de vie des pièces traitées. Il est utilisé pour l'application de pulvérisation pour une plus grande précision et efficacité. Idéal pour conserver l'aspect d'origine des surfaces intérieures du véhicule. Le produit se caractérise par son action rapide et nettoie soigneusement et complètement les parties intérieures du véhicule, telles que le volant, le frein à main, la radio, le tableau de bord, la boîte à gants, les compartiments, les portes, etc.",
    format: "Bidon 5 L",
    highlights: ["Nettoie, éclaircit et protège",
    "Protection contre la poussière et les UV",
    "Prolonge la durée de vie des pièces traitées",
    "Action rapide, application par pulvérisation", "Format économique 5 L"],
    image: BD7,
    prix:"25 dt",
  },



  {
    slug: "Interieur Magic",
    name: "Interieur Magic",
    category: "Gamme SPRAY",
    tagline: "CUIR PLASTIQUE TISSU",
    description: "Le Rénovateur Pneus MAN permet de rénover sans effort les pneumatiques de votre véhiculez",
    format: "500ML",
    highlights: ["Cuir, plastique et tissu","Élimine les salissures tenaces", "Application rapide","Spray pratique 500 ml"],
    image: spray1,
    prix:"12 dt",
  },
    {
    slug: "Rénovateur pneus",
    name: "Rénovateur pneus",
    category: "Gamme SPRAY",
    tagline: "NETTOYANT BRILLANT",
    description: "Elimine les salissures les plus tenaces sur plastiques, cuirs, tissus",
    format: "500ML",
    highlights: ["Rénove l'aspect des pneus", "Application rapide", "Spray pratique 500 ml"],
    image: spray2,
    prix:"12 dt",
  },
    {
    slug: "Dégraissant",
    name: "Dégraissant",
    category: "Gamme SPRAY",
    tagline: "EFFICACE-RAPIDE",
    description: "Elimine les salissures les plus tenaces sur plastiques, cuirs, tissus.",
    format: "500ML",
    highlights: ["Efficace et rapide", "Élimine les salissures les plus tenaces", "Spray pratique 500 ml"],
    image: spray3,
    prix:"12 dt",
  },
    {
    slug: "Nettoyant JANTES",
    name: "Nettoyant JANTES",
    category: "Gamme SPRAY",
    tagline: "NETTOYANT BRILLANT",
    description: "Elimine les salissures les plus tenaces sur plastiques.",
    format: "500ML",
    highlights: ["Nettoyant brillant", "Élimine les salissures tenaces", "Spécial jantes", "Spray pratique 500 ml"],
    image: spray4,
    prix:"12 dt",
  },
    {
    slug: "Dashbord Polish",
    name: "Dashbord Polish",
    category: "Gamme SPRAY",
    tagline: "PREMIUM",
    description: "MAN Dashboard Polish est riche en composants de cire brillants.",
    format: "500ML",
    highlights: ["Gamme premium", "Riche en cire brillante", "Application rapide", "Brillance exceptionnelle", "Spray pratique 500 ml"],
    image: spray5,
    prix:"12 dt",
  },



  {
    slug: "Air fresh APPLE",
    name: "Air fresh APPLE",
    category: "Air fresh",
    tagline: "Une odeur qui dure longtemps | haute qualité",
    description: "Le désodorisant haut de gamme MAN conçu pour éliminer les mauvaises odeurs et purifier l'air à l'intérieur de votre voiture.Grâce à sa formule innovante, ce produit neutralise efficacement les odeurs persistantes telles que celles de tabac, de nourriture ou d'humidité,tout en apportant une senteur délicate et agréable qui dure longtemps.",
    format: "200ML",
    highlights: ["Élimine les mauvaises odeurs",
    "Neutralise tabac, nourriture et humidité",
    "Purifie l'air de l'habitacle",
    "Format pratique 200 ml"],
    image: perfum1,
    prix:"6 dt",
  },
    {
    slug: "Air fresh VANILLE",
    name: "Air fresh VANILLE",
    category: "Air fresh",
    tagline: "Nettoyage et rénovation de l'aspect des pneus",
    description: "Le désodorisant haut de gamme MAN conçu pour éliminer les mauvaises odeurs et purifier l'air à l'intérieur de votre voiture.Grâce à sa formule innovante, ce produit neutralise efficacement les odeurs persistantes telles que celles de tabac, de nourriture ou d'humidité,tout en apportant une senteur délicate et agréable qui dure longtemps.",
    format: "200ML",
    highlights: [    "Élimine les mauvaises odeurs",
    "Neutralise tabac, nourriture et humidité",
    "Purifie l'air de l'habitacle",
    "Format pratique 200 ml",],
    image: perfum2,
    prix:"6 dt",
  },
    {
    slug: "Air fresh PEACH",
    name: "Air fresh PEACH",
    category: "Air fresh",
    tagline: "Une odeur qui dure longtemps | haute qualité",
    description: "Le désodorisant haut de gamme MAN conçu pour éliminer les mauvaises odeurs et purifier l'air à l'intérieur de votre voiture.Grâce à sa formule innovante, ce produit neutralise efficacement les odeurs persistantes telles que celles de tabac, de nourriture ou d'humidité,tout en apportant une senteur délicate et agréable qui dure longtemps.",
    format: "200ML",
    highlights: [     "Élimine les mauvaises odeurs",
    "Neutralise tabac, nourriture et humidité",
    "Purifie l'air de l'habitacle",
    "Format pratique 200 ml",],
    image: perfum3,
    prix:"6 dt",
  },
    {
    slug: "Air fresh BREEZES",
    name: "Air fresh BREEZES",
    category: "Air fresh",
    tagline: "Une odeur qui dure longtemps | haute qualité",
    description: "Le désodorisant haut de gamme MAN conçu pour éliminer les mauvaises odeurs et purifier l'air à l'intérieur de votre voiture.Grâce à sa formule innovante, ce produit neutralise efficacement les odeurs persistantes telles que celles de tabac, de nourriture ou d'humidité,tout en apportant une senteur délicate et agréable qui dure longtemps.",
    format: "200ML",
    highlights: [     "Élimine les mauvaises odeurs",
    "Neutralise tabac, nourriture et humidité",
    "Purifie l'air de l'habitacle",
    "Format pratique 200 ml",],
    image: perfum4,
    prix:"6 dt",
  },
    {
    slug: "Air fresh STRAWBERRY",
    name: "Air fresh STRAWBERRY",
    category: "Air fresh",
    tagline: "Une odeur qui dure longtemps | haute qualité",
    description: "Le désodorisant haut de gamme MAN conçu pour éliminer les mauvaises odeurs et purifier l'air à l'intérieur de votre voiture.Grâce à sa formule innovante, ce produit neutralise efficacement les odeurs persistantes telles que celles de tabac, de nourriture ou d'humidité,tout en apportant une senteur délicate et agréable qui dure longtemps.",
    format: "200ML",
    highlights: [       "Élimine les mauvaises odeurs",
    "Neutralise tabac, nourriture et humidité",
    "Purifie l'air de l'habitacle",
    "Format pratique 200 ml",],
    image: perfum5,
    prix:"6 dt",
  },
      {
    slug: "Crème nettoyante",
    name: "Crème nettoyante",
    category: "Crème nettoyante",
    tagline: "Nettoyant plastique et cuir",
    description: "Le rénovateur MAN plastique & cuir est un produit pour la finition des plastiques intérieurs. Le rénovateur MAN plastique & cuir est un produit pour plastique intérieur et extérieur de finition satiné. Il rénove et protège les plastiques et la sellerie en cuir d'une voiture. Son parfum haute gamme donne un réel plaisir. Nettoyer la surface au préalable avec le nettoyant intérieur magic MAN. Appliquer le rénovateur MAN sur les plastiques ou les cuirs à l'aide un chiffon microfibre.",
    format: "500g",
    highlights: ["Nettoie plastique et cuir", "Rénove et protège la sellerie en cuir", "Finition satinée", "Parfum haute gamme", "Application facile au chiffon microfibre"],
    image: crem,
    prix:"25 dt",
  },
        {
    slug: "Tapis",
    name: "Tapis",
    category: "Tapis",
    tagline: "Papier imprimés",
    description: "Un lot de tapis en papier imprimés, conçus pour être utilisés dans les stations de lavage automobile. Ils sont idéaux pour protéger l’intérieur des véhicules après nettoyage en empêchant la saleté ou l’humidité de s’y déposer.",
    format: "320 pièces",
    highlights: ["Papier imprimé pour stations de lavage", "Protège l'intérieur du véhicule après nettoyage", "Empêche la saleté et l'humidité de s'y déposer"],
    image: tapis,
    prix:"50 dt",
  },
];

export const getCategory = (key: CategoryKey) => categories.find((c) => c.key === key)!;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
