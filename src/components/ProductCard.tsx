import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getCategory, type Product } from "@/data/products";
import { waProduct } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article
      className="group animate-fade-up flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className="relative block aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — bidon 5 L MAN Professionnel`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-background/80 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-widest backdrop-blur">
          {getCategory(product.category).label}
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-primary px-2 py-1 text-xs font-black text-primary-foreground">5 L</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black uppercase">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.tagline}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Format : <span className="text-foreground">{product.format}</span></p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link to="/products/$slug" params={{ slug: product.slug }} className="btn-outline !px-3 !py-2.5 !text-xs">
            Voir détails <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a href={waProduct(product.name)} target="_blank" rel="noreferrer" className="btn-primary !px-3 !py-2.5 !text-xs">
            <WhatsAppIcon className="h-3.5 w-3.5" /> Commander
          </a>
        </div>
      </div>
    </article>
  );
}
