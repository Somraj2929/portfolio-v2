import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AIExposure from "@/components/AIExposure";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PortfolioProvider } from "@/context/PortfolioContext";

export default async function Home() {
  const contentUrl = process.env.PORTFOLIO_CONTENT_URL;
  if (!contentUrl) {
    throw new Error("Missing PORTFOLIO_CONTENT_URL env variable");
  }

  const res = await fetch(contentUrl, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error("Failed to fetch portfolio data");
  }
  const portfolioData = await res.json();

  return (
    <PortfolioProvider data={portfolioData}>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <AIExposure />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </PortfolioProvider>
  );
}
