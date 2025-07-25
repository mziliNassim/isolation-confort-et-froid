import React from "react";
import { motion } from "framer-motion";
import { Phone, Thermometer, Shield, Home } from "lucide-react";

const Experts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-3 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Des experts thermiques & frigorifiques à vos côtés
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full border border-red-200 dark:border-red-700/30">
              <Thermometer className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700 dark:text-red-300">
                Isolation Thermique
              </span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-700/30">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Climatisation
              </span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/10 dark:to-blue-900/10 rounded-full border border-gray-200 dark:border-gray-700/30">
              <Home className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Équipements Frigorifiques
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          <p>
            Notre équipe d'experts en{" "}
            <span className="text-red-600 font-medium">
              isolation thermique
            </span>{" "}
            et
            <span className="text-blue-600 font-medium">
              {" "}
              climatisation
            </span>{" "}
            est notre plus grande force. Ingénieurs thermiciens, techniciens
            frigorifiques, installateurs climatisation, spécialistes
            isolation... Tous nos collaborateurs mettent leur expertise
            technique à votre service. Leur mission ? Assurer votre{" "}
            <span className="text-red-600 font-medium">
              confort thermique
            </span>{" "}
            optimal grâce à des solutions complètes d'isolation et de
            climatisation.
          </p>

          <p>
            Nos équipes maîtrisent parfaitement l'installation professionnelle
            et la réparation de tous types d'équipements thermiques et
            frigorifiques. Des systèmes de climatisation résidentiels aux
            installations industrielles, en passant par l'isolation thermique
            haute performance, nous couvrons l'ensemble des besoins climatiques
            du Maroc.
          </p>

          <p>
            Pour garantir des performances énergétiques optimales, nous
            investissons continuellement dans la formation de nos équipes aux
            dernières technologies : pompes à chaleur, climatiseurs inverter,
            matériaux isolants nouvelle génération. Cette expertise nous permet
            de créer des environnements où le{" "}
            <span className="text-red-600 font-medium">confort</span> et
            l'efficacité énergétique se conjuguent parfaitement, même lors des{" "}
            <span className="text-blue-600 font-medium">
              températures extrêmes
            </span>
            .
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-200/50 dark:border-blue-700/20">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-semibold text-blue-800 dark:text-blue-200">
                500+
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              installations climatisation réalisées
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 bg-gradient-to-br from-red-50/30 to-blue-50/30 dark:from-red-900/10 dark:to-blue-900/10 rounded-xl border border-gray-200/50 dark:border-gray-700/20">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-gray-600" />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                24/7
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              service réparation & maintenance
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Content - Image with overlay */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative space-y-6"
      >
        <div className="relative inset-0 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg overflow-hidden z-10">
          <div>
            <img
              src="/logo.jpg"
              alt="Experts Thermiques"
              loading="lazy"
              className="object-cover object-center rounded-2xl shadow-lg"
            />

            {/* Temperature indicators */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center space-x-2 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Chauffage +24°C</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 space-y-2">
              <div className="flex items-center space-x-2 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Clim -18°C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom overlay content */}
        <div className="py-6">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  Solutions Thermiques Complètes
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Installation • Réparation • Maintenance 24h/24
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Contact Section - Single version across all screens */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 col-span-1 lg:col-span-2 border-t border-gray-200 dark:border-gray-700">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-red-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Demandez un Devis Gratuit
        </motion.button>

        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
          <div className="p-2 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 rounded-full">
            <Phone size={20} className="text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <div className="font-bold text-gray-900 dark:text-gray-100">
              (+212) 0 661 345 379
            </div>
            <div className="text-sm">Dépannage climatisation 24h/24</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
