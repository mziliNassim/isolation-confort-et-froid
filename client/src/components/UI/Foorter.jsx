import React, { useEffect, useState } from "react";
import {
  companyInfo,
  quickLinks,
  services,
  socialLinks,
} from "../../assets/data";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ArrowRight,
  Thermometer,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [visibleToTop, setVisibleToTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisibleToTop(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8 inset-shadow-xs rounded-t-xl">
      <div className="container mx-auto px-4 w-full md:w-10/12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#f35a57] to-[#f35a1f] flex items-center justify-center">
                <Thermometer size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">ThermoCool</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Experts en isolation thermique et solutions de froid pour votre
              confort toute l'année.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#f35a57] mt-1 flex-shrink-0"
                />
                <span className="">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#f35a57] flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-gray-950 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#f35a57] flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-gray-950 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#f35a57] flex-shrink-0" />
                <span className="">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">
              Navigation Rapide
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-700 hover:text-gray-950 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#f35a57] opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-700 hover:text-gray-950 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#f35a57] opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                    />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">
              Newsletter
            </h4>
            <p className="mb-4 text-gray-700">
              Restez informé des dernières innovations en matière d'isolation et
              de solutions thermiques.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-gray-100 border border-gray-400 rounded-lg py-3 px-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#f35a57] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-[#f35a57] to-[#f35a1f] text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#f35a57]/20 transition-all"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-[#f35a57] text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={`Suivez-nous sur ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-950 transition-colors mr-4"
              >
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-gray-950 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-700 text-sm">
            © {currentYear} ThermoCool Solutions. Tous droits réservés.
            <span className="inline-flex items-center ml-1">
              Créé avec
              <Heart size={14} className="text-[#f35a57] mx-1" fill="#f35a57" />
              à Marseille
            </span>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed cursopo bottom-8 right-8 w-12 h-12 rounded-full bg-[#f35a57] text-white flex items-center justify-center shadow-lg hover:bg-[#d03c39] transition-all duration-300 z-50"
        aria-label="Retour en haut"
        style={{ display: visibleToTop ? "flex" : "none" }}
      >
        <ArrowRight size={20} className="transform rotate-270" />
      </button>
    </footer>
  );
};

export default Footer;
