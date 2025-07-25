import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// State
import { setLangue } from "./features/langueSlice.js";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Notfound from "./pages/Notfound.jsx";

// Components
import NavigationBar from "./components/UI/NavigationBar";
import Foorter from "./components/UI/Foorter.jsx";
import Loading from "./components/UI/Loading.jsx";
import ScroleToTop from "./components/UI/ScroleToTop.jsx";
import Socials from "./components/UI/Socials.jsx";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  // Check language settings in localStorage
  useEffect(() => {
    try {
      setLoading(true);
      const langue = localStorage.getItem("langue");
      dispatch(setLangue(langue !== null ? parseInt(langue, 10) : 0));
    } catch (error) {
      toast.error("Failed to load language preferences");
      console.error("Error setting language:", error);
      dispatch(setLangue(0));
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  if (loading) return <Loading />;

  return (
    <div className={theme}>
      <div className="min-h-screen transition-colors bg-white dark:bg-gray-900 duration-200">
        {/* Alert & Load */}
        <Toaster theme={theme} />

        {/* Components */}
        <NavigationBar />
        <Socials />
        <ScroleToTop />

        {/* Pages / Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <Foorter />
      </div>
    </div>
  );
};

export default App;
