import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { User } from "lucide-react";

import AnimatedSection from "../components/animations/AnimatedSection";

import Hero from "../components/about/Hero";
import Experts from "../components/about/Experts";

const About = () => {
  return (
    <>
      <div className="min-h-screen pt-30 bg-white transition-colors duration-500 overflow-hidden">
        <div className="flex flex-col gap-12 relative z-10">
          {/* Title Section with animated underline */}
          <AnimatedSection>
            <div className="space-y-4 pb-30 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-medium text-sm">
                <User size={16} className="animate-pulse" />
                <span>Engagés pour votre confort</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Qui sommes-nous ?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  ICF
                </span>
              </h1>
              <div className="relative mx-auto">
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fondée avec la vision d'offrir des solutions de qualité en
                  isolation, climatisation et froid industriel, ICF est une
                  entreprise marocaine qui place l'innovation, la fiabilité et
                  la satisfaction client au cœur de ses priorités. Grâce à une
                  équipe expérimentée et un savoir-faire reconnu, nous
                  accompagnons les professionnels dans la réussite de leurs
                  projets thermiques.
                </p>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Main Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <Experts />
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
