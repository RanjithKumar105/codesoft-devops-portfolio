"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/10 bg-white/80 backdrop-blur-md py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
            AM
          </div>
          <div>
            <p className="text-sm font-black text-black tracking-wide">
              {portfolioData.personal.name}
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
              © {new Date().getFullYear()} All rights reserved. Crafted with Next.js & Tailwind.
            </p>
          </div>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.social.email}
            className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Email Arjun"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 hover:text-black transition-all duration-200 hover:scale-110 ml-1 sm:ml-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
