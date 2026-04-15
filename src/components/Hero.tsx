"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { name, title, valueProposition, ctaText } = portfolioData.hero;

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-24 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-[900px] max-h-[900px] bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-indigo-900/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center mt-6 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-[10px] md:text-xs tracking-widest uppercase mb-4 md:mb-6"
          >
            {title}
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 md:mb-6 text-gradient font-sans">
            Hi, I'm {name}.
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            {valueProposition}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto group relative px-8 py-3.5 md:py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                {ctaText}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 font-semibold text-white border border-white/10 rounded-full glass hover:border-white/30 transition-colors flex justify-center"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 text-zinc-600 flex flex-col items-center gap-1 md:gap-2"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="md:w-[18px] md:h-[18px]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
