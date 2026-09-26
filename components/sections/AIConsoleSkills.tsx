"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  MouseEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    id: "programming",
    name: "Programming",
    label: "LANG",
    color: "#000000",
    glow: "rgba(0,0,0,0.15)",
    iconEmoji: "{ }",
    skills: [
      { name: "Python", desc: "Scripting & automation" },
      { name: "JavaScript", desc: "Full-stack scripting" },
      { name: "TypeScript", desc: "Type-safe development" },
      { name: "HTML5", desc: "Semantic markup" },
      { name: "CSS3", desc: "Responsive styling" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    label: "UI",
    color: "#444444",
    glow: "rgba(0,0,0,0.15)",
    iconEmoji: "</>",
    skills: [
      { name: "React", desc: "Component-driven UI" },
      { name: "Next.js", desc: "Full-stack React framework" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    label: "API",
    color: "#111111",
    glow: "rgba(0,0,0,0.15)",
    iconEmoji: "[ ]",
    skills: [
      { name: "Node.js", desc: "Server-side JS runtime" },
      { name: "Express.js", desc: "REST API framework" },
      { name: "MongoDB", desc: "NoSQL document database" },
      { name: "PostgreSQL", desc: "Relational database" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    label: "OPS",
    color: "#333333",
    glow: "rgba(0,0,0,0.15)",
    iconEmoji: ">>",
    skills: [
      { name: "Git & GitHub", desc: "Version control" },
      { name: "Docker", desc: "Container orchestration" },
      { name: "Jenkins", desc: "CI/CD automation" },
      { name: "Kubernetes", desc: "Container management" },
      { name: "GitHub Actions", desc: "Workflow automation" },
      { name: "AWS", desc: "Cloud infrastructure" },
      { name: "Linux", desc: "Server administration" },
      { name: "Prometheus", desc: "Metrics & alerting" },
      { name: "Grafana", desc: "Data dashboards" },
    ],
  },
];

const BOOT_LINES = [
  { text: "developer@portfolio:~$ boot --developer-profile", type: "cmd", delay: 0 },
  { text: "", type: "blank", delay: 250 },
  { text: "Initializing Portfolio Engine...", type: "info", delay: 400 },
  { text: "Loading AI Core........................ ✓", type: "success", delay: 650 },
  { text: "Loading Frontend Engine.............. ✓", type: "success", delay: 880 },
  { text: "Loading Backend Modules.............. ✓", type: "success", delay: 1100 },
  { text: "Loading DevOps Toolkit............... ✓", type: "success", delay: 1300 },
  { text: "", type: "blank", delay: 1450 },
  { text: "Checking System Integrity...", type: "info", delay: 1550 },
  { text: "████████████████████ 100%", type: "progress", delay: 1850 },
  { text: "", type: "blank", delay: 2100 },
  { text: "✦ System Ready", type: "ready", delay: 2200 },
];

const SCAN_LINES = [
  { text: "developer@portfolio:~$ scan --profile", type: "cmd", delay: 0 },
  { text: "", type: "blank", delay: 200 },
  { text: "Scanning Developer Profile...", type: "info", delay: 350 },
  { text: "██████████████████████████████", type: "progress", delay: 600 },
  { text: "", type: "blank", delay: 850 },
  { text: "Identity Detected", type: "ready", delay: 950 },
  { text: "─────────────────────────────", type: "divider", delay: 1050 },
  { text: "Name    : Arjun Mehta", type: "data", delay: 1150 },
  { text: "Role    : Full Stack Developer & DevOps Enthusiast", type: "data", delay: 1350 },
  { text: "Status  : ● Available for Opportunities", type: "online", delay: 1550 },
  { text: "Stack   : React · Next.js · Node.js · Docker", type: "data", delay: 1750 },
  { text: "Confidence: 99.98%", type: "data", delay: 1950 },
  { text: "─────────────────────────────", type: "divider", delay: 2100 },
  { text: "✦ Verification Complete", type: "ready", delay: 2250 },
];

// ─────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────
function useTypewriter(
  lines: typeof BOOT_LINES,
  active: boolean
): number[] {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const linesRef = useRef(lines);

  useEffect(() => {
    if (!active) { setVisibleLines([]); return; }
    setVisibleLines([]);
    const timers: ReturnType<typeof setTimeout>[] = [];
    linesRef.current.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return visibleLines;
}

// ─────────────────────────────────────────────
// TERMINAL LINE
// ─────────────────────────────────────────────
function TerminalLine({ line }: { line: (typeof BOOT_LINES)[0] }) {
  const colorMap: Record<string, string> = {
    cmd: "#e2e8f0",
    info: "#94a3b8",
    success: "#4ade80",
    progress: "#3b82f6",
    ready: "#f8fafc",
    blank: "transparent",
    divider: "#334155",
    data: "#a5f3fc",
    online: "#4ade80",
  };

  if (line.type === "blank") return <div style={{ height: "0.5rem" }} />;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="font-mono text-xs sm:text-sm leading-6"
      style={{ color: colorMap[line.type] || "#94a3b8" }}
    >
      {line.type === "progress" ? (
        <motion.span
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {line.text}
        </motion.span>
      ) : (
        line.text
      )}
    </motion.div>
  );
}

function BlinkCursor() {
  return (
    <span
      className="inline-block w-2 h-4 bg-blue-400 ml-1 align-middle"
      style={{ animation: "blink-cursor 1s step-end infinite" }}
    />
  );
}

// ─────────────────────────────────────────────
// TERMINAL WINDOW
// ─────────────────────────────────────────────
function TerminalWindow({
  title,
  lines,
  visibleLines,
  showCursor,
}: {
  title: string;
  lines: typeof BOOT_LINES;
  visibleLines: number[];
  showCursor: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines.length]);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden border border-white/10"
      style={{
        background: "rgba(9,10,18,0.93)",
        backdropFilter: "blur(24px)",
        boxShadow:
          "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.07]"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono tracking-wide">{title}</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
          <span className="text-[10px] text-blue-400 font-mono">LIVE</span>
        </div>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        className="p-4 sm:p-5 md:p-6 space-y-0.5 overflow-y-auto"
        style={{ maxHeight: 340, scrollBehavior: "smooth" }}
      >
        {visibleLines.map((idx) => (
          <TerminalLine key={idx} line={lines[idx]} />
        ))}
        {showCursor && <BlinkCursor />}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// FLOATING STATUS TERMINAL
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STATUS CONSOLE PANEL
// ─────────────────────────────────────────────
function StatusConsolePanel({ onClose }: { onClose: () => void }) {
  const STACK = ["Python", "Machine Learning", "React", "Next.js", "Docker", "AWS"];

  return (
    <>
      {/* Mobile/tablet backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-hidden
      />

      {/* Desktop: left-side panel */}
      <motion.div
        key="console-desktop"
        initial={{ opacity: 0, x: -32, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -32, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 w-60 flex-col rounded-2xl overflow-hidden border border-white/[0.09]"
        style={{
          background: "rgba(8,9,16,0.97)",
          backdropFilter: "blur(28px)",
          boxShadow: "0 24px 80px -12px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        role="dialog"
        aria-label="Developer Status Console"
      >
        <ConsoleContent onClose={onClose} stack={STACK} />
      </motion.div>

      {/* Mobile: centered modal */}
      <motion.div
        key="console-mobile"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="flex lg:hidden fixed bottom-6 left-4 right-4 z-50 flex-col rounded-2xl overflow-hidden border border-white/[0.09] max-h-[70vh]"
        style={{
          background: "rgba(8,9,16,0.98)",
          backdropFilter: "blur(28px)",
          boxShadow: "0 24px 80px -12px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
        role="dialog"
        aria-label="Developer Status Console"
      >
        <ConsoleContent onClose={onClose} stack={STACK} />
      </motion.div>
    </>
  );
}

function ConsoleContent({ onClose, stack }: { onClose: () => void; stack: string[] }) {
  return (
    <>
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.07] flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[9px] text-slate-500 font-mono uppercase tracking-[0.14em] flex-1">
          status console
        </span>
        <button
          onClick={onClose}
          className="w-5 h-5 flex items-center justify-center rounded text-slate-600 hover:text-slate-300 hover:bg-white/10 transition-all text-xs leading-none"
          aria-label="Close console"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-[11px] space-y-1 leading-[1.6] overflow-y-auto">
        <div className="text-slate-600">developer@portfolio:~$</div>
        <div className="text-slate-400">whoami</div>
        <div className="text-blue-300 font-semibold mt-0.5">Arjun Mehta</div>
        <div className="text-purple-300">Full Stack Developer &amp; DevOps Enthusiast</div>

        <div className="my-2.5 border-t border-white/[0.06]" />

        <div className="text-slate-600 uppercase tracking-[0.14em] text-[9px]">Current Stack</div>
        {stack.map((s) => (
          <div key={s} className="flex items-center gap-1.5 text-green-400">
            <span className="text-green-500">✓</span>
            <span>{s}</span>
          </div>
        ))}

        <div className="my-2.5 border-t border-white/[0.06]" />

        <div className="text-slate-600 uppercase tracking-[0.14em] text-[9px]">Status</div>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block flex-shrink-0"
          />
          <span className="text-green-400">Available for Opportunities</span>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// TERMINAL TRIGGER BUTTON
// ─────────────────────────────────────────────
function TerminalTrigger({ onClick }: { onClick: () => void }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-200 pointer-events-none"
            style={{
              background: "rgba(12,13,22,0.97)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}
          >
            Open Developer Console
            {/* Arrow */}
            <span
              className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
              style={{ borderRightColor: "rgba(255,255,255,0.1)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.4 }}
        className="relative w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(12,13,22,0.92)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 0 0 1px rgba(124,58,237,0.15), 0 8px 24px rgba(0,0,0,0.5)",
        }}
        aria-label="Open Developer Console"
      >
        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(124,58,237,0.45)" }}
        />
        {/* Icon */}
        <span className="font-mono text-[13px] font-semibold text-slate-300 select-none leading-none">{'> _'}</span>
      </motion.button>
    </div>
  );
}


// ─────────────────────────────────────────────
// SKILL CARD
// ─────────────────────────────────────────────
function SkillCard({
  category,
  cardIndex,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
  cardIndex: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        delay: cardIndex * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden cursor-default select-none bg-white max-w-full"
      style={{
        border: `2px solid ${isHovered ? category.color + "55" : "rgba(0,0,0,0.1)"}`,
        boxShadow: isHovered
          ? `0 10px 30px -10px ${category.glow}`
          : "0 4px 10px -5px rgba(0,0,0,0.05)",
        transition: "border-color 0.3s ease, box-shadow 0.35s ease",
      }}
    >
      {/* Mouse-follow ambient glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: 200,
            height: 200,
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            background: `radial-gradient(circle, ${category.color}45, transparent 70%)`,
            filter: "blur(24px)",
            borderRadius: "50%",
          }}
        />
      )}

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(135deg, ${category.color}12, transparent 65%)` }}
      />

      {/* Top accent stripe */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${category.color}90, transparent)` }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative z-10 p-4 sm:p-5">
        {/* Card header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: isHovered ? 8 : 0, scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xs sm:text-sm font-mono font-bold flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${category.color}22, ${category.color}08)`,
                border: `1px solid ${category.color}45`,
                color: category.color,
                boxShadow: isHovered ? `0 0 20px ${category.color}50` : "none",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {category.iconEmoji}
            </motion.div>
            <div>
              <h3 className="text-sm font-black text-black leading-tight uppercase tracking-tight">{category.name}</h3>
              <span
                className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase"
                style={{ color: category.color }}
              >
                {category.label}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ scale: isHovered ? 1.06 : 1 }}
            className="text-[10px] font-mono px-2.5 py-1 rounded-lg flex-shrink-0"
            style={{
              background: `${category.color}18`,
              color: category.color,
              border: `1px solid ${category.color}35`,
            }}
          >
            {category.skills.length}
          </motion.div>
        </div>

        {/* Skills pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: cardIndex * 0.1 + i * 0.035 + 0.25, duration: 0.2, type: "spring" }}
              whileHover={{ scale: 1.07, y: -1.5 }}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all duration-200"
              style={{
                background: "rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "#4b5563",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                style={{ background: category.color, opacity: 0.85 }}
              />
              {skill.name}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-black/10 flex items-center justify-between">
          <span className="text-[10px] text-gray-500 font-bold font-mono uppercase tracking-wider">verified · active</span>
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: cardIndex * 0.3 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: category.color }}
            />
            <motion.span
              animate={{ opacity: isHovered ? 1 : 0.5 }}
              className="text-[10px] font-mono"
              style={{ color: category.color }}
            >
              online
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED BACKGROUND
// ─────────────────────────────────────────────

// Deterministic seeded pseudo-random to avoid SSR/CSR mismatch
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: seededRand(i * 7 + 1) * 100,
  top: seededRand(i * 13 + 2) * 100,
  size: seededRand(i * 5 + 3) * 2 + 1,
  color: i % 3 === 0 ? "#7c3aed" : i % 3 === 1 ? "#3b82f6" : "#06b6d4",
  duration: seededRand(i * 11 + 4) * 9 + 7,
  delay: seededRand(i * 3 + 5) * 12,
  dy: -(seededRand(i * 17 + 6) * 90 + 40),
}));

function ConsoleBackground() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Orbs */}
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute"
        style={{
          top: "20%", left: "15%",
          width: 700, height: 700,
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.055,
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 4 }}
        className="absolute"
        style={{
          bottom: "25%", right: "20%",
          width: 550, height: 550,
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.045,
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut", delay: 8 }}
        className="absolute"
        style={{
          top: "65%", left: "50%",
          width: 450, height: 450,
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          filter: "blur(55px)",
          opacity: 0.035,
          borderRadius: "50%",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.color,
          }}
          animate={{ y: [0, p.dy, 0], opacity: [0, 0.65, 0] }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// PHASE INDICATOR
// ─────────────────────────────────────────────
function PhaseIndicator({ phase }: { phase: string }) {
  const phases = [
    { id: "boot", label: "Boot" },
    { id: "scan", label: "Scan" },
    { id: "dashboard", label: "Dashboard" },
  ];
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {phases.map((p, i) => (
        <React.Fragment key={p.id}>
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{
                background: phase === p.id
                  ? "#3b82f6"
                  : phases.indexOf(phases.find((x) => x.id === phase)!) > i
                    ? "#4ade80"
                    : "rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.4 }}
              className="w-2 h-2 rounded-full"
            />
            <span
              className="text-[10px] font-mono"
              style={{
                color: phase === p.id
                  ? "#3b82f6"
                  : phases.indexOf(phases.find((x) => x.id === phase)!) > i
                    ? "#4ade80"
                    : "#475569",
              }}
            >
              {p.label}
            </span>
          </div>
          {i < phases.length - 1 && (
            <div className="w-4 h-px bg-white/10" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
type Phase = "idle" | "boot" | "scan" | "dashboard";
const SESSION_KEY = "ai_console_booted_v2";

export default function AIConsoleSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [showDashboard, setShowDashboard] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [inView, setInView] = useState(false);

  // Session storage: skip boot on revisit
  useEffect(() => {
    try {
      const booted = sessionStorage.getItem(SESSION_KEY);
      if (booted === "true") {
        setPhase("dashboard");
        setShowDashboard(true);
      }
    } catch {}
  }, []);

  // IntersectionObserver — dual purpose:
  // 1. Trigger boot animation when first entering viewport
  // 2. Track whether we're in the Skills section to show/hide trigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        // Auto-close console when scrolled away
        if (!entry.isIntersecting) {
          setConsoleOpen(false);
        }
      },
      { threshold: 0.1 }
    );
    visibilityObserver.observe(el);

    return () => visibilityObserver.disconnect();
  }, []);

  // Boot trigger (only when idle)
  useEffect(() => {
    if (phase !== "idle") return;
    const el = sectionRef.current;
    if (!el) return;

    const bootObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bootObserver.disconnect();
          triggerBoot();
        }
      },
      { threshold: 0.15 }
    );
    bootObserver.observe(el);
    return () => bootObserver.disconnect();
  }, [phase]);

  // ESC key closes console
  useEffect(() => {
    if (!consoleOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setConsoleOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [consoleOpen]);

  function triggerBoot() {
    setPhase("boot");
    const t1 = setTimeout(() => setPhase("scan"), 3100);
    const t2 = setTimeout(() => {
      setPhase("dashboard");
      setShowDashboard(true);
      try { sessionStorage.setItem(SESSION_KEY, "true"); } catch {}
    }, 3100 + 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }

  const bootVisible = useTypewriter(BOOT_LINES, phase === "boot");
  const scanVisible = useTypewriter(SCAN_LINES, phase === "scan");
  const isBootDone = bootVisible.length >= BOOT_LINES.length;
  const isScanDone = scanVisible.length >= SCAN_LINES.length;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <ConsoleBackground />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 mb-5"
            style={{ background: "rgba(0,0,0,0.05)" }}
          >
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-black"
            />
            <span className="text-[11px] font-mono text-gray-800 font-bold tracking-[0.18em] uppercase">
              AI Developer Console · v2.0
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tighter mb-3 uppercase">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Engineering competencies identified and verified by the AI system.
          </p>
        </motion.div>

        {/* ── Phase Indicator ── */}
        {phase !== "idle" && phase !== "dashboard" && (
          <PhaseIndicator phase={phase} />
        )}

        {/* ── PHASE 1: Boot Terminal ── */}
        <AnimatePresence mode="wait">
          {phase === "boot" && (
            <motion.div
              key="boot-terminal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -24 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="max-w-full sm:max-w-2xl mx-auto mb-10"
            >
              <TerminalWindow
                title="portfolio — system boot"
                lines={BOOT_LINES}
                visibleLines={bootVisible}
                showCursor={!isBootDone}
              />
            </motion.div>
          )}

          {/* ── PHASE 2: Scan Terminal ── */}
          {phase === "scan" && (
            <motion.div
              key="scan-terminal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -24 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="max-w-full sm:max-w-2xl mx-auto mb-10"
            >
              <TerminalWindow
                title="portfolio — ai profile scan"
                lines={SCAN_LINES}
                visibleLines={scanVisible}
                showCursor={!isScanDone}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 3+4: Dashboard ── */}
        <AnimatePresence>
          {showDashboard && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* System Online Banner */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex items-center justify-center gap-4 mb-10"
              >
                <div
                  className="h-px w-32"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.2))" }}
                />
                <div
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 text-[11px] font-mono"
                  style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="w-1.5 h-1.5 rounded-full bg-black"
                  />
                  <span className="text-black font-bold">System Online</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-600 font-bold">6 modules loaded</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-600 font-bold">27 skills verified</span>
                </div>
                <div
                  className="h-px w-32"
                  style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.2), transparent)" }}
                />
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {SKILL_CATEGORIES.map((cat, i) => (
                  <SkillCard key={cat.id} category={cat} cardIndex={i} />
                ))}
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.55 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-full"
              >
                {[
                  { label: "Languages", count: "6", color: "#000000" },
                  { label: "AI / ML", count: "7", color: "#222222" },
                  { label: "Frameworks", count: "5", color: "#444444" },
                  { label: "DevOps", count: "6", color: "#111111" },
                  { label: "Total Skills", count: "27+", color: "#333333" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/10 bg-white shadow-sm"
                  >
                    <span className="text-xl font-black tracking-tight" style={{ color: s.color }}>
                      {s.count}
                    </span>
                    <span className="text-xs text-gray-600 font-bold uppercase tracking-wider">{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Terminal Trigger: visible only when in Skills section & dashboard shown ── */}
      <AnimatePresence>
        {showDashboard && inView && !consoleOpen && (
          <motion.div
            key="trigger"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
          >
            <TerminalTrigger onClick={() => setConsoleOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Status Console Panel (portal-like, fixed) ── */}
      <AnimatePresence>
        {consoleOpen && inView && (
          <StatusConsolePanel key="status-console" onClose={() => setConsoleOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

