"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioContent.json";
import { Mail, Download } from "lucide-react";

export default function Contact() {
  const { email, linkedin, resumeLink } = portfolioData.contact;

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] h-[50vw] bg-blue-900/10 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-6 md:p-16 rounded-[2.5rem] md:rounded-[3rem]"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Great</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
            I'm currently engaged with new opportunities. If you have a question, a project in mind, or just want to discuss product strategy, let's connect.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 md:py-4 bg-white/95 text-black font-semibold rounded-full hover:bg-white transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_4px_14px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_24px_rgba(255,255,255,0.25)] border border-white/20"
            >
              <Mail size={18} />
              Say Hello
            </a>
            
            <div className="flex gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/5 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/5 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                title="Download Resume"
                aria-label="Download Resume"
              >
                <Download size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
