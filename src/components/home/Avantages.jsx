import React from "react";
import { Clock, Sun, Wrench, Leaf } from "lucide-react";

import AnimatedSection from "../animations/AnimatedSection";

const Avantages = () => {
  return (
    <section id="avantages" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            <Leaf size={16} />
            <span className="font-medium">Nos Avantages</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir notre expertise ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Votre confort est notre priorité, découvrez ce qui fait notre
            différence
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection
            delay={0.2}
            className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 w-12 h-12 flex items-center justify-center mb-4">
              <Sun size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Confort Toute l'Année
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intérieur parfaitement isolé, frais en été et chaleureux en hiver
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-12 h-12 flex items-center justify-center mb-4">
              <Wrench size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Savoir-Faire Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professionnels qualifiés pour des installations et réparations de
              qualité
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.4}
            className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-12 h-12 flex items-center justify-center mb-4">
              <Clock size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Durabilité
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Appareils performants et solutions énergétiques qui durent dans le
              temps
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
