"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";
import { Briefcase } from "lucide-react";

export default function Timeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-10 md:py-16 relative w-full overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Professional <span className="text-zinc-600">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-8 md:space-y-12 relative border-l border-white/10 ml-3 md:ml-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-6 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-[-16px] md:left-[-20px] w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#03040b] border-2 border-blue-500/50 text-blue-400 flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Briefcase size={14} className="md:w-4 md:h-4" />
              </div>

              <div className="mb-3 md:mb-4">
                <span className="inline-block px-2.5 py-1 mb-2 md:mb-3 text-[10px] md:text-xs font-bold text-blue-400 tracking-wider uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
                  {job.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">{job.role}</h3>
                <h4 className="text-sm md:text-lg text-zinc-400 font-medium mt-1">{job.company}</h4>
              </div>

              <ul className="mt-3 md:mt-4 space-y-2.5 md:space-y-3">
                {job.impact.map((point, ptIndex) => (
                  <li key={ptIndex} className="flex gap-2.5 md:gap-3 text-zinc-400 text-[13px] md:text-base leading-relaxed">
                    <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
