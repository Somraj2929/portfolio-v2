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
      <body className="min-h-screen bg-[#03040b] text-white selection:bg-blue-500/30 selection:text-blue-200">
        
        <MouseGlow />
        <CommandMenu />

        {/* Global Premium Background Gradient */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#03040b] to-[#010206] opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
