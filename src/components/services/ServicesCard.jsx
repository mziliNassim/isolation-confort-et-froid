import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServicesCard = ({ service, index, isActive, onHover }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      className={`group relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        isActive === index ? "border-red-500 shadow-red-100" : "border-gray-200"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isActive === index
            ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
            : "bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:text-white"
        }`}
      >
        <service.icon size={28} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <CheckCircle
                size={16}
                className="text-green-500 mr-2 flex-shrink-0"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* <div className="pt-4 border-t border-gray-100">
          <button className="inline-flex items-center text-red-600 hover:text-blue-600 font-medium transition-colors group">
            En savoir plus
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div> */}
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${
          isActive === index ? "opacity-100" : ""
        }`}
      />
    </motion.div>
  );
};

export default ServicesCard;
