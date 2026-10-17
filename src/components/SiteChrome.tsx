
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { CONTACT, waGeneral } from "@/lib/contact";
import ManLogo from "@/assets/ManLogo.png"

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/products", label: "Produits" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link
      to="/"
    >
      <img src={ManLogo}       
              alt="Logo"
              style={{ cursor: "pointer" }}
              className="h-10"
 />
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();

    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b bg-background/95 backdrop-blur"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "!text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={waGeneral()}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden !py-2.5 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> Commander
        </a>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="py-3 text-base font-bold"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}

          <a
            href={waGeneral()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Commander sur WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waGeneral()}
      target="_blank"
      rel="noreferrer"
      aria-label="Commander sur WhatsApp"
      className="btn-whatsapp fixed bottom-5 right-5 z-50 !rounded-full !p-4 shadow-2xl md:!px-5 md:!py-3.5"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-5 md:w-5" />
      <span className="hidden md:inline">
        Commander sur WhatsApp
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo and description */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Nous proposons une gamme complète de produits de nettoyage
            spécialement conçus pour l’intérieur et l’extérieur des véhicules.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-muted-foreground hover:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {CONTACT.phone}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {CONTACT.email}
              </a>
            </li>

            <li>
              <a
                href={waGeneral()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <WhatsAppIcon className="h-4 w-4 text-primary" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <p className="eyebrow mb-4">Réseaux sociaux</p>

          <div className="flex items-center gap-4">
            <a
                href="https://www.tiktok.com/@manprofessionnel2022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/Nevada2021"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © 2026 MAN Professionnel. Tous droits réservés.
      </div>
    </footer>
  );
}
