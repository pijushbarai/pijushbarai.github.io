"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export const Projects = () => {
  return (
    <section
      id="research"
      className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900"
    >
      <h2 className="text-2xl font-bold font-mono text-cyan-400 mb-8">
        02. Research & Projects
      </h2>

      <div className="space-y-12">
        {personalInfo.researchProjects.map((project, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
          >
            {/* Project Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
                <Image
                  src="/images/rice-detection.png"
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-cyan-400">
                {project.role}
              </span>

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <div className="inline-block rounded-lg border border-green-600 bg-green-900/20 px-3 py-1 text-sm font-semibold text-green-400">
                {project.accuracy}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded border border-cyan-800/50 bg-cyan-950/80 px-3 py-1 text-xs font-mono text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}