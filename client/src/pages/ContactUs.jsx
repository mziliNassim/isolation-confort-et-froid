import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { socialLinks, contactInfo } from "../assets/data";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Sparkles,
  ExternalLink,
  Thermometer,
} from "lucide-react";

const AnimatedSection = ({ children, delay = 0 }) => {
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
    <div className="min-h-screen mt-30 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col gap-12 relative z-10">
          {/* Title Section with animated underline */}
          <AnimatedSection>
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-[#ffe2e2] dark:bg-purple-900/30 text-[#f35a57] font-medium text-sm">
                <Thermometer size={16} className="animate-pulse" />
                <span>Experts en confort thermique</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Contactez Nos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f35a57] to-[#f35a1f] dark:from-[#f35a57] dark:to-[#f35a1f]">
                  Spécialistes
                </span>{" "}
              </h1>

              <div className="relative mx-auto">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Besoin d'un devis ou d'un conseil technique ? Notre équipe
                  d'experts en isolation, froid industriel et climatisation est
                  à votre disposition.
                </p>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-[#f35a57] to-[#f35a1f] rounded-full animate-pulse"></div>
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
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#f35a57] hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-purple-100 dark:border-purple-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#f35a57] to-[#d15856] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {item.content}
                    </div>
                    <a
                      href={item.link}
                      className="inline-flex items-center mt-2 text-sm font-medium text-[#f35a57] hover:text-[#ff6360] dark:hover:text-purple-300 transition-colors"
                    >
                      {item.cta}
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Google Map with animation */}
          <AnimatedSection delay={0.3}>
            <div
              id="map-container"
              className="w-full h-[80vh] max-h-[700px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transition-all duration-1000"
            >
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107081.50900638546!2d5.336014535598603!3d43.296174403835585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille%2C%20France!5e0!3m2!1sen!2sus!4v1720354800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marseille Map"
                  className="filter dark:brightness-75 dark:contrast-125"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-8 border-white/20 dark:border-gray-800/30 rounded-xl"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form with enhanced UI */}
          <AnimatedSection delay={0.4}>
            <div className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-purple-100 dark:border-purple-900/30">
              <div className="max-w-4xl mx-auto">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="p-6 rounded-full bg-green-100 dark:bg-green-900/30 mb-6 animate-bounce">
                      <CheckCircle
                        size={64}
                        className="text-green-600 dark:text-green-400"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Message Envoyé avec Succès !
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md">
                      Merci de nous avoir contacté. Notre équipe vous répondra
                      dans les plus brefs délais, généralement sous 24-48
                      heures.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-8 px-6 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Demande de Devis ou d'Information
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Besoin d'un service d'isolation, frigorifique ou de
                        climatisation ? Remplissez le formulaire et un expert
                        vous contactera rapidement.
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Votre Nom
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User
                              size={18}
                              className="text-gray-400 group-focus-within:text-[#f35a57] transition-colors"
                            />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#f35a57] focus:border-transparent outline-none transition-all duration-200"
                            placeholder="Jean Dupont"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Adresse Email
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail
                              size={18}
                              className="text-gray-400 group-focus-within:text-[#3b82f6] transition-colors"
                            />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all duration-200"
                            placeholder="jean.dupont@exemple.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Sujet
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MessageSquare
                            size={18}
                            className="text-gray-400 group-focus-within:text-[#3b82f6] transition-colors"
                          />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all duration-200"
                          placeholder="Demande de devis pour isolation thermique"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 pt-4 flex items-start pointer-events-none">
                          <Send
                            size={18}
                            className="text-gray-400 group-focus-within:text-[#3b82f6] transition-colors"
                          />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent outline-none transition-all duration-200 resize-none"
                          placeholder="Décrivez votre projet ou vos besoins en détail..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center cursor-pointer justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f35a57] to-[#ab3b39] text-white font-medium hover:from-[#f64d4a] hover:to-[#a03938] focus:ring-2 focus:ring-[#fdb5b4] focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
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
  );
};

export default ContactUs;
