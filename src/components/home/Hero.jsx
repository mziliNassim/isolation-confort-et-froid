import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Thermometer, ArrowRight } from "lucide-react";

import homeIntroPoster from "../../assets/img/poster3.png";

import homeIntroVid8Web from "../../assets/vid/man-clima.webm";

const Hero = ({}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* show poster if videoLoaded === false*/}
      {!videoLoaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white">
          <img
            src={homeIntroPoster}
            alt="Hero Poster"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`object-cover w-full h-full transition-opacity duration-1000 opacity-100`}
        >
          <source src={homeIntroVid8Web} type="video/mp4" />
        </video>

        {/* <div className="absolute inset-0 bg-black/40 pointer-events-none"></div> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-40 bg-transparent flex items-center justify-center w-full h-full">
        <div className="container w-fit px-4 mx-auto text-center bg-transparent  backdrop-blur-xl py-10 rounded-xl shadow-lg shadow-black/20">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[red] to-[blue]">
              Experts en isolation thermique et solutions de froid
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Améliorez votre confort toute l'année avec nos solutions sur mesure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[red] to-[blue] text-white font-medium hover:shadow-lg hover:shadow-[#f35a57]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Contacter-nous
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white text-white font-medium hover:bg-white/20 transition-all duration-300"
            >
              Découvrir nos services
            </Link>
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
  );
};

export default Hero;
