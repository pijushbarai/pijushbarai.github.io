"use client";
import React from "react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg text-cyan-400">
          PB<span className="text-slate-400"></span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#research" className="hover:text-cyan-400 transition-colors">
            Research
          </a>
          <a
            href="#education"
            className="hover:text-cyan-400 transition-colors"
          >
            Education
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-mono font-semibold text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all"
        >
          Resume PDF
        </a>
      </div>
    </header>
  );
};
