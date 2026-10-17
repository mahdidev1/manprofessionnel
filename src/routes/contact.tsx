import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { PageHeader } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { products } from "@/data/products";
import { CONTACT, waGeneral, waLink } from "@/lib/contact";
import { CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MAN Professionnel" },
      { name: "description", content: "Contactez MAN Professionnel par téléphone, email ou WhatsApp : +216 22 905 069." },
      { property: "og:title", content: "Contact — MAN Professionnel" },
      { property: "og:description", content: "Contactez MAN Professionnel par téléphone, email ou WhatsApp." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function Contact() {
  const [f, setF] = useState({ nom: "", tel: "", email: "", produit: "", message: "" });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "Bonjour MAN Professionnel,",
      `Nom : ${f.nom}`,
      `Téléphone : ${f.tel}`,
      f.email && `Email : ${f.email}`,
      f.produit && `Produit : ${f.produit}`,
      f.message && `Message : ${f.message}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank");
  };

  const cards = [
    { icon: Phone, label: "Téléphone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Contact direct via WhatsApp", href: waGeneral() },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de votre besoin" text="Demandez un prix, des informations ou passez commande." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-lg border bg-card p-6 transition-colors hover:border-primary/60">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <span>
                <span className="eyebrow block">{label}</span>
                <span className="mt-1 block font-bold">{value}</span>
              </span>
            </a>
          ))}
        </div>
        <div  className="overflow-hidden border-border/40 bg-card shadow-soft h-full">
          <CardContent className="w-full h-100 p-1 ">
                <iframe
                  title="Ubicación de Bar Restaurante Armenia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.2069201264485!2d10.5819522!3d35.7281456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdf50507b6c911%3A0xce1fb1a0f7417c78!2s7N%20LAB%2C%2065%20Rue%20Sidi%20Hammouda%2C%20Msaken%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1693343459787!5m2!1sen!2stn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
        </div>
      </section>
    </>
  );
}
