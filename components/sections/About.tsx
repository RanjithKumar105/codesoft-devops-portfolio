"use client";

import React from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Engineering Profile"
          title="About Ranjith Kumar"
          subtitle="A dedicated problem solver engineering intelligent AI systems and high-throughput software architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Two Staggered Glassmorphic Photos with 3D Tilt Hover */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] sm:aspect-square flex items-center justify-center overflow-visible">
              {/* Photo 1: Background Staggered Top-Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-[65%] sm:w-[68%] aspect-[4/5] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-white border border-black/10 shadow-2xl backdrop-blur-xl group overflow-hidden"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/images/about-3.jpeg"
                    alt="Ranjith Kumar in Lab"
                    fallbackText="RK Photo 1"
                    fill
                    sizes="(max-width: 640px) 65vw, (max-width: 1024px) 300px, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      AI & Vision Research
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Photo 2: Foreground Staggered Bottom-Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute bottom-0 right-0 w-[65%] sm:w-[68%] aspect-[4/5] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-white border border-black/10 shadow-2xl backdrop-blur-xl group overflow-hidden z-10"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/images/about-2.jpeg"
                    alt="Ranjith Kumar"
                    fallbackText="Ranjith Kumar"
                    fill
                    sizes="(max-width: 640px) 65vw, (max-width: 1024px) 300px, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Full Stack Systems
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Center Decorative Accent Orb */}
              <div className="w-32 h-32 rounded-full bg-black opacity-10 blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Bio Narrative & Stats Grid */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                Engineering at the Intersection of{" "}
                <span className="block text-gray-600">
                  Machine Learning & Production Code
                </span>
              </h3>

              {portfolioData.personal.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {portfolioData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-3 sm:p-4 rounded-2xl bg-black/5 border border-black/10 hover:border-black/30 transition-all duration-200 group hover:shadow-sm"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black group-hover:text-gray-600 transition-colors">
                    {stat.value}
                    <span className="text-xs font-bold text-gray-500 ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-black mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-[11px] font-medium text-gray-600 mt-0.5 leading-snug">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
