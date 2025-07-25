import usa from "../assets/img/languages/usa.png";
import france from "../assets/img/languages/france.png";
import morocco from "../assets/img/languages/morocco.png";

import { Instagram, Facebook, Wind, Shield } from "lucide-react";
import { MapPin, Phone, Mail, Clock, Wrench } from "lucide-react";
import { Thermometer, Snowflake, MessageCircleMore } from "lucide-react";
import { color } from "motion";

export const navigation = [
  { id: 1, title: "accueil", url: "/home" },
  { id: 2, title: "à propos", url: "/about" },
  // { id: 3, title: "nos services", url: "/services" },
  { id: 5, title: "Contact", url: "/contact" },
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

export const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    link: "https://www.facebook.com/isolation_confor_et_froid/",
    color: "#3b5998",
  },
  {
    icon: Instagram,
    name: "Instagram",
    link: "https://instagram.com/isolation_confor_et_froid",
    color: "#E1306C",
  },
  {
    icon: Mail,
    name: "mail",
    link: "mailto:isolation.froid@gmail.com",
    color: "#EA4335",
  },
  {
    icon: MessageCircleMore,
    name: "Whatsapp",
    link: "https://wa.me/777386032?text=Bonjour%20ICF%2C%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20vos%20services%20d'isolation%20thermique%20et%20frigorifique.%20Merci%20!",
    color: "#25D366",
  },
];

export const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Avenue Mohammed V, Marrakech, Morocco",
    cta: "Get Directions",
    link: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13588.234688828752!2d-8.0324224!3d31.6322439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9374acc0a5%3A0xd267411d65fc67d0!2sGare%20Oncf!5e0!3m2!1sfr!2sma!4v1753461470541!5m2!1sfr!2sma",
    color: "#FF5733",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+212 777-386032",
    cta: "Call Us",
    link: "tel:+212777386032",
    color: "#34b7f1",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "isolationconfortfroid@gmail.com",
    cta: "Send Email",
    link: "mailto:isolation.froid@gmail.com",
    color: "#EA4335",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Friday: 9AM - 6PM",
    cta: "See Full Schedule",
    link: "/libritech/Working-Hours",
    color: "#28a745",
  },
];

export const services = [
  {
    icon: Thermometer,
    title: "Isolation Thermique",
    description:
      "Solutions d'isolation performantes pour optimiser le confort thermique et réduire les coûts énergétiques de vos bâtiments.",
    features: [
      "Isolation des murs et toitures",
      "Matériaux haute performance",
      "Audit énergétique inclus",
      "Garantie 10 ans",
    ],
  },
  {
    icon: Snowflake,
    title: "Froid Industriel",
    description:
      "Installation et maintenance de systèmes frigorifiques industriels pour la conservation et le stockage de vos produits.",
    features: [
      "Chambres froides sur mesure",
      "Systèmes de réfrigération",
      "Maintenance préventive",
      "Conformité aux normes",
    ],
  },
  {
    icon: Wind,
    title: "Climatisation",
    description:
      "Systèmes de climatisation et ventilation pour assurer un confort optimal dans tous vos espaces professionnels.",
    features: [
      "Climatisation centralisée",
      "Systèmes multi-split",
      "Ventilation double flux",
      "Contrôle intelligent",
    ],
  },
  {
    icon: Shield,
    title: "Maintenance Préventive",
    description:
      "Services de maintenance régulière pour garantir le bon fonctionnement et la longévité de vos installations.",
    features: [
      "Contrats de maintenance",
      "Interventions programmées",
      "Dépannage d'urgence 24/7",
      "Pièces de rechange garanties",
    ],
  },
  {
    icon: Wrench,
    title: "Installation & Réparation",
    description:
      "Installation professionnelle et réparation de tous types d'équipements thermiques et frigorifiques.",
    features: [
      "Installation clé en main",
      "Mise en service complète",
      "Formation utilisateurs",
      "Support technique",
    ],
  },
  {
    icon: Clock,
    title: "Service d'Urgence",
    description:
      "Intervention rapide 24h/24 et 7j/7 pour tous vos dépannages d'urgence en froid et climatisation.",
    features: [
      "Intervention sous 2h",
      "Équipe disponible 24/7",
      "Diagnostic gratuit",
      "Devis immédiat",
    ],
  },
];

// Company information
export const companyInfo = {
  name: "Isolation Confort Et Froid 2",
  address: "Avenue Mohammed V, Marrakech, Morocco",
  phone: "+212 777-386032",
  email: "isolationconfortfroid@gmail.com",
  hours: "Lun-Ven: 8h-18h | Sam: 9h-13h",
  logo: "/logo.jpg",
  desc: "Passionate full-stack developer crafting digital experiences with modern technologies. Let's build something amazing together!",
  email: "isolation.froid@gmail.com",
  tele: "+212 777-386032",
};

// Service categories
export const servicesLinks = [
  { name: "Isolation Thermique", path: "/services/isolation" },
  { name: "Climatisation", path: "/services/climatisation" },
  { name: "Réfrigération", path: "/services/refrigeration" },
  { name: "Maintenance", path: "/services/maintenance" },
  { name: "Devis Gratuit", path: "/contact" },
];
