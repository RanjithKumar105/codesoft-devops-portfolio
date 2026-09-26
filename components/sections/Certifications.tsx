"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Brain, Cloud, Code, Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return <Cloud className="w-5 h-5 text-black" />;
      case "Code":
        return <Code className="w-5 h-5 text-black" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-black" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-black" />;
      default:
        return <Award className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Credentials & Mastery"
          title="Professional Certifications"
          subtitle="Accredited demo certifications in Cloud Computing, Docker, Kubernetes, and Git essentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-black/10 hover:border-black/25 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(cert.icon)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-gray-600 border border-black/5">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base md:text-lg font-black text-black group-hover:text-gray-600 transition-colors tracking-tight uppercase leading-tight">
                  {cert.name}
                </h3>

                <p className="mt-1.5 text-xs text-gray-600 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-black" />
                  Issued by {cert.issuer}
                </p>
              </div>

              {cert.url && (
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 flex items-center justify-between gap-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-black transition-colors"
                  >
                    Verify Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 font-bold">
                    Official Issuer
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
