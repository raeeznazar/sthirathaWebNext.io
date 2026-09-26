export const SITE = {
  name: "Sthiratha",
  fullName: "Sthiratha Press & Digital Printing",
  url: "https://www.sthiratha.in",
  description:
    "Sthiratha is a Kozhikode-based digital and offset printing house offering photocopying, hard & spiral binding, ID card printing, pre-ink stamps, DTP, graphic design and office stationery.",
  themeColor: "#2f55d4",
} as const;

export const CONTACT = {
  salesEmail: "sales@sthiratha.in",
  gmail: "sthirathapress@gmail.com",
  website: "www.sthiratha.in",
  whatsapp: "+919847166333",
  whatsappHref: "https://wa.me/919847166333",
  phone: "+91 9847166333",
  phoneHref: "tel:+919847166333",
  hours: "9:30 AM - 7:30 PM",
  address:
    "S.K. Arcade Kannur Road West Nadakkave, Vandipetta, West Hill Kozhikode, Kerala 673011 India",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Our Services", href: "/#services" },
  { label: "About Us", href: "/aboutUs-details" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HEADER_SOCIAL_LINKS = [
  { label: "Chat on WhatsApp", href: CONTACT.whatsappHref, icon: "whatsapp" },
  { label: "Call us", href: CONTACT.phoneHref, icon: "phone" },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  { label: "Chat on WhatsApp", href: CONTACT.whatsappHref, icon: "whatsapp" },
  { label: "Call us", href: CONTACT.phoneHref, icon: "phone" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Terms & Condition", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "/#contact" },
] as const;
