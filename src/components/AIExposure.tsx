"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";
import { Workflow, LineChart, LayoutDashboard } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Workflow: <Workflow className="w-8 h-8 text-blue-400" />,
  LineChart: <LineChart className="w-8 h-8 text-blue-400" />,
  LayoutDashboard: <LayoutDashboard className="w-8 h-8 text-blue-400" />,
};

export default function AIExposure() {
  const portfolioData = usePortfolio();
  const { title, description, useCases } = portfolioData.aiExposure;

  return (
    <section className="py-10 md:py-16 relative z-10 w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 px-4 sm:px-6 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
              <span className="text-gradient-accent">{title}</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400">{description}</p>
          </div>
        </motion.div>

        {/* Carousel Container with padding matching the body so first item aligns, but scrolls beyond */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-5 md:gap-6 px-4 sm:px-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide md:overflow-visible">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] glass-card group w-[80vw] sm:w-[320px] md:w-auto shrink-0 snap-always snap-start shadow-[0_15px_30px_-5px_rgba(3,4,11,0.6)] md:shadow-none"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all duration-300 border border-blue-500/10 group-hover:border-blue-500/30 shadow-inner">
                {iconMap[useCase.icon]}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{useCase.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
