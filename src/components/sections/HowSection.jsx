import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const steps = [
  {
    number: "01",
    title: "Bring Everything In",
    desc: "Import transactions, add accounts, track bills, and keep your money in one private desktop app.",
    color: "accent-2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16" />
        <path d="M4 20V4" />
        <path d="M8 8v8" />
        <path d="M14 8v8" />
        <path d="M20 8v8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Organize What Happened",
    desc: "Categorize spending, manage budgets, reconcile accounts, and track shared expenses clearly.",
    color: "accent",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Stay in Control",
    desc: "Review reports, settle shared balances, spot trends, and know what needs attention.",
    color: "accent-3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
];

function Connector() {
  return (
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-white/12" />
        <polygon points="22,10 26,14 22,18" fill="var(--color-accent-2)" opacity="0.35" />
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
        <p className="text-muted text-[1.12rem] leading-relaxed max-w-[620px] mb-2">
          Prism keeps the process simple: bring your money in, organize what
          happened, and stay in control.
        </p>
      </Reveal>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 mt-14">
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
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[0.85rem] font-extrabold tracking-widest"
                    style={{ color: `var(--color-${step.color})` }}
                  >
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `var(--color-${step.color})18`,
                      color: `var(--color-${step.color})`,
                    }}
                  >
                    {step.icon}
                  </div>
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
