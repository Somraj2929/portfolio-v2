export default function TechMarquee() {
  const tools = [
    "Product Strategy", "Next.js", "Python", "SQL", "React", "TypeScript", 
    "Figma", "Data Analytics", "Agile", "Tableau", "PowerBI", "Machine Learning",
    "Generative AI", "User Research", "A/B Testing", "Jira"
  ];

  return (
    <section className="relative flex w-full overflow-hidden bg-black/20 border-y border-white/5 py-10 mt-12 mb-20 whitespace-nowrap">
      <div className="absolute top-0 left-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#03040b] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#03040b] to-transparent pointer-events-none" />

      <div className="animate-marquee flex gap-16 sm:gap-24 pl-16 sm:pl-24 group">
        {[...tools, ...tools].map((tool, index) => (
          <span 
            key={index} 
            className="text-xl sm:text-2xl font-medium text-white/20 tracking-wider hover:text-blue-400 transition-colors duration-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
