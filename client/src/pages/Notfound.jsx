import React, { useState, useEffect } from "react";
import { Home, RefreshCw, ArrowLeft } from "lucide-react";
import { Toaster, toast } from "sonner";
import logo from "../assets/img/ICEF-LOGO.png";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: "#f35a57",
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              transform: `translate(-50%, -50%)`,
              animation: `float ${
                Math.random() * 20 + 10
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-12 mx-auto text-center">
        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* 404 header */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl font-bold text-[#f35a57]">404</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h1>

            <p className="text-gray-600 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Messages and actions */}
          <div className="space-y-8">
            <div className="bg-[#f35a57]/10 border-l-4 border-[#f35a57] p-4 text-left rounded-r-lg">
              <p className="text-gray-700">
                We couldn't find the page you were looking for. Don't worry, we
                can help you find your way back.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-[#f35a57] hover:bg-[#f35a57]/90 text-white rounded-lg px-6 py-3 transition-all shadow-sm hover:shadow"
              >
                <Home size={18} />
                Go Home
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg px-6 py-3 transition-all shadow-sm hover:shadow"
              >
                <RefreshCw size={18} />
                Try Again
              </button>

              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg px-6 py-3 transition-all shadow-sm hover:shadow"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} ICEF. All rights reserved.
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default Notfound;
