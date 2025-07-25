import React from "react";
import { ArrowRight } from "lucide-react";

import AnimatedSection from "../animations/AnimatedSection";

const CTA = () => {
  return (
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
  );
};

export default CTA;
