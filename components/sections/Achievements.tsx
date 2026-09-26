"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Lightbulb, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
    const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hackathon":
        return <Trophy className="w-5 h-5 text-black" />;
      case "Ideathon":
        return <Lightbulb className="w-5 h-5 text-black" />;
      default:
        return <Users className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Honors & Social Impact"
          title="Achievements & Leadership"
          subtitle="Hackathon distinctions, open-source contributions, and college community leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all duration-200 shadow-sm hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-black border border-black/10 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-black" />
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-black text-black group-hover:text-gray-600 transition-colors tracking-tight uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-gray-600 font-bold">
                  {item.organizer} • {item.date}
                </p>

                <p className="mt-3 sm:mt-4 text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-gray-500 font-bold font-mono">
                <span>Category</span>
                <span className="text-black font-black uppercase tracking-wider">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
