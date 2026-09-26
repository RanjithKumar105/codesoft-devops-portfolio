"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Brain,
  Code2,
  Globe,
  Cloud,
  Wrench,
  Coffee,
  FileCode2,
  Layout,
  Palette,
  Database,
  Scan,
  Eye,
  Binary,
  Table,
  Cpu,
  BarChart3,
  Atom,
  Server,
  Zap,
  GitBranch,
  Boxes,
  Cog,
  PlayCircle,
  BookOpen,
  Activity,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData, SkillCategory, SkillItem } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal: TerminalIcon,
  Coffee: Coffee,
  FileCode2: FileCode2,
  Layout: Layout,
  Palette: Palette,
  Database: Database,
  Brain: Brain,
  Scan: Scan,
  Eye: Eye,
  Binary: Binary,
  Table: Table,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Atom: Atom,
  Globe: Globe,
  Server: Server,
  Zap: Zap,
  GitBranch: GitBranch,
  Boxes: Boxes,
  Cog: Cog,
  Cloud: Cloud,
  Code2: Code2,
  PlayCircle: PlayCircle,
  BookOpen: BookOpen,
  Wrench: Wrench,
  Activity: Activity,
};

const compileItems = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML5 / CSS3",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git & GitHub",
  "Jenkins",
  "Kubernetes",
  "GitHub Actions",
  "AWS",
  "Linux",
  "Prometheus",
  "Grafana",
];

