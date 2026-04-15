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

export default function Home() {
  return (
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
  );
}
