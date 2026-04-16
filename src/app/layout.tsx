import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import CommandMenu from "@/components/CommandMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somraj | Product Manager",
  description: "Portfolio of Somraj, a Product Manager specializing in AI, Data Analytics, and Strategic Execution.",
  openGraph: {
    title: "Somraj | Product Manager",
    description: "Portfolio of Somraj, a Product Manager specializing in AI, Data Analytics, and Strategic Execution.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somraj | Product Manager",
    description: "Portfolio of Somraj, a Product Manager specializing in AI, Data Analytics, and Strategic Execution.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#060810] text-white selection:bg-blue-500/30 selection:text-blue-200">
        
        <MouseGlow />
        <CommandMenu />

        {/* Global Premium Background with Texture and Gradient */}
        <div className="fixed inset-0 z-[[-1]] pointer-events-none">
          <div className="absolute inset-0 bg-[#060810]" />
          {/* Subtle colored ambient glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0C14] to-[#05060A] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent opacity-80" />
          {/* Subtle Noise Texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
          ></div>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
