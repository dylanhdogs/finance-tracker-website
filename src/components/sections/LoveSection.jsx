import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import StaggerContainer, { staggerItemScale } from "../animations/StaggerContainer";

const reasons = [
  {
    icon: "\u26A1",
    title: "Powerful",
    desc: "Uses real accounting principles for complete accuracy.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Private",
    desc: "Your data stays on your computer.",
  },
  {
    icon: "\u2699",
    title: "Flexible",
    desc: "Customize categories, accounts, vendors, budgets, and reports to fit your life.",
  },
];

export default function LoveSection() {
  return (
    <section
      id="love"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          Why people love Prism
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          Built for people who want control &mdash; not complexity
        </h2>
      </Reveal>

      <StaggerContainer
        staggerDelay={0.12}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
      >
        {reasons.map((r) => (
          <motion.article
            key={r.title}
            variants={staggerItemScale}
            className="p-8 sm:p-[26px] border border-white/14 rounded-[28px] bg-white/5 shadow-2xl backdrop-blur-lg transition-all duration-320 hover:-translate-y-2 hover:border-accent/34 hover:shadow-[0_18px_60px_rgba(0,0,0,0.18),0_0_40px_rgba(124,92,255,0.08)]"
          >
            <span className="block mb-5 text-3xl">{r.icon}</span>
            <h3 className="text-[1.3rem] font-bold mb-3">{r.title}</h3>
            <p className="m-0 text-muted leading-relaxed">{r.desc}</p>
          </motion.article>
        ))}
      </StaggerContainer>
    </section>
  );
}
