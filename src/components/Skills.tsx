"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";

export default function Skills() {
  const { categories } = portfolioData.skills;

  return (
    <section id="skills" className="py-10 md:py-16 relative overflow-hidden z-10 w-full">
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Core <span className="text-zinc-600">Competencies</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem]"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {categories.map((category, catIndex) => (
              <div key={category.title} className="relative">
                {catIndex !== 0 && <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-white/5" />}
                {catIndex !== 0 && <div className="md:hidden absolute -top-4 left-0 right-0 h-px bg-white/5" />}
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-zinc-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500/80" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-white/[0.03] border border-white/5 rounded-lg text-[11px] md:text-xs font-medium text-zinc-300 pointer-events-none shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
