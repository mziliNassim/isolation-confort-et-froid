import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../../utils/data";

const NavigationBar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Reset scroll position to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set active link based on current path
    navigation.map((link, i) => {
      if (window.location.pathname === link.url) {
        setActive(i);
      }
      return null;
    });
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (index, url) => {
    setActive(index);
    setIsOpen(false);
    navigate(url);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed z-50 w-full top-0 transition-all duration-500 bg-white backdrop-blur-xl border-b border-gray-200/20 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between h-14 transition-all duration-300 py-8`}
          >
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-red-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    alt="Logo"
                    className="w-9 h-9 object-cover rounded-full"
                    src="/logo.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-red-600/30 via-red-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
                  ISOLATION
                </span>
                <span className="text-xs text-gray-500 -mt-1 block">
                  Confort & Froid
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2  backdrop-blur-sm rounded-2xl border border-gray-200/50">
                {navigation.map((link, i) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavClick(i, link.url)}
                      className={`px-5 py-2.5 cursor-pointer rounded-xl font-medium transition-all duration-300 relative overflow-hidden group text-black hover:text-gray-700`}
                    >
                      {active === i && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-xl shadow-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span
                        style={{ color: active === i && "black" }}
                        className="relative z-10 flex items-center space-x-2 capitalize"
                      >
                        <span>{link.title}</span>
                        {active === i && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                          />
                        )}
                      </span>
                      {active !== i && (
                        <div className="absolute inset-0 bg-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button & Mobile Menu Button */}
            <div className="hidden lg:hidden items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <button
                  onClick={() => handleNavClick("", "/auth/login")}
                  className="relative cursor-pointer px-6 py-3 font-semibold text-white rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-blue-600 hover:from-red-600 hover:via-red-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 bg-white/20 pointer-events-none" />

                  <span className="relative z-10 flex items-center gap-2">
                    <span>Découvrir</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      ❄
                    </motion.span>
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="lg:hidden cursor-pointer p-3 rounded-2xl bg-gray-100 text-black hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-current mb-1.5 rounded-full transition-all duration-300 origin-center"
                  />
                  <motion.span
                    animate={
                      isOpen
                        ? { opacity: 0, scale: 0 }
                        : { opacity: 1, scale: 1 }
                    }
                    className="w-5 h-0.5 bg-current mb-1.5 rounded-full transition-all duration-300"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white backdrop-blur-xl border-t border-gray-200/20"
            >
              <div className="px-6 py-8 space-y-4">
                {navigation.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(i, link.url)}
                      className={`w-full cursor-pointer text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-between group ${
                        active === i
                          ? "bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-lg transform scale-[1.02]"
                          : "text-black hover:bg-gray-100 hover:scale-[1.01]"
                      }`}
                    >
                      <span className="flex items-center space-x-3 cursor-pointer capitalize">
                        <span>{link.title}</span>
                        {active === i && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </span>
                      <motion.span
                        animate={active === i ? { x: 0 } : { x: -10 }}
                        className={`transition-all duration-300 ${
                          active === i
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100 group-hover:x-0"
                        }`}
                      >
                        →
                      </motion.span>
                    </button>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="hidden pt-6 border-t border-gray-200/30"
                >
                  <button
                    onClick={() => {
                      handleNavClick("", "/auth/login");
                      setIsOpen(false);
                    }}
                    className="w-full cursor-pointer px-5 py-4 text-center font-semibold text-white rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-blue-600 hover:from-red-600 hover:via-red-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Découvrir</span>
                    <span>❄</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop for mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavigationBar;
