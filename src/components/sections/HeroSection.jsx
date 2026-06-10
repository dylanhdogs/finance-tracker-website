import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import heroGraphic from "../../../hero_laptop_graphic.png";
import heroLighting from "../../../hero_lighting_effect.png";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4 lg:gap-4 items-center px-5 sm:px-6 mx-auto max-w-[1440px] pt-[100px] sm:pt-[110px] pb-0 sm:pb-0 scroll-mt-0 overflow-visible"
    >
      <img src={heroLighting} alt="" aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 w-screen h-[135%] -top-[10%] object-cover pointer-events-none select-none opacity-45" />
      {" "}
      <div className="flex flex-col">
        {" "}
        <Reveal direction="up" delay={0}>
          {" "}
          <p className="text-accent-2 text-[1.05rem] sm:text-[1.1rem] font-black tracking-[0.18em] uppercase mb-2">
            {" "}
            Shared expenses, finally made clear{" "}
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.12}>
          {" "}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.96] mb-3 sm:mb-3 max-w-full">
            {" "}
            Shared expenses{" "}
            <span className="hero-gradient-text">made simple</span>{" "}
          </h1>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.24}>
          {" "}
          <p className="text-muted text-[1.1rem] sm:text-[1.25rem] leading-relaxed max-w-[700px]">
            {" "}
            PRISM helps roommates, couples, friends, and small groups track shared bills, split costs fairly, and instantly see who owes who — with personal finance tools included when you need them.
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.36}>
          {" "}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-4 mb-4">
            {" "}
            <a
              href="/download.html"
              className="gradient-border-button w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-7 rounded-full text-white bg-gradient-to-r from-accent-2 via-accent-3 to-accent shadow-[0_0_30px_rgba(99,102,241,0.2),0_18px_50px_rgba(139,92,246,0.25)] transition-all duration-300 hover:-translate-y-1 no-underline hover:shadow-[0_0_50px_rgba(99,102,241,0.3),0_18px_70px_rgba(139,92,246,0.4)]"
            >
              {" "}
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Get PRISM Desktop{" "}
            </a>{" "}
            <a
              href="/download.html"
              className="gradient-border-button w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-7 rounded-full text-text border border-transparent bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] no-underline"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              See How Splits Work{" "}
            </a>{" "}
          </div>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.48}>
          {" "}
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "Shared expenses", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 14l2 2 4-4" },
              { label: "Split costs", icon: "M7 12l5 5 5-5M12 7v10" },
              { label: "Settle balances", icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-white/[0.03] text-muted text-[0.9rem] font-bold backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 5px rgba(236,72,153,0.6))" }}>
                  <path d={tag.icon} />
                </svg>
                {tag.label}
              </span>
            ))}
          </div>
        </Reveal>{" "}
      </div>{" "}
      <Reveal direction="right" delay={0.3}>
        {" "}
        <div className="relative flex justify-center perspective-[1200px] max-md:mx-auto max-md:max-w-[680px]">
          {" "}
          {" "}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative w-full max-w-none sm:w-[112%] lg:w-[128%] xl:w-[136%]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {" "}
            <img
              src={heroGraphic}
              alt=""
              className="block h-auto w-full max-w-none select-none object-contain"
              draggable="false"
            />{" "}
          </motion.div>{" "}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            className="absolute top-[8%] -left-[8%] w-[160px] sm:w-[190px] p-5 rounded-xl border border-pink-500/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(236,72,153,0.15),0_0_20px_rgba(236,72,153,0.12),0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-[0.6rem] font-black text-white shadow-[0_0_12px_rgba(236,72,153,0.4)]">A</div>
              <span className="text-[0.75rem] text-muted font-semibold">Alex owes you</span>
            </div>
            <p className="text-[1.25rem] font-black text-white tracking-tight">$42.50</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
            className="absolute bottom-[12%] -left-[10%] w-[175px] sm:w-[210px] p-5 rounded-xl border border-purple-500/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(168,85,247,0.15),0_0_20px_rgba(168,85,247,0.12),0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <svg className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="text-[0.75rem] text-muted font-semibold">Groceries</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] text-muted font-medium">Split 3 ways</span>
              <span className="text-[1.25rem] font-black text-white tracking-tight">$68.45</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
            className="absolute top-[28%] -right-[12%] w-[155px] sm:w-[185px] p-5 rounded-xl border border-blue-500/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.12),0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <svg className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="text-[0.75rem] text-muted font-semibold">Balance settled</span>
            </div>
            <p className="text-[1.25rem] font-black text-white tracking-tight">$120.00</p>
          </motion.div>

        </div>{" "}
      </Reveal>{" "}
    </section>
  );
}
