import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const screens = [
  {
    label: "Dashboard",
    desc: "See your entire financial picture at a glance.",
    stat: "$84,210",
    rows: ["Net worth updated", "Income +$9,840", "Expenses -$4,126"],
  },
  {
    label: "Transaction Register",
    desc: "Track every dollar with customizable categories.",
    stat: "438",
    rows: ["Mortgage matched", "Grocery categorized", "Transfer ignored"],
  },
  {
    label: "Budget Planner",
    desc: "Create realistic budgets and monitor progress.",
    stat: "72%",
    rows: ["Dining warning", "Utilities on plan", "Savings funded"],
  },
  {
    label: "Reports",
    desc: "Turn financial data into actionable insights.",
    stat: "Ready",
    rows: ["Profit & Loss", "Balance Sheet", "Category trend"],
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

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

      <Reveal direction="scale" delay={0.1} className="hidden lg:block">
        <div className="mt-12 sticky top-24 rounded-[38px] border border-white/14 bg-[#07101d]/78 shadow-[0_28px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/12 bg-white/6">
            <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-accent-2" />
            <strong className="ml-3 text-muted text-xs uppercase tracking-[0.18em]">Prism live preview</strong>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr]">
            <div className="border-r border-white/10 bg-black/18 p-4 max-lg:border-r-0 max-lg:border-b">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {screens.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`text-left rounded-2xl border px-4 py-4 transition-all duration-200 ${active === i ? "border-accent-2/38 bg-accent-2/12 text-text shadow-[0_0_30px_rgba(38,230,163,0.08)]" : "border-transparent bg-transparent text-muted hover:bg-white/6"}`}
                  >
                    <span className="block text-sm font-black">{s.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed opacity-75">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[520px] p-5 sm:p-8 lg:p-10 overflow-hidden"
            >
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-2/10 blur-3xl" />
              <div className="relative z-10 grid md:grid-cols-[1fr_0.82fr] gap-5 h-full">
                <div className="rounded-[28px] border border-white/12 bg-white/6 p-6">
                  <span className="text-muted text-xs font-black uppercase tracking-[0.18em]">{screen.label}</span>
                  <strong className="mt-4 block text-5xl sm:text-6xl font-black tracking-tight">{screen.stat}</strong>
                  <div className="mt-8 h-52 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/3 p-5 flex items-end gap-4">
                    {[44, 66, 52, 82, 70, 90, 58].map((height, i) => (
                      <motion.span
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.04 }}
                        className="flex-1 origin-bottom rounded-t-full bg-gradient-to-b from-accent-3 to-accent-2"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {screen.rows.map((row, i) => (
                    <motion.div
                      key={row}
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <span className="flex items-center gap-3 text-muted font-bold"><span className="w-2.5 h-2.5 rounded-full bg-accent-2" />{row}</span>
                    </motion.div>
                  ))}
                  <div className="rounded-[28px] border border-accent/20 bg-accent/10 p-5">
                    <p className="m-0 text-muted leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:hidden">
        {screens.map((s) => (
          <div key={s.label} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07101d]/72">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/6 px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-warning" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-2" />
              <strong className="ml-2 text-xs uppercase tracking-[0.16em] text-muted">{s.label}</strong>
            </div>
            <div className="p-5">
              <strong className="block text-4xl mb-4 tracking-tight">{s.stat}</strong>
              <div className="space-y-2 mb-4">
                {s.rows.map((row) => <span key={row} className="block rounded-2xl bg-white/6 px-4 py-3 text-sm text-muted">{row}</span>)}
              </div>
              <p className="m-0 text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
