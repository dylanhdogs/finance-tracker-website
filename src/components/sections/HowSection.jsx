import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";

const features = [
  { icon: "A", color: "var(--color-accent-2)", title: "Accounts", desc: "Track checking, savings, cash, credit cards, loans, investments, and more." },
  { icon: "T", color: "var(--color-accent-3)", title: "Transactions", desc: "Record and categorize every dollar that comes in and goes out." },
  { icon: "B", color: "var(--color-warning)", title: "Budgets", desc: "Build monthly budgets and compare spending against your plan." },
  { icon: "V", color: "var(--color-accent)", title: "Vendors", desc: "Track where your money is actually going." },
  { icon: "R", color: "var(--color-accent-2)", title: "Reports", desc: "Understand spending trends, income, expenses, and financial health." },
  { icon: "P", color: "var(--color-accent-3)", title: "Planning", desc: "Make smarter decisions with real financial data." },
];

export default function HowSection() {
  return (
    <section
      id="how"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          How Prism helps
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          One place for your entire financial life
        </h2>
      </Reveal>

      <StaggerContainer
        staggerDelay={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10"
      >
        {features.map((f) => (
          <motion.article
            key={f.title}
            variants={staggerItem}
            className="p-[26px] border border-white/14 rounded-[28px] bg-white/5 shadow-2xl backdrop-blur-lg transition-all duration-320 hover:-translate-y-2 hover:border-accent-2/34 hover:shadow-[0_18px_60px_rgba(0,0,0,0.18),0_0_40px_rgba(38,230,163,0.08)]"
          >
            <span
              className="inline-flex w-11 h-11 items-center justify-center mb-6 rounded-xl font-black text-[1.15rem] bg-gradient-to-br"
              style={{
                background: `linear-gradient(135deg, ${f.color}, rgba(255,255,255,0.08))`,
              }}
            >
              {f.icon}
            </span>
            <h3 className="mb-3 text-[1.2rem] font-bold">{f.title}</h3>
            <p className="m-0 text-muted leading-relaxed">{f.desc}</p>
          </motion.article>
        ))}
      </StaggerContainer>
    </section>
  );
}
