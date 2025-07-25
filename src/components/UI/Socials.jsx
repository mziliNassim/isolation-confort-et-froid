import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../../utils/data";
import { X, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 100,
    },
  },
};

const Socials = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="fixed bottom-10 xl:left-2 2xl:left-10 z-50 hidden xl:flex flex-col items-center gap-2">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="flex flex-col items-center justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white p-2 rounded-full shadow-lg transition-colors duration-300"
                  style={{
                    backgroundColor: link.color || "#1DA1F2",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95, rotate: -5 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer text-black bg-white p-2 rounded-full shadow-lg mt-3 hover:bg-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isVisible ? (
            <X className="w-5 h-5 " />
          ) : (
            <ChevronRight className="w-5 h-5 " />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default Socials;
