// src/components/Contact.tsx
"use client";
import React from "react";
import { personalInfo } from "@/data/portfolioData";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900 text-center space-y-6"
    >
      <h2 className="text-2xl font-bold font-mono text-cyan-400">
        04. Get In Touch
      </h2>
      <p className="text-slate-400 max-w-xl mx-auto text-sm">
        I am currently looking for research opportunities, collaboration, and
        industry roles in NLP and Large Language Models.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
};

// src/components/Footer.tsx
export const Footer = () => (
  <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
    Designed & Built by Pijush Barai
  </footer>
);
