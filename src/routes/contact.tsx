import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { PageHeader } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { products } from "@/data/products";
import { CONTACT, waGeneral, waLink } from "@/lib/contact";

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
        <form onSubmit={submit} className="grid gap-4 rounded-lg border bg-surface p-6 md:p-8 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Nom<input required maxLength={100} className={field} value={f.nom} onChange={set("nom")} /></label>
          <label className="grid gap-2 text-sm font-semibold">Téléphone<input required type="tel" maxLength={30} className={field} value={f.tel} onChange={set("tel")} /></label>
          <label className="grid gap-2 text-sm font-semibold">Email<input type="email" maxLength={255} className={field} value={f.email} onChange={set("email")} /></label>
          <label className="grid gap-2 text-sm font-semibold">Produit qui vous intéresse
            <select className={field} value={f.produit} onChange={set("produit")}>
              <option value="">— Choisir —</option>
              {products.map((p) => <option key={p.slug} value={`${p.name} 5 L`}>{p.name}</option>)}
              <option value="Autre">Autre</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Message<textarea rows={5} maxLength={1000} className={field} value={f.message} onChange={set("message")} /></label>
          <button type="submit" className="btn-primary sm:col-span-2"><Send className="h-4 w-4" /> Envoyer la demande</button>
        </form>
      </section>
    </>
  );
}
