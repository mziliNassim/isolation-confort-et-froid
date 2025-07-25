import React from "react";
import { Home, RefreshCw, ArrowLeft } from "lucide-react";

const Notfound = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements for isolation effect */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-red-500/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-400/30 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-600/10 rounded-full blur-xl animate-pulse" />
      </div>

      <div
        className="text-center z-10 max-w-lg mx-auto animate-fade-in"
        style={{
          animation: "fadeIn 0.8s ease-out",
        }}
      >
        {/* 404 Number with isolation effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-blue-400 bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full animate-pulse" />
        </div>

        {/* Title with cold/warm contrast */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="text-blue-300">Lost</span> in the{" "}
          <span className="text-red-400">void</span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          You've wandered into the{" "}
          <span className="text-blue-400 font-medium">cold emptiness</span> of
          isolation.
          <br />
          But there's still{" "}
          <span className="text-red-400 font-medium">warmth</span> to guide you
          home.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleHome}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-red-500/30"
          >
            <Home size={20} />
            Find Warmth
          </button>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-blue-500/30"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-200 shadow-lg border border-slate-500/30 hover:scale-105 hover:shadow-slate-500/30"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Floating comfort elements */}
        <div className="mt-12 text-slate-400 text-sm animate-bounce">
          ❄️ Even in isolation, comfort finds a way ❄️
        </div>
      </div>

      {/* Ambient particles for atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? "bg-red-400/40" : "bg-blue-400/40"
            } blur-sm animate-pulse`}
            style={{
              left: `${20 + i * 10}%`,
              bottom: "10%",
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Notfound;
