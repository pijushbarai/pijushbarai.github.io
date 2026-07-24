"use client";
import React from "react";
import {personalInfo } from "@/data/portfolioData";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900"
    >
      <h2 className="text-2xl font-bold font-mono text-cyan-400 mb-8">
        01. Skills & Expertise
      </h2>

      {/* CP Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {personalInfo.competitiveProgramming.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-mono text-slate-400">
                {item.platform} (handle:{" "}
                <span className="text-cyan-400">{item.handle}</span>)
              </p>
              <p className="text-xl font-bold text-white">
                {item.achievements}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillGroup
          title="AI, Deep Learning & Vision"
          skills={personalInfo.skills.machineLearningAI}
        />
        <SkillGroup
          title="Programming Languages"
          skills={personalInfo.skills.programming}
        />
        <SkillGroup
          title="Software & Web Development"
          skills={personalInfo.skills.softwareDevelopment}
        />
        <SkillGroup title="Tools & Systems" skills={personalInfo.skills.toolsAndOthers} />
      </div>
    </section>
  );
};

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
    <h3 className="text-sm font-mono font-semibold text-slate-300 mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
