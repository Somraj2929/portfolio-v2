"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const portfolioData = usePortfolio();
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-10 md:py-16 relative z-10 w-full overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Featured <span className="text-zinc-600">Work</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-6 lg:gap-12 p-6 md:p-12 rounded-[2rem] glass-card"
            >
              <div className="flex-1 space-y-4 md:space-y-6 z-10">
                <div>
                  <h4 className="text-blue-400 font-medium mb-1 md:mb-2 text-[11px] md:text-sm tracking-widest uppercase">{project.tagline}</h4>
                  <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">{project.title}</h3>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h5 className="text-[10px] md:text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1">Problem</h5>
                    <p className="text-zinc-400 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] md:text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1">Approach</h5>
                    <p className="text-zinc-400 text-sm">{project.approach}</p>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <h5 className="text-[10px] md:text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Impact</h5>
                    <p className="text-blue-100 font-medium text-sm md:text-base">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/4 flex flex-row md:flex-col justify-end items-center md:items-end z-10 mt-2 md:mt-0">
                <a
                  href={project.link}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:border-blue-400 md:group-hover:scale-110 transition-all duration-300"
                >
                  <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
