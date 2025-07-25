import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const ScroleToTop = () => {
  const [visibleToTop, setVisibleToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisibleToTop(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-50 cursor-pointer bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500  text-white flex items-center justify-center shadow-lg hover:bg-[#d03c39] transition-all duration-300"
      aria-label="Retour en haut"
      style={{ display: visibleToTop ? "flex" : "none" }}
    >
      <ArrowRight size={20} className="transform rotate-270" />
    </button>
  );
};

export default ScroleToTop;
