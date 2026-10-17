import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Minus, Plus, Truck, ChevronLeft } from "lucide-react";
import { getCategory, getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waProduct } from "@/lib/contact";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Produit introuvable" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    const t = `${p.name} 5 L — MAN Professionnel`;
    return {
      meta: [
        { title: t },
        { name: "description", content: p.description },
        { property: "og:title", content: t },
        { property: "og:description", content: p.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="text-3xl font-black">Produit introuvable</h1>
      <Link to="/products" className="btn-primary mt-6">Voir les produits</Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const cat = getCategory(p.category);
  const features = [

    ...p.highlights,
  ];
  const similar = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ChevronLeft className="h-4 w-4" /> Tous les produits
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up overflow-hidden rounded-lg ">
            <img src={p.image} alt={`${p.name} — bidon 5 L`} width={1024} height={1024} className="aspect-square w-full object-cover" />
          </div>
          <div className="animate-fade-up flex flex-col justify-center" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow">{cat.label}</p>
            <h1 className="mt-3 text-5xl font-black uppercase leading-none md:text-6xl">{p.name}</h1>
            <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm border px-3 py-1.5 text-sm font-bold">
              Format : <span className="text-primary">{p.format}</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground whitespace-pre-line">{p.description}</p>
            <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm   text-m font-bold">
              Prix : <span className="text-primary">{p.prix}</span>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              
              <a href={waProduct(p.name, qty)} target="_blank" rel="noreferrer" className="btn-primary flex-1 sm:flex-none">
                <WhatsAppIcon className="h-4 w-4" /> Commander maintenant
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Truck className="h-4 w-4 text-primary" /> Livraison disponible — prix sur demande via WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="border-y bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="text-3xl font-black uppercase">Caractéristiques</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...features, "Livraison disponible"].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-md border bg-card p-4 font-semibold">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground"><Check className="h-4 w-4" /></span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-3xl font-black uppercase">Autres produits</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((s, i) => <ProductCard key={s.slug} product={s} index={i} />)}
        </div>
      </section>
    </>
  );
}
