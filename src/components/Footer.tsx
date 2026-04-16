"use client";
import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
  const portfolioData = usePortfolio();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-zinc-500 text-sm flex items-center justify-center gap-2">
          © {currentYear} {portfolioData.hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
