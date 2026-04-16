const fs = require('fs');
const files = [
  'src/components/Skills.tsx',
  'src/components/Timeline.tsx',
  'src/components/Services.tsx',
  'src/components/Projects.tsx',
  'src/components/Navigation.tsx',
  'src/components/Hero.tsx',
  'src/components/Footer.tsx',
  'src/components/Contact.tsx',
  'src/components/About.tsx',
  'src/components/AIExposure.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('const portfolioData = usePortfolio();')) {
    content = content.replace(/export default function\s+[A-Za-z0-9_]+\s*\([^)]*\)\s*\{/g, match => {
      return match + '\n  const portfolioData = usePortfolio();';
    });
    fs.writeFileSync(f, content);
  }
});
console.log('Fixed');
