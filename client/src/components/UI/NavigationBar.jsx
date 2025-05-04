import React, { useState, useEffect } from "react";
import { languages, navigation } from "../../assets/data";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";

// assets
import logo from "../../assets/img/ICEF-LOGO.png";

// state
import { setLangue } from "../../features/langueSlice";
import { AlignRight } from "lucide-react";

const NavigationBar = ({}) => {
  const langue = useSelector((state) => state.langue);
  const [active, setActive] = useState(0);
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    const index = navigation.findIndex(
      (link) => link.url === location.pathname
    );
    setActive(index);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed z-40 w-full top-0 right-0 left0 border-gray-200 bg-transparent dark:bg-gray-900 mt-0 md:pt-5"
      >
        <div className="max-w-screen-xl bg-white flex flex-wrap items-center justify-between mx-auto p-4 px-10 w-full md:w-11/12 shadow-sm inset-shadow-2xs shadow-gray-300 dark:shadow-gray-800 rounded-md">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="Flowbite Logo" />
          </a>

          {/* Nav links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation &&
                navigation.map((link, i) => (
                  <li key={link.id}>
                    <Link
                      to={link.url}
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      style={{
                        color: active === i ? "#f35a57" : "black",
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavigationBar;
