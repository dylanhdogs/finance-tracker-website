import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";

const audiences = [
  {
    title: "Households",
    desc: "Track spending, budgets, credit cards, recurring bills, savings, loans, and net worth in one structured workspace.",
  },
  {
    title: "Budgeters",
    desc: "Plan monthly spending by category, track progress, manage recurring bills, and never wonder where your money went.",
  },
  {
    title: "Savers & Investors",
    desc: "Monitor net worth, track savings goals, review account balances, and understand your full financial picture.",
  },
];

export default function AudienceSection() {
  return (
    <section
      id="audience"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
        <Reveal direction="left">
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
            Who it is for
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
            Built for people who want real control over their finances
          </h2>
        </Reveal>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-3.5"
        >
          {audiences.map((a) => (
            <motion.article
              key={a.title}
              variants={staggerItem}
              className="p-6 min-h-[250px] border border-white/14 rounded-2xl bg-white/5 shadow-2xl backdrop-blur-lg transition-all duration-320 hover:-translate-y-2 hover:shadow-[0_18px_60px_rgba(0,0,0,0.18),0_0_40px_rgba(38,230,163,0.08)]"
            >
              <h3 className="text-[1.25rem] font-bold mb-3">{a.title}</h3>
              <p className="m-0 text-muted leading-relaxed">{a.desc}</p>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
