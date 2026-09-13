"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Package,
  RotateCcw,
  Sparkles,
  Terminal,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function DeliveryTruckSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [isDelivered, setIsDelivered] = useState<boolean>(false);

  // Trigger delivery animation sequence
  useEffect(() => {
    setIsDelivered(false);
    const timer = setTimeout(() => {
      setIsDelivered(true);
    }, 1800); // Truck drives in and parks in ~1.8s
    return () => clearTimeout(timer);
  }, [animationKey]);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Filter skills based on selected category tab
  const displayedCategories =
    activeCategory === "All"
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Interactive Skills Pipeline"
          title="Skills & Technology Stack"
          subtitle="Delivering production-grade algorithms, neural networks, and scalable web architectures."
        />

        {/* Delivery Track & Truck Simulation Area */}
        <div className="relative mb-12 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Warehouse / Terminal Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Automated Tech Stack Dispatcher
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {isDelivered ? "Unloaded & Ready" : "In Transit"}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Visual delivery of engineering competencies into categorized stacks.
                </p>
              </div>
            </div>

            {/* Replay Delivery Button */}
            <button
              onClick={handleReplay}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Replay Delivery
            </button>
          </div>

          {/* Animated Highway / Road Strip */}
          <div className="relative h-28 my-6 flex items-center overflow-hidden">
            {/* Asphalt Highway Lane */}
            <div className="absolute inset-x-0 bottom-4 h-10 bg-slate-950/80 rounded-xl border border-white/5 flex items-center px-4 overflow-hidden">
              <div className="w-full border-t border-dashed border-slate-700/60" />
            </div>

            {/* Animated Modern Tech Truck with Freight Bed */}
            <motion.div
              key={animationKey}
              initial={{ x: "-120%" }}
              animate={{ x: "65%" }}
              transition={{
                duration: 1.8,
                ease: [0.25, 1, 0.5, 1], // Smooth braking curve
              }}
              className="relative z-10 flex items-end"
            >
              {/* Truck Cabin & Freight SVG */}
              <div className="relative flex items-end">
                {/* Freight Container with Tech Logos Glow */}
                <div className="w-36 sm:w-44 h-16 sm:h-20 rounded-t-lg bg-gradient-to-tr from-slate-800 via-slate-800 to-indigo-950/90 border border-indigo-500/40 p-2 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle Freight Striping */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
                  <div className="flex items-center justify-between text-[10px] font-bold text-indigo-300 tracking-wider">
                    <span className="flex items-center gap-1">
                      <Package className="w-3 h-3 text-emerald-400" />
                      STACK-EXPRESS
                    </span>
                    <span className="text-[9px] bg-white/10 px-1 rounded text-slate-300">
                      27 CRATES
                    </span>
                  </div>

                  {/* Crates Stack inside Truck Bed */}
                  <div className="flex gap-1 items-end justify-center py-1">
                    <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-[8px] font-mono text-blue-300">
                      AI
                    </div>
                    <div className="w-6 h-6 rounded bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-[8px] font-mono text-purple-300">
                      JS
                    </div>
                    <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[8px] font-mono text-emerald-300">
                      PY
                    </div>
                  </div>

                  {/* Rear Wheels */}
                  <div className="absolute -bottom-2 left-3 flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 shadow animate-spin" />
                    <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 shadow animate-spin" />
                  </div>
                </div>

                {/* Truck Cabin */}
                <div className="w-14 sm:w-16 h-12 sm:h-14 rounded-tr-xl bg-gradient-to-r from-indigo-600 to-blue-600 border border-blue-400/50 relative shadow-lg flex flex-col justify-end p-1.5">
                  {/* Cabin Window */}
                  <div className="w-7 h-5 rounded-tr bg-cyan-200/40 border border-cyan-100/50 ml-auto mr-1 mb-2 backdrop-blur-sm" />
                  {/* Headlight Beam */}
                  <div className="absolute top-7 -right-1 w-2 h-3 rounded-r bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />
                  {/* Front Wheel */}
                  <div className="absolute -bottom-2 right-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 shadow animate-spin" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {["All", "Programming", "AI & Machine Learning", "Web & Backend", "DevOps & Tools"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-white text-slate-950 shadow-md shadow-white/10"
                      : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        {/* Unloaded Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: catIndex * 0.1, duration: 0.4 }}
                className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${category.color} p-0.5 shadow-md flex items-center justify-center text-slate-950 font-bold`}
                      >
                        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                          {category.icon === "Code2" && <Code2 className="w-4 h-4 text-blue-400" />}
                          {category.icon === "Brain" && <Brain className="w-4 h-4 text-emerald-400" />}
                          {category.icon === "Globe" && <Globe className="w-4 h-4 text-purple-400" />}
                          {category.icon === "Terminal" && <Terminal className="w-4 h-4 text-amber-400" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {category.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Pills Crate Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: isDelivered ? skillIndex * 0.04 : 0.2 + skillIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-default flex items-center gap-1.5 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Verified Competency</span>
                  <Sparkles className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
