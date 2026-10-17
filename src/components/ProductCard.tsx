
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getCategory, type Product } from "@/data/products";
import { waProduct } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <article
      className="group animate-fade-up flex min-w-0 flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      
      {/* Product image */}
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden"
      >
        <img
          src={product.image}
          alt={`${product.name} — bidon 5 L MAN Professionnel`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* <span className="absolute left-1.5 top-1.5 max-w-[75%] truncate rounded-sm bg-background/80 px-1.5 py-1 text-[0.55rem] font-bold uppercase tracking-wide backdrop-blur sm:left-3 sm:top-3 sm:px-2 sm:text-[0.65rem] sm:tracking-widest">
          {getCategory(product.category).label}
        </span>*/}

        <span className="absolute right-1.5 top-1.5 rounded-sm bg-primary px-1.5 py-1 text-[0.6rem] font-black text-primary-foreground sm:right-3 sm:top-3 sm:px-2 sm:text-xs">
          {product.prix}
        </span> 
      </Link>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-4 lg:p-5">
        <h3 className="break-words text-sm font-black uppercase leading-tight sm:text-lg lg:text-xl">
          {product.name}
        </h3>

        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
          {product.tagline}
        </p>

        <p className="mt-2 text-[0.6rem] font-semibold uppercase leading-relaxed tracking-wide text-muted-foreground sm:mt-3 sm:text-xs sm:tracking-wider">
          Format:{" "}
          <span className="text-foreground">{product.format}</span>
        </p>

        {/* Action buttons */}
        <div className="mt-3 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="btn-outline flex h-9 items-center justify-center gap-1 !px-1 !py-2 !text-[0.65rem] sm:h-10 sm:!px-2 sm:!text-xs"
          >
            <span>Voir détails</span>
            <ArrowRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          </Link>

          <a
            href={waProduct(product.name)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex h-9 items-center justify-center gap-1 !px-1 !py-2 !text-[0.65rem] sm:h-10 sm:!px-2 sm:!text-xs"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>Commander</span>
          </a>
        </div>
      </div>
    </article>
  );
}