export default function TerminalSkills() {
  const [phase, setPhase] = useState<"INIT" | "COMPILING" | "SUCCESS" | "READY">("INIT");
  const [typedCommand, setTypedCommand] = useState("");
  const [initLogs, setInitLogs] = useState<string[]>([]);
  const [compiledSkills, setCompiledSkills] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check session storage on mount
  useEffect(() => {
    try {
      const hasInitialized = sessionStorage.getItem("portfolio_skills_initialized");
      if (hasInitialized) {
        setPhase("READY");
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  // Trigger sequence when section scrolls into view
  useEffect(() => {
    if (phase !== "INIT" || !isInView) return;

    let isCancelled = false;

    // Step 1: Type command
    const commandText = "./initialize_portfolio";
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (isCancelled) return;
      if (charIndex <= commandText.length) {
        setTypedCommand(commandText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);

        // Step 1b: Show init logs
        const logs = [
          "Loading Developer Environment...",
          "Connecting AI Knowledge Base...",
          "Loading Programming Stack...",
          "Preparing Technology Modules...",
          "Please wait...",
        ];

        logs.forEach((log, index) => {
          setTimeout(() => {
            if (isCancelled) return;
            setInitLogs((prev) => [...prev, log]);

            if (index === logs.length - 1) {
              // Step 2: Start compilation
              setTimeout(() => {
                if (isCancelled) return;
                setPhase("COMPILING");
              }, 400);
            }
          }, (index + 1) * 200);
        });
      }
    }, 45);

    return () => {
      isCancelled = true;
      clearInterval(typeInterval);
    };
  }, [isInView, phase]);

  // Handle Step 2 (Compiling)
  useEffect(() => {
    if (phase !== "COMPILING") return;

    let isCancelled = false;
    let index = 0;

    const compileInterval = setInterval(() => {
      if (isCancelled) return;

      if (index < compileItems.length) {
        const item = compileItems[index];
        setCompiledSkills((prev) => [...prev, item]);
        setProgress(Math.round(((index + 1) / compileItems.length) * 100));
        index++;
      } else {
        clearInterval(compileInterval);
        setPhase("SUCCESS");

        setTimeout(() => {
          if (isCancelled) return;
          setPhase("READY");
          try {
            sessionStorage.setItem("portfolio_skills_initialized", "true");
          } catch {
            // Ignore storage errors
          }
        }, 800);
      }
    }, 75);

    return () => {
      isCancelled = true;
      clearInterval(compileInterval);
    };
  }, [phase]);

  const handleReplay = () => {
    setPhase("INIT");
    setTypedCommand("");
    setInitLogs([]);
    setCompiledSkills([]);
    setProgress(0);
  };

  const getSkillIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || TerminalIcon;
    return <IconComponent className="w-5 h-5" />;
  };

  const displayedCategories =
    activeCategory === "All"
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Subtle Grid Texture & Ambient Glows */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Engineering Stack"
          title="Skills & Environment"
          subtitle="A battle-tested technology arsenal powering machine learning models and production web architectures."
        />

        {/* Intersection Trigger Tracker */}
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, margin: "-80px" }}
        />

        {/* Dynamic Terminal Area */}
        <div className="mb-12">
          {phase !== "READY" ? (
            /* Large Full Initialization Terminal */
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto rounded-2xl bg-slate-950/90 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden font-mono text-xs sm:text-sm"
            >
              {/* macOS / Linux Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                </div>
                <span className="text-slate-400 text-xs font-semibold tracking-wider">
                  developer@portfolio: ~ (bash)
                </span>
                <div className="w-12" />
              </div>

              {/* Terminal Screen Body */}
              <div className="p-6 space-y-3 min-h-[340px] text-left">
                {/* Command Line */}
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-blue-400 font-bold">developer@portfolio:~$</span>
                  <span className="text-emerald-400 font-bold">{typedCommand}</span>
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
                </div>

                {/* Step 1 Init Logs */}
                {initLogs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-slate-400 flex items-center gap-2"
                  >
                    <span className="text-indigo-400">➜</span>
                    <span>{log}</span>
                  </motion.div>
                ))}

                {/* Step 2 Compilation Checklist */}
                {phase === "COMPILING" || phase === "SUCCESS" ? (
                  <div className="pt-2 space-y-2">
                    <div className="text-amber-400 font-semibold flex items-center gap-2">
                      <span>[COMPILE]</span>
                      <span>Loading core engineering modules...</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                      {compiledSkills.map((skill) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-1.5 text-slate-200 text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-3">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Compilation Progress</span>
                        <span className="font-bold text-emerald-400">{progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 border border-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Step 3 Success */}
                {phase === "SUCCESS" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-2 text-emerald-400 font-bold flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>✓ Compile Successful. System Ready. Launching Dashboard...</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Transformed Floating Permanent Status Terminal */
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Terminal Status Output */}
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <TerminalIcon className="w-5 h-5" />
                </div>
                <div className="font-mono text-left">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                    <span className="text-blue-400">developer@portfolio:~$</span>
                    <span className="text-emerald-400">skills --status</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-[11px] sm:text-xs text-slate-400">
                    <span className="text-emerald-400 font-medium">✓ 27 Skills Loaded</span>
                    <span>•</span>
                    <span>AI Stack Ready</span>
                    <span>•</span>
                    <span>Web Stack Ready</span>
                    <span>•</span>
                    <span>Cloud Ready</span>
                  </div>
                </div>
              </div>

              {/* Replay Terminal Boot Button */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  onClick={handleReplay}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all"
                  title="Re-run terminal environment initialization"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                  Re-initialize Terminal
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Category Filters (Visible when ready) */}
        {phase === "READY" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {[
              "All",
              "Programming Languages",
              "Artificial Intelligence",
              "Web Development",
              "DevOps & Cloud",
              "Tools",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-white text-slate-950 shadow-md shadow-white/10"
                    : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Staggered Spring Skills Grid */}
        {phase === "READY" && (
          <motion.div
            layout
            className="space-y-12 text-left"
          >
            {displayedCategories.map((categoryGroup: SkillCategory, catIdx: number) => (
              <motion.div
                key={categoryGroup.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1, duration: 0.4 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${categoryGroup.color} p-0.5 shadow flex items-center justify-center`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                      {categoryGroup.icon === "Code2" && <Code2 className="w-4 h-4 text-blue-400" />}
                      {categoryGroup.icon === "Brain" && <Brain className="w-4 h-4 text-emerald-400" />}
                      {categoryGroup.icon === "Globe" && <Globe className="w-4 h-4 text-purple-400" />}
                      {categoryGroup.icon === "Cloud" && <Cloud className="w-4 h-4 text-amber-400" />}
                      {categoryGroup.icon === "Wrench" && <Wrench className="w-4 h-4 text-pink-400" />}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {categoryGroup.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    ({categoryGroup.skills.length})
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {categoryGroup.skills.map((skill: SkillItem, skillIdx: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: skillIdx * 0.05,
                      }}
                      whileHover={{ y: -4 }}
                      className="group relative p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Subtle hover gradient glow inside card */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/15 rounded-full blur-xl transition-all pointer-events-none" />

                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          {/* Technology Icon with micro rotation on hover */}
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            {getSkillIcon(skill.icon)}
                          </div>

                          {/* Proficiency Badge */}
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              skill.proficiency === "Core"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : skill.proficiency === "Advanced"
                                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            }`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                          {skill.name}
                        </h4>

                        {/* Skill Description */}
                        <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {/* Footer Category Tag */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                        <span>{categoryGroup.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:animate-ping" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
