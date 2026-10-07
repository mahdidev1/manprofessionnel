export const CONTACT = {
  phone: "+216 22 905 069",
  phoneHref: "tel:+21622905069",
  email: "nevada.det@gmail.com",
  whatsapp: "21622905069",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const waGeneral = () =>
  waLink("Bonjour MAN Professionnel, je souhaite avoir des informations sur vos produits.");

export const waProduct = (name: string, qty = 1) =>
  waLink(
    `Bonjour MAN Professionnel, je souhaite commander ${qty > 1 ? `${qty} x ` : ""}${name} en format 5 L. Merci de m'indiquer le prix et les conditions de livraison.`,
  );
