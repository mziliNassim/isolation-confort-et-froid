import React from "react";
import { socialLinks } from "../../utils/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-8 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        {/* <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition-transform duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div> */}

        {/* Copyright */}
        <p className="text-sm text-center">
          &copy; {currentYear}{" "}
          <a href="/" className="underline italic">
            Isolation Confort & Froid - ICF
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
