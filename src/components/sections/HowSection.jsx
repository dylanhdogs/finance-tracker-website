import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const steps = [
  {
    number: "01",
    title: "Bring Everything Together",
    desc: "Import transactions from CSV or Excel, connect your accounts, add bills and recurring entries. All your financial life in one private place.",
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
    title: "See the Full Picture",
    desc: "Categorized spending, reconciled accounts, live budget tracking, and a clear view of income versus expenses. Know exactly what is happening.",
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
    desc: "Generate reports, review trends, settle shared balances, and make informed decisions. Your money stops being scattered and starts working for you.",
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

function StepConnector() {
  return (
    <svg className="w-8 h-8 shrink-0 max-lg:hidden" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 16h24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-white/10" />
      <polygon points="28,12 32,16 28,20" fill="var(--color-accent-2)" opacity="0.4" />
    </svg>
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
          From Mess to Clarity in Three Steps
        </h2>
        <p className="text-muted text-[1.12rem] leading-relaxed max-w-[620px] mb-2">
          Prism is built around a simple loop: bring your data in, see what is
          happening, and stay in control. No complexity, no clutter.
        </p>
      </Reveal>

      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-4 mt-14">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full"
          >
            <div
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl backdrop-blur-md h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[0.65rem] font-extrabold tracking-widest"
                  style={{ color: `var(--color-${step.color})` }}
                >
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-white/8" />
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: `var(--color-${step.color})18`,
                    color: `var(--color-${step.color})`,
                  }}
                >
                  {step.icon}
                </div>
              </div>
              <h3 className="text-text text-[1.05rem] font-extrabold mb-2">{step.title}</h3>
              <p className="text-muted text-[0.85rem] leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
