import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const steps = [
  {
    number: "01",
    title: "Bring Everything In",
    desc: "Import transactions, add accounts, and keep your money in one private desktop app.",
    color: "accent-2",
    mini: (
      <svg width="100%" height="56" viewBox="0 0 200 56" fill="none" aria-hidden="true">
        <rect x="20" y="8" width="160" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
        <rect x="20" y="18" width="160" height="5" rx="2.5" fill="currentColor" opacity="0.15" />
        <rect x="20" y="28" width="130" height="5" rx="2.5" fill="currentColor" opacity="0.3" />
        <rect x="20" y="38" width="160" height="5" rx="2.5" fill="currentColor" opacity="0.2" />
        <circle cx="174" cy="42" r="7" fill="var(--color-accent-2)" opacity="0.4" />
        <path d="M171 42l2 2 4-4" stroke="var(--color-accent-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="1" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Organize What Happened",
    desc: "Categorize spending, manage budgets, reconcile accounts, and track shared expenses.",
    color: "accent",
    mini: (
      <svg width="100%" height="56" viewBox="0 0 200 56" fill="none" aria-hidden="true">
        <rect x="20" y="8" width="12" height="12" rx="3" fill="var(--color-accent-2)" opacity="0.5" />
        <rect x="38" y="11" width="72" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
        <rect x="38" y="17" width="48" height="3" rx="1.5" fill="currentColor" opacity="0.18" />
        <rect x="20" y="24" width="12" height="12" rx="3" fill="var(--color-accent)" opacity="0.5" />
        <rect x="38" y="27" width="60" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
        <rect x="38" y="33" width="40" height="3" rx="1.5" fill="currentColor" opacity="0.18" />
        <rect x="20" y="40" width="12" height="12" rx="3" fill="var(--color-accent-3)" opacity="0.5" />
        <rect x="38" y="43" width="50" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Stay in Control",
    desc: "Review reports, settle balances, spot trends, and know what needs attention.",
    color: "accent-3",
    mini: (
      <svg width="100%" height="56" viewBox="0 0 200 56" fill="none" aria-hidden="true">
        <rect x="20" y="8" width="72" height="4" rx="2" fill="currentColor" opacity="0.18" />
        <rect x="100" y="8" width="40" height="4" rx="2" fill="currentColor" opacity="0.12" />
        <path d="M20 46 Q 60 38, 80 42 T 120 32 T 160 36" stroke="var(--color-accent-2)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="1" />
        <circle cx="160" cy="36" r="3.5" fill="var(--color-accent-2)" opacity="0.9" />
        <path d="M20 46 Q 60 34, 80 40 T 120 28 T 160 30" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      </svg>
    ),
  },
];

function Connector() {
  return (
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-white/25" />
        <polygon points="22,10 26,14 22,18" fill="var(--color-accent-2)" opacity="0.6" />
      </svg>
    </div>
  );
}

export default function HowSection() {
  return (
    <section
      id="how"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          How Prism works
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          From Scattered Money to Clear Decisions
        </h2>
        <p className="text-muted text-[1.12rem] leading-relaxed max-w-[620px]">
          Prism keeps the process simple: bring your money in, organize what
          happened, and stay in control.
        </p>
      </Reveal>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 mt-10">
        {steps.flatMap((step, i) => {
          const elements = [
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-7 shadow-xl backdrop-blur-md h-full">
                {/* Mini UI visual */}
                <div
                  className="mb-5 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: `var(--color-${step.color})12`,
                    border: `1px solid var(--color-${step.color})25`,
                    color: `var(--color-${step.color})`,
                  }}
                >
                  {step.mini}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[0.85rem] font-extrabold tracking-widest"
                    style={{ color: `var(--color-${step.color})` }}
                  >
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>
                <h3 className="text-text text-[1.05rem] font-extrabold mb-2">{step.title}</h3>
                <p className="text-muted text-[0.88rem] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>,
          ];
          if (i < steps.length - 1) {
            elements.push(<Connector key={`conn-${i}`} />);
          }
          return elements;
        })}
      </div>
    </section>
  );
}
