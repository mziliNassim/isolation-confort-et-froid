import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  MessageCircleMore,
  Copyright,
  Rocket,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { companyInfo, navigation } from "../../utils/data";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const location = useLocation();

  const links = [
    {
      id: "instagram",
      desc: `instagram.com/nassim__dev/`,
      title: "Instagram",
      Icon: Instagram,
      url: "https://instagram.com/isolation_confor_et_froid",
      hover: "hover:text-pink-500",
    },
    {
      id: "mail",
      desc: `mzilinassim@gmail.com`,
      title: "Email",
      Icon: Mail,
      url: "mailto:mzilinassim@gmail.com",
      hover: "hover:text-blue-500",
    },
    {
      id: "facebook",
      desc: `facebook.com/mziliNassim/`,
      title: "Facebook",
      Icon: Facebook,
      url: "https://www.facebook.com/isolation_confor_et_froid/",
      hover: "hover:text-blue-600",
    },
    {
      id: "whatsapp",
      desc: `Whatsapp`,
      title: "Whatsapp",
      Icon: MessageCircleMore,
      url: `https://wa.me/681930875?text=Bonjour%20ICF%2C%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20vos%20services%20d'isolation%20thermique%20et%20frigorifique.%20Merci%20!`,
      hover: "hover:text-green-500",
    },
  ];

  return (
    <footer className="relative bg-white overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="w-full flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Logo & Info */}
            <div className="space-y-6 w-full md:max-w-md">
              <div className="space-y-4">
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="relative group">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-red-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transition duration-300">
                      <img
                        src="/logo.jpg"
                        alt="Logo"
                        className="w-9 h-9 object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-red-600/30 via-red-500/30 to-blue-600/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
                      ISOLATION
                    </span>
                    <span className="text-xs text-gray-500 hidden sm:block">
                      Confort & Froid
                    </span>
                  </div>
                </motion.a>
                <p className="text-gray-700 text-base leading-relaxed">
                  {companyInfo.desc}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{companyInfo?.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a
                    href={`mailto:${companyInfo?.email}`}
                    className="hover:underline"
                  >
                    {companyInfo?.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span>{companyInfo?.tele}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {links.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className={`p-2 bg-gray-100 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 ${social.hover}`}
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full md:max-w-sm">
              <h4 className="text-xl font-bold text-black flex items-center space-x-2 mb-6">
                <Rocket className="w-5 h-5 text-red-500" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3 text-gray-600">
                {location.pathname !== "/projects" &&
                  location.pathname !== "/links" &&
                  navigation.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="flex items-center space-x-2 group hover:text-red-600 transition"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

          {/* Bottom Bar */}
          <div className="text-center text-sm text-gray-500">
            <div className="flex justify-center items-center gap-2">
              <Copyright className="w-4 h-4" />
              <span>{currentYear} ICF. Tous droits réservés.</span>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500" />
      </div>
    </footer>
  );
};

export default Footer;
