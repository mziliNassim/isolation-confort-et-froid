import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { Mail, Send, User, MessageSquare, Loader2 } from "lucide-react";
import { CheckCircle, ExternalLink, Thermometer } from "lucide-react";

import AnimatedSection from "../components/animations/AnimatedSection";
import { socialLinks, contactInfo } from "../utils/data";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message envoyé avec succès !", {
          action: { label: "x" },
        });
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        toast.error("Une erreur s'est produite. Veuillez réessayer.", {
          action: { label: "x" },
        });
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-screen pt-30 bg-white transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 bg-transparent lg:px-8 overflow-hidden">
          {/* Title Section */}
          <AnimatedSection>
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-medium text-sm">
                <Thermometer size={16} className="animate-pulse" />
                <span>Experts en confort thermique</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Contactez Nos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  Spécialistes
                </span>{" "}
              </h1>
              <div className="relative mx-auto">
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Besoin d'un devis ou d'un conseil technique ? Notre équipe
                  d'experts en isolation, froid industriel et climatisation est
                  à votre disposition.
                </p>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:text-red-600 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  aria-label={`Visitez notre page ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Main Content - Split Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Contact Information */}
            <div className="w-full lg:w-2/5 space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 h-full">
                  <h2 className="text-2xl font-bold text-black mb-6">
                    Nos Coordonnées
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 text-white">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-black">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.content}</p>
                          {item.link && (
                            <a
                              href={item.link}
                              className="inline-flex items-center mt-2 text-sm font-medium text-red-600 hover:text-blue-600 transition-colors"
                            >
                              {item.cta}
                              <ExternalLink size={14} className="ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-3/5">
              <AnimatedSection delay={0.3}>
                <div className="bg-white backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200 h-full">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center h-full">
                      <div className="p-6 rounded-full bg-green-100 mb-6 animate-bounce">
                        <CheckCircle size={64} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Message Envoyé avec Succès !
                      </h3>
                      <p className="text-gray-600 max-w-md">
                        Merci de nous avoir contacté. Notre équipe vous répondra
                        dans les plus brefs délais, généralement sous 24-48
                        heures.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="mt-8 px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="text-2xl font-bold text-black mb-2">
                        Envoyez-nous un Message
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Remplissez ce formulaire et nous vous répondrons dès que
                        possible.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-black">
                            Votre Nom
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User
                                size={18}
                                className="text-gray-400 group-focus-within:text-red-500 transition-colors"
                              />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                              placeholder="Jean Dupont"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-black">
                            Adresse Email
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Mail
                                size={18}
                                className="text-gray-400 group-focus-within:text-blue-500 transition-colors"
                              />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                              placeholder="jean.dupont@exemple.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-black">
                          Sujet
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <MessageSquare
                              size={18}
                              className="text-gray-400 group-focus-within:text-blue-500 transition-colors"
                            />
                          </div>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                            placeholder="Demande de devis pour isolation thermique"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-black">
                          Message
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 pt-4 flex items-start pointer-events-none">
                            <Send
                              size={18}
                              className="text-gray-400 group-focus-within:text-blue-500 transition-colors"
                            />
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                            placeholder="Décrivez votre projet ou vos besoins en détail..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center cursor-pointer justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium hover:from-red-600 hover:to-blue-600 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          {loading ? (
                            <span className="animate-spin mr-2">
                              <Loader2 size={18} />
                            </span>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Envoyer la Demande
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
