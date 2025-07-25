import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Des experts à vos côtés
        </h2>

        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
          <p>
            Notre équipe est notre plus grande force. Ingénieurs, techniciens,
            chefs de projet, commerciaux... Tous nos collaborateurs mettent leur
            savoir-faire et leur engagement à votre service. Leur mission ?
            Faire de vos projets un succès en proposant des solutions adaptées à
            vos besoins et à votre activité.
          </p>

          <p>
            Nos équipes connaissent parfaitement les spécificités locales, de
            Marrakech à Tanger en passant par Rabat, Casablanca et Agadir. Cette
            expertise de terrain leur permet d'être toujours en phase avec les
            réalités de votre marché.
          </p>

          <p>
            Pour vous proposer des services de qualité premium, nous
            investissons en continu dans la formation de nos collaborateurs.
            Nous encourageons aussi le partage des bonnes pratiques en interne.
            Cette dynamique positive nous permet de fédérer des équipes soudées
            et ultra-réactives, prêtes à se dépasser pour votre satisfaction.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <Link
            to="/contact"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Contactez Nous
          </Link>

          <div className="flex items-center space-x-3 text-gray-600">
            <div className="p-2 bg-gray-100 rounded-full">
              <Phone size={20} className="text-gray-600" />
            </div>
            <div>
              <div className="font-bold text-black">(+212) 0 661 345 379</div>
              <div className="text-sm">Appelez-nous</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content - Image placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-gray-200 h-96 rounded-2xl relative overflow-hidden">
          <img
            src="/images/3.jpg"
            alt="About Image 1"
            loading="lazy"
            className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 object-cover w-full h-full "
          />

          {/* Overlay content if needed */}
          <div className="absolute inset-0 flex items-end p-6">
            <div className="w-full bg-black/70 backdrop-blur-sm text-white p-4 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Équipe d'Experts</h3>
              <p className="text-sm opacity-90">
                Des professionnels qualifiés à votre service
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experts;
