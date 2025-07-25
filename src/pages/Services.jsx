import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Thermometer, Snowflake, Wind, Shield, Wrench } from "lucide-react";
import { Clock, CheckCircle, ArrowRight, Phone, Star } from "lucide-react";

import Breadcrumb from "../components/UI/Breadcrumb";
import ServicesCard from "../components/services/ServicesCard";
import { services } from "../utils/data";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen pt-30 bg-white transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm">
            <Star size={16} className="animate-pulse" />
            <span>Solutions Professionnelles</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              Services
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Découvrez notre gamme complète de services en isolation, froid
            industriel et climatisation. Des solutions sur mesure pour tous vos
            besoins professionnels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Demander un Devis
            </motion.button>

            <div className="flex items-center space-x-3 text-gray-600">
              <div className="p-3 bg-gray-100 rounded-full">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <div className="font-bold text-black">(+212) 0 661 345 379</div>
                <div className="text-sm">Appelez-nous maintenant</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              service={service}
              index={index}
              isActive={activeCard}
              onHover={setActiveCard}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Besoin d'un Service Personnalisé ?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à étudier vos besoins spécifiques
              et vous proposer des solutions adaptées à votre secteur
              d'activité.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
              >
                Contactez un Expert
              </motion.button>

              <button className="px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-2xl hover:border-red-500 hover:text-red-600 transition-colors">
                Voir nos Réalisations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
