import { Link } from "@tanstack/react-router";
import creamVideo from "@/assets/Cream22.mp4";
import { useRef, useState } from "react";

import { ArrowRight, Check, Play } from "lucide-react";


type ProductVideoSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  video: string;
  poster?: string;
  categoryKey: string;
};

export function ProductVideoSection({
  title,
  subtitle,
  description,
  features,
  video,
  poster,
  categoryKey,
}: ProductVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    videoRef.current?.play();
  };

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Soft yellow light behind the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#ffeb00]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-24 lg:px-12">
        {/* Video, with an offset yellow frame as the signature element */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-[#ffeb00] sm:translate-x-5 sm:translate-y-5"
          />

          <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
            <video
              ref={videoRef}
              src={video}
              poster={poster}
              controls={playing}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="aspect-video w-full object-cover"
            >
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {!playing && (
              <button
                type="button"
                onClick={start}
                aria-label="Lire la vidéo avant / après"
                className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#ffeb00]"
              >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[#ffeb00]">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start">
          <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter text-[#ffeb00] sm:text-7xl lg:text-7xl">
            {title}
          </h2>

          <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
            {subtitle}
          </h3>

          <p className="mt-4 max-w-md text-base leading-7 text-white/70">
            {description}
          </p>

          <ul className="mt-6 grid w-full max-w-md gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffeb00] text-black">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/products"
           search={{ cat: "Crème nettoyante" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Voir plus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CreamCarSection() {
  return (
    <ProductVideoSection
      title="Cream Car"
      subtitle="Nettoyant cuir et plastique"
      description="Le rénovateur MAN nettoie, rénove et protège les plastiques intérieurs et extérieurs ainsi que la sellerie en cuir, avec une finition satinée et un parfum haute gamme."
      features={[
        "Cuir et plastique",
        "Finition satinée",
        "Intérieur et extérieur",
        "Parfum haute gamme",
      ]}
      video={creamVideo}
      // poster={creamPoster}
      categoryKey="cream"
    />
  );
}