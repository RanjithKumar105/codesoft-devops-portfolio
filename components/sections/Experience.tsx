"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Work History"
          title="Industry Experience"
          subtitle="Hands-on internship experience in containerized deployments, CI/CD automation, and cloud infrastructure."
        />

        <div className="relative border-l-2 border-black/15 ml-3 sm:ml-8 space-y-8 sm:space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[13px] sm:-left-3.5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md shadow-black/10">
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
              </div>

              {/* Experience Card */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all duration-200 shadow-sm hover:shadow-md group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black group-hover:text-gray-600 transition-colors uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-black/5 text-gray-800 border border-black/10">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-medium">
                  <span className="font-bold text-black">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {exp.description}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/5 border border-black/10 text-xs font-bold text-gray-800"
                    >
                      <CheckCircle2 className="w-3 h-3 text-black" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
