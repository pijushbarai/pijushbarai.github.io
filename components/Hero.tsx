"use client";
import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800 rounded-full">
          AI & NLP Researcher
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
          {personalInfo.bio}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#research"
            className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            View Research & Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 font-semibold rounded-lg hover:bg-slate-900 transition-all text-slate-300 hover:animate-pulse hover:text-cyan-400"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-cyan-500/30 p-2 bg-slate-900">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
