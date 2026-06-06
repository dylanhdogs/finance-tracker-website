import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";

const screens = [
  {
    label: "Dashboard",
    desc: "See your entire financial picture at a glance.",
    c1: "var(--color-accent)",
    c2: "var(--color-accent-2)",
  },
  {
    label: "Transaction Register",
    desc: "Track every dollar with customizable categories.",
    c1: "var(--color-accent-3)",
    c2: "var(--color-accent)",
  },
  {
    label: "Budget Planner",
    desc: "Create realistic budgets and monitor progress.",
    c1: "var(--color-warning)",
    c2: "var(--color-accent-2)",
  },
  {
    label: "Reports",
    desc: "Turn financial data into actionable insights.",
    c1: "var(--color-accent-2)",
    c2: "var(--color-accent-3)",
  },
];

export default function ScreenshotsSection() {
  return (
    <section
      id="screenshots"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          See it in action
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          A focused workspace for your personal books
        </h2>
      </Reveal>

      <StaggerContainer
        staggerDelay={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10"
      >
        {screens.map((s) => (
          <motion.article
            key={s.label}
            variants={staggerItem}
            className="border border-white/14 rounded-[28px] bg-white/5 shadow-2xl backdrop-blur-lg overflow-hidden transition-transform duration-220 hover:-translate-y-1.5"
          >
            <div
              className="flex items-center justify-center h-[220px] max-sm:h-[160px] opacity-50"
              style={{
                background: `linear-gradient(135deg, ${s.c1}, ${s.c2})`,
              }}
            >
              <span className="px-5 py-2 rounded-full bg-[#07101d]/60 font-black text-[0.95rem]">
                {s.label}
              </span>
            </div>
            <p className="m-0 px-[22px] pb-6 pt-5 text-muted leading-relaxed">
              {s.desc}
            </p>
          </motion.article>
        ))}
      </StaggerContainer>
    </section>
  );
}
