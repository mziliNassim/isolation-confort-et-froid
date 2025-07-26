import React, { useState } from "react";
import { Wrench } from "lucide-react";

import AnimatedSection from "../animations/AnimatedSection";
import ServicesCard from "../services/ServicesCard";

import { services } from "../../utils/data";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="services"
      className="w-full md:w-10/12 mx-auto py-20 bg-white dark:bg-gray-900"
    >
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
            Nos experts sont à votre service pour améliorer votre confort et
            réduire votre consommation énergétique
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            if (index < 3)
              return (
                <ServicesCard
                  key={index}
                  service={service}
                  index={index}
                  isActive={activeCard}
                  onHover={setActiveCard}
                />
              );
          })}
        </div>

        {/* link to all services */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Voir Tous les Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
