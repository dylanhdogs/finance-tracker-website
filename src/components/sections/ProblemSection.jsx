import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
import sharedCostsGraphic from "../../assets/images/sections/Shared_Costs_Get_Messy_Fast_section_graphic.png";

function ScatteredCard({ x, y, angle, delay, label, title, detail, tone = "muted", className = "" }) {
  const toneClasses = {
    warning: "border-[#ff6b8a]/20 bg-[#ff6b8a]/[0.06] text-[#ff9aaa]",
    accent: "border-accent/20 bg-accent/[0.06] text-accent",
    cyan: "border-accent-3/20 bg-accent-3/[0.06] text-accent-3",
    muted: "border-white/[0.08] bg-white/[0.03] text-muted",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: angle }}
      whileInView={{ opacity: 1, y: 0, rotate: angle }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", left: x, top: y }}
      className={`w-[210px] rounded-2xl border p-4 shadow-2xl backdrop-blur-xl ${toneClasses[tone]} ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[0.66rem] font-black uppercase tracking-[0.14em]">
          {label}
        </span>
        <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_18px_currentColor]" />
      </div>
      <p className="text-text text-[0.9rem] font-black leading-tight">{title}</p>
      <p className="mt-1.5 text-[0.72rem] font-bold leading-snug text-muted">{detail}</p>
    </motion.div>
  );
}

function TangledLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-50 max-sm:opacity-30"
      viewBox="0 0 680 520"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="scatterLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6b8a" stopOpacity="0.5" />
          <stop offset="48%" stopColor="#a855f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {[
        "M70 92 C210 116 214 254 340 260 S492 164 612 112",
        "M80 360 C190 304 240 412 338 268 S488 296 600 382",
        "M74 246 C188 222 236 208 340 260 S482 226 608 246",
        "M170 72 C236 176 248 224 340 260 S438 356 508 438",
      ].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="url(#scatterLine)"
          strokeWidth={i === 2 ? 2.2 : 1.4}
          strokeLinecap="round"
          strokeDasharray={i % 2 ? "8 12" : "4 10"}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

function UnclearSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.72, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/[0.08] bg-[#050505]/78 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl max-sm:w-[210px] max-sm:p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-muted">
          financial picture
        </span>
        <span className="rounded-full border border-[#ff6b8a]/25 bg-[#ff6b8a]/[0.08] px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.12em] text-[#ff9aaa]">
          unclear
        </span>
      </div>
      <strong className="block text-3xl font-black tracking-tight text-text blur-[1.4px] max-sm:text-2xl">
        $ ??.??
      </strong>
      <div className="mt-5 space-y-2.5">
        {[62, 86, 48].map((width, i) => (
          <div key={width} className="h-2 rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${width}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.58 + i * 0.08 }}
              className="h-full rounded-full bg-gradient-to-r from-[#ff6b8a]/60 via-accent/50 to-accent-2/60 opacity-60 blur-[0.4px]"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusChip({ x, y, delay, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", left: x, top: y }}
      className={`z-20 rounded-full border border-white/[0.08] bg-[#050505]/72 px-3 py-2 text-[0.7rem] font-black text-muted shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ProblemSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section
      id="problem"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-center">
        <Reveal direction="left">
          <div className="flex flex-col gap-5">
            <p className="text-white/70 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-1">
              The problem with shared costs
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] max-w-[760px]">
              Shared costs get messy
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px]">
              One person pays for groceries. Someone else covers dinner. Rent,
              utilities, subscriptions, trips, and random expenses pile up. PRISM
              keeps shared costs clear so nobody has to guess or scroll through
              old messages.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" className="order-2 lg:order-2">
          <div className="relative flex justify-center overflow-visible px-1 sm:px-2">
            <motion.img
              src={sharedCostsGraphic}
              alt="Shared costs get messy"
              loading="lazy"
              className="relative z-10 h-auto w-full max-w-[560px] object-contain sm:max-w-[680px] lg:max-w-[760px] cursor-pointer select-none"
              draggable="false"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setPreviewOpen(true)}
            />
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.img
              src={sharedCostsGraphic}
              alt="Preview"
              loading="lazy"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-screen max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-white text-xl font-bold border-0 cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-200 hover:scale-110"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
