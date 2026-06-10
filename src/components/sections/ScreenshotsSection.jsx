import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "../animations/Reveal";

const assetVersion = '2026-06-09';
const dashboardImage = `/Dashboard_image.png?v=${assetVersion}`;
const transactionsImage = `/Transactions_Register.png?v=${assetVersion}`;
const budgetImage = `/Budget%20Planner.png?v=${assetVersion}`;
const reportsImage = `/Reports.png?v=${assetVersion}`;

const screens = [
  {
    label: "Dashboard",
    desc: "See your entire financial picture at a glance.",
    stat: "$84,210",
    rows: ["Net worth updated", "Income +$9,840", "Expenses -$4,126"],
    image: dashboardImage,
    alt: "PRISM dashboard showing net worth, income, expenses, and chart overview",
  },
  {
    label: "Transaction Register",
    desc: "Track every dollar with customizable categories.",
    stat: "438",
    rows: ["Mortgage matched", "Grocery categorized", "Transfer ignored"],
    image: transactionsImage,
    alt: "PRISM transaction register showing categorized entries and account activity",
  },
  {
    label: "Budget Planner",
    desc: "Create realistic budgets and monitor progress.",
    stat: "72%",
    rows: ["Dining warning", "Utilities on plan", "Savings funded"],
    image: budgetImage,
    alt: "PRISM budget planner showing category budgets and progress tracking",
  },
  {
    label: "Reports",
    desc: "Turn financial data into actionable insights.",
    stat: "Ready",
    rows: ["Profit & Loss", "Balance Sheet", "Category trend"],
    image: reportsImage,
    alt: "PRISM reports screen showing financial statements and charts",
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  const screen = screens[active];

  return (
    <section
      id="screenshots"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          See it in action
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          A focused workspace for your <span className="section-gradient-text">personal books</span>
        </h2>
      </Reveal>

      <Reveal direction="scale" delay={0.1} className="hidden lg:block">
        <div className="mt-12 sticky top-24 rounded-[38px] border border-white/[0.06] bg-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4">
            <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-accent-2" />
            <strong className="ml-3 text-muted text-xs uppercase tracking-[0.18em]">
              PRISM live preview
            </strong>
          </div>
          <div className="grid lg:grid-cols-[220px_1fr]">
            <div className="p-4">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {screens.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative text-left px-4 py-4 transition-all duration-200 rounded-xl ${
                      active === i ? "text-text bg-white/[0.04]" : "text-muted hover:text-text hover:bg-white/[0.02]"
                    }`}
                  >
                    {active === i && (
                      <span className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-accent-2 shadow-[0_0_14px_rgba(139,92,246,0.7)]" />
                    )}
                    <span className="block text-sm font-black">{s.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed opacity-75">
                      {s.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-5"
            >
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setPreview(screen)}>
                <img
                  src={screen.image}
                  alt={screen.alt}
                  className="w-full h-auto rounded-2xl border border-white/[0.06] transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold border border-white/10">Click to enlarge</span>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-4">
                <span className="text-accent-2 text-[2rem] font-black tracking-tight">{screen.stat}</span>
                <div className="flex flex-col gap-1">
                  {screen.rows.map((row) => (
                    <span key={row} className="text-muted text-[0.82rem] font-bold">{row}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>

      {/* Mobile view */}
      <div className="mt-10 lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screens.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] cursor-pointer"
            onClick={() => setPreview(s)}
          >
            <img src={s.image} alt={s.alt} className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <p className="text-text text-sm font-black">{s.label}</p>
              <p className="text-muted text-xs mt-1">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl cursor-pointer"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-bold bg-transparent border-0 cursor-pointer"
              >
                Close ✕
              </button>
              <img
                src={preview.image}
                alt={preview.alt}
                className="w-full h-auto rounded-2xl border border-white/[0.08] shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-text text-lg font-black">{preview.label}</p>
                <p className="text-muted text-sm mt-1">{preview.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
