"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-10 md:py-16 relative overflow-hidden z-10 w-full">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 px-4 sm:px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            How I Can <span className="text-zinc-600">Help</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto" />
        </motion.div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-5 md:gap-6 px-4 sm:px-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide md:overflow-visible">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] glass-card text-center flex flex-col items-center justify-center min-h-[220px] md:min-h-[250px] w-[80vw] sm:w-[320px] md:w-auto shrink-0 snap-always snap-start shadow-[0_15px_30px_-5px_rgba(3,4,11,0.6)] md:shadow-none"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
