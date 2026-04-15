"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";

export default function About() {
  const { intro, philosophy, strengths } = portfolioData.about;

  return (
    <section id="about" className="py-10 md:py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            About <span className="text-zinc-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 md:space-y-6 text-base md:text-lg text-zinc-400"
          >
            <p className="leading-relaxed">{intro}</p>
            <div className="p-5 md:p-6 rounded-2xl glass border-l-4 border-l-blue-500 shadow-lg">
              <p className="italic text-sm md:text-base text-zinc-300">"{philosophy}"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-zinc-200">Key Strengths</h3>
            <div className="space-y-3 md:space-y-4">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl glass-card transition-all"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm md:text-base">
                    {index + 1}
                  </div>
                  <span className="font-medium text-sm md:text-base text-zinc-200">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
