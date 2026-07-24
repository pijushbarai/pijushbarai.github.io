"use client";
import React from "react";
import { personalInfo } from "@/data/portfolioData";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900"
    >
      <h2 className="text-2xl font-bold font-mono text-cyan-400 mb-8">
        03. Education & Test Scores
      </h2>

      {/* Degrees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {personalInfo.education.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3"
          >
            <span className="text-xs font-mono text-cyan-400">
              {edu.field} | {edu.duration}
            </span>
            <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
            <p className="text-sm text-slate-400">{edu.institution}</p>
            <p className="text-xs font-mono text-slate-300">
              CGPA: <span className="text-cyan-400 font-bold">{edu.cgpa}</span>
            </p>

            {edu.selectedCourses && (
              <div className="pt-2">
                <p className="text-xs font-mono text-slate-400 mb-2">
                  Key Coursework:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.selectedCourses.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Test Scores */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
        <h3 className="text-sm font-mono font-semibold text-slate-200 mb-4">
          Standardized Test Scores
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="font-bold text-cyan-400">
              GRE ({personalInfo.testScores.gre.date})
            </p>
            <p className="text-xs text-slate-300">
              Quantitative Reasoning:{" "}
              <strong className="text-white">
                {personalInfo.testScores.gre.quant}
              </strong>
            </p>
            <p className="text-xs text-slate-300">
              Analytical Writing:{" "}
              <strong className="text-white">
                {personalInfo.testScores.gre.analyticalWriting}
              </strong>
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-cyan-400">
              TOEFL iBT (Total: {personalInfo.testScores.toefl.totalScore}) - {personalInfo.testScores.toefl.date}
            </p>
            <p className="text-xs text-slate-300">
              Reading: {personalInfo.testScores.toefl.reading} | Listening:{" "}
              {personalInfo.testScores.toefl.listening} | Speaking:{" "}
              {personalInfo.testScores.toefl.speaking} | Writing:{" "}
              {personalInfo.testScores.toefl.writing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
