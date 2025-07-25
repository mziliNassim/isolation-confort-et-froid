import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-start my-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              ICF - Isolation Confort & Froid
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Une Équipe Passionnée
              <br />À Votre Service
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Chez ICF, nous mettons notre savoir-faire à votre disposition pour
            répondre à tous vos besoins en matière de :
          </p>

          <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
            <li>
              <strong>Isolation Thermique</strong> de haute performance pour un
              meilleur confort et des économies d’énergie.
            </li>
            <li>
              <strong>Climatisation</strong> (installation, réparation et
              entretien) avec des solutions sur mesure pour chaque espace.
            </li>
            <li>
              <strong>Installation et réparation</strong> de tous types
              d’équipements thermiques et frigorifiques, avec expertise et
              précision.
            </li>
          </ul>
        </motion.div>

        {/* Right Images Grid with Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Large image */}
            <div className="col-span-1 row-span-2">
              <div className="bg-gray-200 h-80 rounded-2xl relative overflow-hidden">
                <img
                  src="/images/3.jpg"
                  alt="Travaux d'installation"
                  loading="lazy"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Small images */}
            <div className="space-y-4">
              <div className="bg-gray-300 h-36 rounded-2xl relative overflow-hidden">
                <img
                  src="/images/3.jpg"
                  alt="Travaux de maintenance"
                  loading="lazy"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-300 h-36 rounded-2xl relative overflow-hidden">
                <img
                  src="/images/3.jpg"
                  alt="Équipe ICF"
                  loading="lazy"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">879+</div>
                <div className="text-sm font-medium opacity-90">
                  Projets Réalisés
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">148+</div>
                <div className="text-sm font-medium opacity-90">
                  Clients Satisfaits
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
