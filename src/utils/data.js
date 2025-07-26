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
  { id: 3, title: "nos services", url: "/services" },
  { id: 4, title: "Contact", url: "/contact" },
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
    title: "Notre Adresse",
    content: "Avenue Mohammed V, Marrakech, Maroc",
    cta: "Obtenir l'itinéraire",
    link: "https://www.google.com/maps/place/Gare+Oncf/@31.62967,-8.017888,14z/data=!4m6!3m5!1s0xdafee9374acc0a5:0xd267411d65fc67d0!8m2!3d31.62967!4d-8.017888!16s%2Fg%2F11gfcz4y30?hl=fr&entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    color: "#FF5733",
  },
  {
    icon: Phone,
    title: "Numéro de téléphone",
    content: "+212 777-386032",
    cta: "Appelez-nous",
    link: "tel:+212777386032",
    color: "#34b7f1",
  },
  {
    icon: Mail,
    title: "Adresse e-mail",
    content: "isolation.froid@gmail.com",
    cta: "Envoyer un e-mail",
    link: "mailto:isolation.froid@gmail.com",
    color: "#EA4335",
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    content: "Lundi - Vendredi : 9h00 - 18h00",
    cta: "Voir les horaires complets",
    link: "",
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
  phone: "+212777386032",
  whatsapp:
    "https://wa.me/777386032?text=Bonjour%20ICF%2C%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20vos%20services%20d'isolation%20thermique%20et%20frigorifique.%20Merci%20!",
  email: "isolationconfortfroid@gmail.com",
  hours: "Lun-Ven: 8h-18h | Sam: 9h-13h",
  logo: "/logo.jpg",
  desc: "Spécialiste en isolation thermique, climatisation et équipements thermiques & frigorifiques. Solutions professionnelles pour améliorer le confort et la performance énergétique de votre habitat.",
  email: "isolation.froid@gmail.com",
  tele: "+212 777-386032",
  infos: {
    projects: {
      count: "200+",
      desc: "projets réalisés",
    },
    clients: {
      count: "100%",
      desc: "Clients satisfaits",
    },
    experience: {
      count: "10+",
      desc: "Années d'expérience",
    },
    services: {
      count: "24/7",
      desc: "Service d'urgence",
    },
  },
};

// Service categories
export const servicesLinks = [
  { name: "Isolation Thermique", path: "/services/isolation" },
  { name: "Climatisation", path: "/services/climatisation" },
  { name: "Réfrigération", path: "/services/refrigeration" },
  { name: "Maintenance", path: "/services/maintenance" },
  { name: "Devis Gratuit", path: "/contact" },
];
