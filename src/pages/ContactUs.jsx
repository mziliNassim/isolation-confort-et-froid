import React, { useState } from "react";
import { socialLinks, contactInfo } from "../utils/data";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { CheckCircle, ExternalLink, Thermometer } from "lucide-react";
import AnimatedSection from "../components/animations/AnimatedSection";

const ContactUs = () => {
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
    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Reset form after successful submission
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      {/* <div className="h-16"></div> */}
      <div className="min-h-screen pt-30 bg-white transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 bg-transparent lg:px-8 overflow-hidden">
          <div className="flex flex-col gap-12 relative z-10">
            {/* Title Section with animated underline */}
            <AnimatedSection>
              <div className="space-y-4 text-center max-w-3xl mx-auto">
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
                    d'experts en isolation, froid industriel et climatisation
                    est à votre disposition.
                  </p>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center gap-4">
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

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {contactInfo.map((item, index) => (
                <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                  <div className="flex flex-col items-center h-full text-center gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} />
                    </div>
                    <div className="space-y-2 w-full h-full flex flex-col justify-center items-center">
                      <div className="font-bold text-lg text-black">
                        {item.title}
                      </div>
                      <div className="text-gray-600">{item.content}</div>
                      <a
                        href={item.link}
                        className="inline-flex items-center mt-2 text-sm font-medium text-red-600 hover:text-blue-600 transition-colors"
                      >
                        {item.cta}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <div
                id="map-container"
                className="w-full h-[80vh] max-h-[700px] rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-all duration-1000"
              >
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13588.234685811303!2d-8.032422431706985!3d31.632243920655352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9374acc0a5%3A0xd267411d65fc67d0!2sGare%20Oncf!5e0!3m2!1sen!2sus!4v1746445239871!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marseille Map"
                    className="filter"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border-8 border-white/20 rounded-xl"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form with enhanced UI */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
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
                        className="mt-8 px-6 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-black mb-2">
                          Demande de Devis ou d'Information
                        </h3>
                        <p className="text-gray-600">
                          Besoin d'un service d'isolation, frigorifique ou de
                          climatisation ? Remplissez le formulaire et un expert
                          vous contactera rapidement.
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-2">
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
                        <div className="flex-1 space-y-2">
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
                          className="inline-flex items-center cursor-pointer justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium hover:from-red-600 hover:to-blue-600 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <Send size={18} className="mr-2" />
                          Envoyer la Demande
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
