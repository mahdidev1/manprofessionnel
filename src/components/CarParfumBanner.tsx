
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import vanille from "@/assets/vanille.jpg";
import frais from "@/assets/frais.jpg";
import peche from "@/assets/peche.jpg";
import glace from "@/assets/glace.jpg";
import pomme from "@/assets/pomme.jpg";
import parfum from "@/assets/ParfumHome.png";

const fragrances = [
  { name: "POMME", img: pomme },
  { name: "VANILLE", img: vanille },
  { name: "PÊCHE", img: peche },
  { name: "FRAISE", img: frais },
  { name: "BREEZES", img: glace },
];

export default function CarParfumBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff9b0] via-[#ffeb00] to-[#ffc800] text-black">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20 lg:px-12">
        {/* Product image */}
        <Link
          to="/products"
          search={{ cat: "Air fresh" }}
          className="group relative flex min-h-[260px] items-center justify-center sm:min-h-[340px]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Découvrir la gamme Air Fresh"
        >
          <div className="absolute h-64 w-64 rounded-full bg-white/40 blur-2xl sm:h-80 sm:w-80" />

          <img
            src={parfum}
            alt="Gamme de parfums pour voiture Air Fresh"
            loading="lazy"
            className="relative z-10 max-h-[360px] w-full max-w-[320px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:max-h-[420px] sm:max-w-[380px]"
          />

          <span className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur">
            Fraîcheur au quotidien
          </span>
        </Link>

        {/* Content */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            <Sparkles className="h-4 w-4" />
            Collection parfum automobile
          </span>

          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            CAR
            <br />
            PARFUM
          </h2>

          <p className="mt-3 text-3xl font-black uppercase italic tracking-tight text-red-600 sm:text-4xl">
            Air Fresh<span className="text-black"></span>
          </p>

          <p className="mt-5 max-w-lg text-base leading-7 text-black/75 sm:text-lg">
            Découvrez notre gamme de sprays d’ambiance et transformez chaque
            trajet en une expérience de fraîcheur.
          </p>

          {/* Fragrances */}
          <div className="mt-8 w-full">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-black/60">
              Choisissez votre parfum
            </p>

            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {fragrances.map((flavor) => (
                <div
                  key={flavor.name}
                  className="group flex min-w-0 flex-col items-center rounded-xl border border-black/5 bg-white/55 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-3"
                >
                  <div className="aspect-square w-full max-w-[76px] overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <img
                      src={flavor.img}
                      alt={flavor.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <p className="mt-2 text-center text-[9px] font-black tracking-wide sm:text-[11px]">
                    {flavor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
          to="/products"
          search={{ cat: "Air fresh" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-black px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl"
          >
            Découvrir la gamme
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
