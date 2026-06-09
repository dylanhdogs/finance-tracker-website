import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function HowSection() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(0);

  const prev = () => {
    if (step > 0) {
      setDir(-1);
      setStep((s) => s - 1);
    }
  };

  const next = () => {
    if (step < steps.length - 1) {
      setDir(1);
      setStep((s) => s + 1);
    }
  };

  const goTo = (i) => {
    setDir(i > step ? 1 : -1);
    setStep(i);
  };

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

      {/* Carousel */}
      <div className="relative mt-14 mx-auto">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-xl backdrop-blur-md">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 lg:p-14"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[0.7rem] font-extrabold tracking-widest"
                  style={{ color: `var(--color-${steps[step].color})` }}
                >
                  {steps[step].number}
                </span>
                <span className="h-px flex-1 bg-white/8" />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `var(--color-${steps[step].color})18`,
                    color: `var(--color-${steps[step].color})`,
                  }}
                >
                  {steps[step].icon}
                </div>
              </div>
              <h3 className="text-text text-[1.25rem] font-extrabold mb-3">{steps[step].title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{steps[step].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            disabled={step === 0}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-muted hover:text-text hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-180"
            aria-label="Previous step"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-180"
                style={{
                  width: i === step ? 28 : 8,
                  height: 8,
                  background: i === step ? `var(--color-accent-2)` : "rgba(255,255,255,0.15)",
                }}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={step === steps.length - 1}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-muted hover:text-text hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-180"
            aria-label="Next step"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
