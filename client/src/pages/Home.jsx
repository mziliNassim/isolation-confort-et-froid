import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Thermometer,
  Snowflake,
  Wrench,
  ShieldCheck,
  Clock,
  Sun,
  ArrowRight,
  Leaf,
} from "lucide-react";

import homeIntroVid from "../assets/vid/Intro 30s.mp4";

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <div className="mb-20">
        {/* Hero Section with Video Background */}
        <div id="hero" className="relative w-full h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`object-cover w-full h-full transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-100"
              }`}
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src={homeIntroVid} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <div className="container w-fit px-4 mx-auto text-center bg-transparent  backdrop-blur-xl py-10 rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Thermometer size={16} className="text-[#f35a57]" />
                <span className="text-white font-medium">
                  Solutions de confort thermique
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
              >
                Experts en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f35a57] to-[#f35a1f]">
                  isolation thermique
                </span>{" "}
                et solutions de froid
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
              >
                Améliorez votre confort toute l'année avec nos solutions sur
                mesure
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#f35a57] to-[#f35a1f] text-white font-medium hover:shadow-lg hover:shadow-[#f35a57]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Demander un devis
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  Découvrir nos services
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2">Découvrir plus</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-10/12 mx-auto">
          {/* Services Section */}
          <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-red-100 dark:bg-red-900/30 text-[#f35a57]">
                  <Wrench size={16} />
                  <span className="font-medium">Nos Services</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Des solutions complètes pour votre confort
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Nos experts sont à votre service pour améliorer votre confort
                  et réduire votre consommation énergétique
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection
                  delay={0.2}
                  className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 border-t-4 border-[#f35a57] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-[#f35a57] w-16 h-16 flex items-center justify-center mb-6">
                    <Thermometer size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Isolation Thermique
                  </h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#f35a57] mt-1" />
                      <span>
                        Isolation de tous types de murs (intérieur et extérieur)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#f35a57] mt-1" />
                      <span>Amélioration de la performance énergétique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#f35a57] mt-1" />
                      <span>Confort thermique optimal en toute saison</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/services/isolation"
                      className="inline-flex items-center text-[#f35a57] font-medium hover:text-[#d03c39] transition-colors gap-1 group"
                    >
                      En savoir plus
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  delay={0.4}
                  className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 border-t-4 border-[#3b82f6] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-[#3b82f6] w-16 h-16 flex items-center justify-center mb-6">
                    <Snowflake size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Solutions de Froid
                  </h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#3b82f6] mt-1" />
                      <span>Installation et réparation de climatiseurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#3b82f6] mt-1" />
                      <span>
                        Entretien d'appareils de froid (réfrigérateurs, machines
                        à laver)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-[#3b82f6] mt-1" />
                      <span>Solutions durables et performantes</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/services/froid"
                      className="inline-flex items-center text-[#3b82f6] font-medium hover:text-[#2563eb] transition-colors gap-1 group"
                    >
                      En savoir plus
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
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
                    Intérieur parfaitement isolé, frais en été et chaleureux en
                    hiver
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
                    Professionnels qualifiés pour des installations et
                    réparations de qualité
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
                    Appareils performants et solutions énergétiques qui durent
                    dans le temps
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-[#f35a57] to-[#f35a1f]">
            <div className="container mx-auto px-4">
              <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Prêt à améliorer votre confort ?
                  </h2>
                  <p className="text-white/80 text-lg">
                    Contactez-nous dès aujourd'hui pour un devis gratuit et
                    personnalisé.
                  </p>
                </div>
                <div>
                  <a
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-white text-[#f35a57] font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    Nous contacter
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
