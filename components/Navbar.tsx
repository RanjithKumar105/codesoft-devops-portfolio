"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ResumeViewer } from "./ResumeViewer";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── NAVBAR BAR (unchanged) ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 rounded-b-3xl w-full ${
          scrolled
            ? "py-3 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "py-5 bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
              AM
            </div>
            <span className="hidden sm:inline font-bold text-white tracking-wide">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 hover:scale-[1.03] ${
                    isActive
                      ? "text-black bg-white"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons — desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-gray-300 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full transition-all duration-200 hover:scale-[1.03] focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-black bg-white hover:bg-gray-200 rounded-full transition-all duration-200 shadow-sm shadow-white/10 hover:scale-[1.03]"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* ── MOBILE RIGHT-SIDE DRAWER (fixed overlay, outside header) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop — tap anywhere outside drawer to close */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[48] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel — slides in from left */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 z-[49] w-[80vw] max-w-[320px] min-w-[260px] bg-black flex flex-col lg:hidden shadow-2xl overflow-hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    AM
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide truncate">
                    {portfolioData.personal.name}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2"
                  aria-label="Close navigation menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation links */}
              <nav
                className="flex-1 overflow-y-auto px-4 py-3 space-y-1"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 min-h-[48px] ${
                        isActive
                          ? "bg-white text-black"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 flex-shrink-0" />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom CTA buttons */}
              <div className="px-4 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3 flex-shrink-0">
                <button
                  onClick={() => {
                    setIsResumeOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 focus:outline-none w-full min-h-[44px] transition-colors uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4 text-white" />
                  View Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 text-xs font-bold text-black bg-white rounded-full hover:bg-gray-200 min-h-[44px] transition-colors uppercase tracking-wider"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Resume Viewer Overlay */}
      <ResumeViewer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={portfolioData.personal.resumeUrl}
      />
    </>
  );
}
