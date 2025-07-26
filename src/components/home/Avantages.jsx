import React from "react";
import { Shield, Clock, Award, Wrench, Thermometer, Leaf } from "lucide-react";
import AnimatedSection from "../animations/AnimatedSection";
import { companyInfo } from "../../utils/data";

const Avantages = () => {
  const avantages = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Expertise Professionnelle",
      description:
        "Plus de 10 ans d'expérience dans l'isolation thermique et la climatisation avec une équipe certifiée.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Intervention Rapide",
      description:
        "Service d'urgence 24h/7j pour vos pannes de climatisation et problèmes d'isolation.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Garantie Qualité",
      description:
        "Tous nos travaux sont garantis avec des matériaux de première qualité et conformes aux normes.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-red-600" />,
      title: "Installation Complète",
      description:
        "De l'étude technique à la mise en service, nous prenons en charge votre projet de A à Z.",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-purple-600" />,
      title: "Économies d'Énergie",
      description:
        "Réduisez vos factures énergétiques grâce à nos solutions d'isolation et climatisation efficaces.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Solutions Écologiques",
      description:
        "Matériaux respectueux de l'environnement et systèmes à haute performance énergétique.",
    },
  ];

  return (
    <section className="w-full md:w-10/12 mx-auto py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-red-100 dark:bg-red-900/30 text-[#f35a57]">
            <Wrench size={16} />
            <span className="font-medium">Nos Avantages</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages qui font de nous votre partenaire de
            confiance pour tous vos besoins en isolation thermique et
            climatisation.
          </p>
        </AnimatedSection>

        {/* Avantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avantages.map((avantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 rounded-lg p-3 mr-4">
                  {avantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {avantage.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {avantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {companyInfo.infos.projects.count}
              </div>
              <div className="text-gray-600 capitalize">
                {companyInfo.infos.projects.desc}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {companyInfo.infos.experience.count}
              </div>
              <div className="text-gray-600 capitalize">
                {companyInfo.infos.experience.desc}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
                {companyInfo.infos.services.count}
              </div>
              <div className="text-gray-600 capitalize">
                {companyInfo.infos.services.desc}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {companyInfo.infos.clients.count}
              </div>
              <div className="text-gray-600 capitalize">
                {companyInfo.infos.clients.desc}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-medium">Entreprise Certifiée & Assurée</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
