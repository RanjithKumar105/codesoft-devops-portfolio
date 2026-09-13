"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { portfolioData } from "@/data/portfolio";

const titles = [
  "AI & ML Engineer",
  "Machine Learning Enthusiast",
  "Full Stack Developer",
  "Autonomous Systems Builder",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullText) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
    >
      {/* Background Grid Pattern & Subtle Monochrome Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gray-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Network Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20 hidden md:block">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="4" fill="black" />
          <circle cx="80%" cy="70%" r="6" fill="black" />
          <circle cx="70%" cy="20%" r="3" fill="black" />
          <line x1="20%" y1="30%" x2="70%" y2="20%" stroke="black" strokeWidth="0.5" />
          <line x1="70%" y1="20%" x2="80%" y2="70%" stroke="black" strokeWidth="0.5" />
          <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="black" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Intro & Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 shadow-sm max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span className="text-[9px] sm:text-xs font-bold text-gray-800 uppercase tracking-widest leading-tight break-words">
              {portfolioData.personal.availability}
            </span>
          </div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-black uppercase leading-[1.05]">
              Hi, I&apos;m{" "}
              <span className="block">
                {portfolioData.personal.name}
              </span>
            </h1>
            {/* Typewriter Row */}
            <div className="min-h-[2.25rem] sm:h-12 w-full flex items-center justify-center lg:justify-start mt-3 sm:mt-4 overflow-hidden">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black uppercase tracking-tight leading-tight break-words min-w-0">
                {displayedText}
              </span>
              <span className="w-0.5 sm:w-1 h-5 sm:h-7 ml-1.5 sm:ml-2 bg-black animate-pulse inline-block flex-shrink-0" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-5 py-2.5 sm:py-3 text-sm font-bold text-black border border-black hover:bg-black/5 rounded-full transition-all duration-200 hover:scale-[1.03] hover:-translate-y-0.5"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social Icons Quick Row */}
          <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-gray-500">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black/[0.03] hover:bg-black/[0.08] border border-black/[0.08] hover:text-black transition-all duration-200 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black/[0.03] hover:bg-black/[0.08] border border-black/[0.08] hover:text-black transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.social.email}
              className="p-2.5 rounded-full bg-black/[0.03] hover:bg-black/[0.08] border border-black/[0.08] hover:text-black transition-all duration-200 hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="h-4 w-px bg-black/20 mx-0.5 sm:mx-1" />
            <span className="text-[10px] sm:text-xs text-black font-bold uppercase tracking-wider">
              SIT Mangaluru &apos;27 • AI & ML
            </span>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Image with Floating Monochrome Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative group">
            {/* Animated Glow Ring Behind Image */}
            <div className="absolute -inset-1.5 rounded-full bg-gray-200 opacity-60 group-hover:opacity-100 blur-md transition duration-500 animate-spin-slow" />

            {/* Circular Floating Container */}
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-white border-2 border-black shadow-2xl animate-float overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden relative group-hover:scale-105 transition-transform duration-500 bg-gray-100">
                <ImageWithFallback
                  src={portfolioData.personal.images.heroImage}
                  alt={portfolioData.personal.name}
                  fallbackText="Ranjith Kumar"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Floating Experience / Tech Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:bottom-4 sm:-left-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-black border-2 border-black shadow-xl flex items-center gap-2 sm:gap-2.5 whitespace-nowrap"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  Academic Focus
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-white">
                  B.E. AI & ML (CGPA 8.53)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About Section" className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 hidden sm:block">Scroll</span>
          <ChevronDown className="w-5 h-5 text-black animate-bounce" />
        </a>
      </div>
    </section>
  );
}
