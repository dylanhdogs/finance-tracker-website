import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const dashboardImage = `/Dashboard_image.png?v=${Date.now()}`;
const transactionsImage = `/Transactions_Register.png?v=${Date.now()}`;
const budgetImage = `/Budget%20Planner.png?v=${Date.now()}`;
const reportsImage = `/Reports.png?v=${Date.now()}`;

const screens = [
  {
    label: "Dashboard",
    desc: "See your entire financial picture at a glance.",
    stat: "$84,210",
    rows: ["Net worth updated", "Income +$9,840", "Expenses -$4,126"],
    image: dashboardImage,
    alt: "Prism dashboard showing net worth, income, expenses, and chart overview",
  },
  {
    label: "Transaction Register",
    desc: "Track every dollar with customizable categories.",
    stat: "438",
    rows: ["Mortgage matched", "Grocery categorized", "Transfer ignored"],
    image: transactionsImage,
    alt: "Prism transaction register showing categorized entries and account activity",
  },
  {
    label: "Budget Planner",
    desc: "Create realistic budgets and monitor progress.",
    stat: "72%",
    rows: ["Dining warning", "Utilities on plan", "Savings funded"],
    image: budgetImage,
    alt: "Prism budget planner showing category budgets and progress tracking",
  },
  {
    label: "Reports",
    desc: "Turn financial data into actionable insights.",
    stat: "Ready",
    rows: ["Profit & Loss", "Balance Sheet", "Category trend"],
    image: reportsImage,
    alt: "Prism reports screen showing financial statements and charts",
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
        <div className="mt-12 sticky top-24 rounded-[38px] bg-[#07101d]/46 shadow-[0_28px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4">
            <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-accent-2" />
            <strong className="ml-3 text-muted text-xs uppercase tracking-[0.18em]">Prism live preview</strong>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr]">
            <div className="p-4">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {screens.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative text-left px-4 py-4 transition-all duration-200 ${active === i ? "text-text" : "text-muted hover:text-text"}`}
                  >
                    {active === i && <span className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-accent-2 shadow-[0_0_18px_rgba(38,230,163,0.85)]" />}
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
              <div className="relative z-10 grid md:grid-cols-[1.08fr_0.92fr] gap-5 h-full items-stretch">
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-3 sm:p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#08101c]">
                    <img
                      src={screen.image}
                      alt={screen.alt}
                      className="block w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-3 self-center">
                  <div className="rounded-[28px] bg-[radial-gradient(circle_at_20%_10%,rgba(38,230,163,0.08),transparent_48%)] p-6">
                    <span className="text-muted text-xs font-black uppercase tracking-[0.18em]">{screen.label}</span>
                    <strong className="mt-4 block text-5xl sm:text-6xl font-black tracking-tight">{screen.stat}</strong>
                  </div>
                  {screen.rows.map((row, i) => (
                    <motion.div
                      key={row}
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="border-b border-white/8 px-1 py-4 last:border-b-0"
                    >
                      <span className="flex items-center gap-3 text-muted font-bold"><span className="w-2.5 h-2.5 rounded-full bg-accent-2" />{row}</span>
                    </motion.div>
                  ))}
                  <div className="rounded-[28px] bg-accent/8 p-5">
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
          <div key={s.label} className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-warning" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-2" />
              <strong className="ml-2 text-xs uppercase tracking-[0.16em] text-muted">{s.label}</strong>
            </div>
            <div className="px-4 pb-0">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#08101c]">
                <img src={s.image} alt={s.alt} className="block w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="p-5">
              <strong className="block text-4xl mb-4 tracking-tight">{s.stat}</strong>
              <div className="space-y-2 mb-4">
                {s.rows.map((row) => <span key={row} className="block border-b border-white/8 px-1 py-3 text-sm text-muted last:border-b-0">{row}</span>)}
              </div>
              <p className="m-0 text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
