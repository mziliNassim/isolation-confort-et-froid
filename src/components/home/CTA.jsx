import React from "react";
import { Phone, MessageCircle, Calendar, ArrowRight, Star } from "lucide-react";
import { companyInfo } from "../../utils/data";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600  to-blue-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Prêt à Améliorer Votre Confort ?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
              Obtenez un devis gratuit pour vos projets d'isolation thermique et
              de climatisation. Nos experts vous accompagnent de A à Z.
            </p>
          </div>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-green-300" />
                Intervention Rapide
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white border border-white/20">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-300" />
                Service 24/7
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Primary CTA */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Appelez Maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <a
              href={companyInfo.whatsapp}
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Téléphone</div>
                <div className="text-red-100">{companyInfo.tele}</div>
              </div>
              <div>
                <MessageCircle className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">WhatsApp</div>
                <div className="text-red-100">Réponse immédiate</div>
              </div>
              <div>
                <Calendar className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Horaires</div>
                <div className="text-red-100">24h/7j disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default CTA;
