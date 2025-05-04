import usa from "../assets/img/languages/usa.png";
import france from "../assets/img/languages/france.png";
import morocco from "../assets/img/languages/morocco.png";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const navigation = [
  {
    id: 1,
    title: "Home",
    url: "/home",
  },
  // {
  //   id: 2,
  //   title: "About",
  //   url: "/about",
  // },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

export const languages = [
  {
    id: 1,
    title: "English (US)",
    icon: usa,
  },
  {
    id: 2,
    title: "French (Fr)",
    icon: france,
  },
  {
    id: 3,
    title: "Arabic (Ar)",
    icon: morocco,
  },
];

// Social media links
export const socialLinks = [
  { icon: Facebook, name: "Facebook", link: "https://facebook.com/" },
  { icon: Instagram, name: "Instagram", link: "https://instagram.com/" },
  { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com/" },
  { icon: Twitter, name: "Twitter", link: "https://twitter.com/" },
];
export const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Avenue Mohammed V, Marrakech, Morocco",
    cta: "Get Directions",
    link: "https://www.google.com/maps?ll=31.634621,-8.007853&z=12&t=m&hl=en&gl=US&mapclient=embed&q=Marrakesh+Morocco",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+212 681930875",
    cta: "Call Us",
    link: "tel:+212681930875",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "contact@libritech.ma",
    cta: "Send Email",
    link: "mailto:mzilinassim@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Friday: 9AM - 6PM",
    cta: "See Full Schedule",
    link: "/libritech/Working-Hours",
  },
];

// Company information
export const companyInfo = {
  name: "ThermoCool Solutions",
  address: "123 Rue de la République, 13001 Marseille",
  phone: "+33 4 91 12 34 56",
  email: "contact@thermocool-solutions.fr",
  hours: "Lun-Ven: 8h-18h | Sam: 9h-13h",
};

// Quick links for navigation
export const quickLinks = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "À Propos", path: "/about" },
  { name: "Réalisations", path: "/projects" },
  { name: "Témoignages", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

// Service categories
export const services = [
  { name: "Isolation Thermique", path: "/services/isolation" },
  { name: "Climatisation", path: "/services/climatisation" },
  { name: "Réfrigération", path: "/services/refrigeration" },
  { name: "Maintenance", path: "/services/maintenance" },
  { name: "Devis Gratuit", path: "/contact" },
];
