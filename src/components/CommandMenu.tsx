"use client";

import { useEffect, useState } from "react";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03040b]/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#060813]/90 p-4 shadow-2xl backdrop-blur-xl"
        autoFocus
        tabIndex={-1}
      >
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
          <p className="text-sm font-semibold text-blue-400">Command Palette</p>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 text-xs font-mono bg-white/5 rounded border border-white/10 text-white/50">ESC</kbd>
            <p className="text-xs text-white/30">to close</p>
          </div>
        </div>
        <div className="space-y-2">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigate(link.id)}
              className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 border border-transparent transition-all focus:outline-none focus:bg-white/10 group text-white/80 hover:text-white"
            >
              <span>{link.name}</span>
              <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Jump to <span className="text-[10px]">→</span>
              </span>
            </button>
          ))}
          <a
            href="mailto:contact@example.com"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 border border-transparent transition-all focus:outline-none focus:bg-white/10 group text-white/80 hover:text-white mt-4 border-t border-white/5 pt-4"
          >
            <span>Email Me</span>
            <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Jump to <span className="text-[10px]">→</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
