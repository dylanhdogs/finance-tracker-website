import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import heroGraphic from "../../../hero_laptop_graphic.png";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-10 items-center px-5 sm:px-6 mx-auto max-w-7xl pt-[104px] sm:pt-[130px] pb-[54px] sm:pb-[70px] scroll-mt-0 overflow-visible"
    >
      {" "}
      <div className="flex flex-col">
        {" "}
        <Reveal direction="up" delay={0}>
          {" "}
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
            {" "}
            Shared expenses, finally made clear{" "}
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.12}>
          {" "}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 sm:mb-6 max-w-full">
            {" "}
            Shared budgeting<br className="hidden lg:block" />{" "}
            <span className="hero-gradient-text">Clearer together</span>{" "}
          </h1>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.24}>
          {" "}
          <p className="text-muted text-[1rem] sm:text-[1.12rem] leading-relaxed max-w-[620px]">
            {" "}
            PRISM helps you track shared bills, split costs, see who owes who, and settle balances — with personal finance tools included when you need them.
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.36}>
          {" "}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-8 mb-7">
            {" "}
            <a
              href="/download.html"
              className="gradient-border-button w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-7 rounded-full font-black text-[#03111a] bg-gradient-to-r from-accent-2 via-accent-3 to-accent shadow-[0_0_30px_rgba(99,102,241,0.2),0_18px_50px_rgba(139,92,246,0.25)] transition-all duration-300 hover:-translate-y-1 no-underline hover:shadow-[0_0_50px_rgba(99,102,241,0.3),0_18px_70px_rgba(139,92,246,0.4)]"
            >
              {" "}
               Get PRISM Desktop{" "}
            </a>{" "}
            <a
              href="/download.html"
              className="gradient-border-button w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-7 rounded-full font-black text-text border border-transparent bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] no-underline"
            >
              {" "}
              Track Shared Expenses{" "}
            </a>{" "}
          </div>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.48}>
          {" "}
          <div className="flex flex-wrap gap-2.5">
            {[
              "Shared expenses",
              "Split costs",
              "Settle balances",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.03] text-muted text-[0.8rem] font-bold backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>{" "}
      </div>{" "}
      <Reveal direction="right" delay={0.3}>
        {" "}
        <div className="relative flex justify-center perspective-[1200px] max-md:mx-auto max-md:max-w-[680px]">
          {" "}
          <div className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle_at_42%_43%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_57%_47%,rgba(15,23,42,0.58),transparent_48%),radial-gradient(circle_at_52%_42%,rgba(255,63,180,0.22),transparent_44%),radial-gradient(circle_at_50%_55%,rgba(180,92,255,0.2),transparent_56%)] blur-3xl" />{" "}
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
              className="block h-auto w-full max-w-none select-none object-contain [filter:drop-shadow(0_0_70px_rgba(255,63,180,0.26))_drop-shadow(0_0_54px_rgba(37,99,235,0.28))_drop-shadow(0_0_86px_rgba(15,23,42,0.65))]"
              draggable="false"
            />{" "}
          </motion.div>{" "}
        </div>{" "}
      </Reveal>{" "}
    </section>
  );
}
