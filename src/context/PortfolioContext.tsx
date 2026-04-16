"use client";

import React, { createContext, useContext } from "react";

export interface PortfolioDataType {
  hero: {
    name: string;
    title: string;
    valueProposition: string;
    ctaText: string;
  };
  about: {
    intro: string;
    philosophy: string;
    strengths: string[];
  };
  skills: {
    categories: Array<{
      title: string;
      items: string[];
    }>;
  };
  aiExposure: {
    title: string;
    description: string;
    useCases: Array<{
      title: string;
      description: string;
      icon: string;
      tag: string;
    }>;
  };
  projects: Array<{
    title: string;
    tagline: string;
    problem: string;
    approach: string;
    impact: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    link: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
  experience: Array<{
    role: string;
    company: string;
    period: string;
    context: string;
    impact: string[];
  }>;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resumeLink: string;
  };
}

const PortfolioContext = createContext<PortfolioDataType | null>(null);

export function PortfolioProvider({ children, data }: { children: React.ReactNode, data: PortfolioDataType }) {
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
