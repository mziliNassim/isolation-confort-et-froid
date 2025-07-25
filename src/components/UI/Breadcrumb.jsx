import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ link }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/home">Accueil</Link>
        <span>/</span>
        <span className="text-black">{link}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
