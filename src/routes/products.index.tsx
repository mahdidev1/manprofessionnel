import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, products, type CategoryKey } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHeader, CTASection } from "@/components/CTASection";

const keys = categories.map((c) => c.key) as string[];

export const Route = createFileRoute("/products/")({
  validateSearch: (s: Record<string, unknown>): { cat?: CategoryKey } =>
    typeof s["cat"] === "string" && keys.includes(s["cat"]) ? { cat: s["cat"] as CategoryKey } : {},
  head: () => ({
    meta: [
      { title: "Produits — MAN Professionnel" },
      { name: "description", content: "Gamme de produits professionnels en bidon 5 L : lavage, intérieur, moteur et pneus." },
      { property: "og:title", content: "Produits — MAN Professionnel" },
      { property: "og:description", content: "Gamme de produits professionnels en bidon 5 L : lavage, intérieur, moteur et pneus." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { cat } = Route.useSearch();
  const list = cat ? products.filter((p) => p.category === cat) : products;
  const filters = [{ key: undefined, short: "Tous" }, ...categories];
  return (
    <>
      <PageHeader eyebrow="Catalogue" title="Nos produits" text="Des formats professionnels de 5 L pour le lavage, l'intérieur, le moteur et les pneus." />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = cat === f.key;
            return (
              <Link
                key={f.short}
                to="/products"
                search={f.key ? { cat: f.key } : {}}
                className={`rounded-full border px-5 py-2 text-sm font-bold transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary hover:text-primary"}`}
              >
                {f.short}
              </Link>
            );
          })}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </section>
      <CTASection title="Besoin d'un conseil ?" text="Dites-nous ce que vous cherchez, nous vous orientons vers le bon produit." cta="Parler sur WhatsApp" />
    </>
  );
}
