import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const summaryCards = [
  { label: "Net Worth", value: "$84,210", change: "+$2,340", color: "accent-2" },
  { label: "Income", value: "$9,840", change: "+$420", color: "accent-3" },
  { label: "Expenses", value: "$4,126", change: "-$210", color: "accent" },
];

const transactions = [
  { desc: "Grocery Store", amount: "-$126.40", category: "Food", status: "cleared" },
  { desc: "Salary Deposit", amount: "+$4,200.00", category: "Income", status: "cleared" },
  { desc: "Electric Bill", amount: "-$84.00", category: "Utilities", status: "pending" },
];

const budgets = [
  { category: "Groceries", spent: 620, budget: 800, color: "accent-2" },
  { category: "Dining Out", spent: 340, budget: 400, color: "accent-3" },
  { category: "Entertainment", spent: 110, budget: 200, color: "accent" },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 items-stretch lg:items-center">
        {/* Left: Organized Visual */}
        <Reveal direction="left" delay={0.15} className="order-2 lg:order-1">
          <div className="relative min-h-[520px] overflow-hidden rounded-[38px] bg-[radial-gradient(circle_at_50%_50%,rgba(38,230,163,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,92,255,0.08),transparent_28%)]">
            {/* Summary row */}
            <div className="grid grid-cols-3 gap-3 p-5">
              {summaryCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-md"
                >
                  <p className="text-muted text-[0.7rem] font-bold uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className="text-text text-[1.3rem] font-black tracking-tight">
                    {card.value}
                  </p>
                  <p className={`text-${card.color} text-[0.65rem] font-bold mt-0.5`}>
                    {card.change}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Transaction register */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-5 mb-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-text text-[0.75rem] font-extrabold">Recent Transactions</p>
                <span className="text-accent-2/60"><ChevronRight /></span>
              </div>
              <div className="space-y-2">
                {transactions.map((tx, i) => (
                  <div key={tx.desc} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center ${tx.status === "cleared" ? "bg-accent-2/20" : "bg-warning/20"}`}>
                        <span className={`${tx.status === "cleared" ? "text-accent-2" : "text-warning"}`}>
                          <CheckIcon />
                        </span>
                      </span>
                      <div>
                        <p className="text-text text-[0.72rem] font-bold">{tx.desc}</p>
                        <p className="text-muted text-[0.6rem]">{tx.category}</p>
                      </div>
                    </div>
                    <span className={`text-[0.75rem] font-extrabold ${tx.amount.startsWith("+") ? "text-accent-2" : "text-muted"}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Budget row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mx-5 mb-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-text text-[0.75rem] font-extrabold">Budget Overview</p>
                <span className="text-accent-2/60"><ChevronRight /></span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {budgets.map((b) => {
                  const pct = Math.round((b.spent / b.budget) * 100);
                  return (
                    <div key={b.category}>
                      <div className="flex justify-between text-[0.6rem] mb-1">
                        <span className="text-muted font-bold">{b.category}</span>
                        <span className="text-text font-extrabold">{pct}%</span>
                      </div>
                      <div className="h-[5px] rounded-full bg-white/8 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full bg-${b.color}`}
                          style={{ background: b.color === "accent-2" ? "var(--color-accent-2)" : b.color === "accent-3" ? "var(--color-accent-3)" : "var(--color-accent)" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Reveal>
        {/* Right: Copy */}
        <Reveal direction="right" className="order-1 lg:order-2">
          <div className="flex flex-col">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              Everything in one place
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              One Clear Place for Your Finances
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-5">
              Prism gives you one private place to organize your money, track
              what is happening, and stay on top of the details that matter.
            </p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] mb-9 font-bold">
              From spending and budgets to bills, imports, and reports,
              everything lives in one clean system.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-text text-[1.05rem] font-bold leading-snug">
                <span className="w-2 h-2 rounded-full bg-accent-2 shrink-0 shadow-[0_0_14px_rgba(38,230,163,0.6)]" />
                Track what came in.
              </li>
              <li className="flex items-center gap-3 text-text text-[1.05rem] font-bold leading-snug">
                <span className="w-2 h-2 rounded-full bg-accent-3 shrink-0 shadow-[0_0_14px_rgba(93,216,255,0.6)]" />
                See what went out.
              </li>
              <li className="flex items-center gap-3 text-text text-[1.05rem] font-bold leading-snug">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_14px_rgba(124,92,255,0.6)]" />
                Know what needs attention.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
