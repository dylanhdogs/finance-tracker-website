import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const people = [
  { initial: "A", name: "Alex", color: "accent-2" },
  { initial: "M", name: "Morgan", color: "accent" },
  { initial: "J", name: "Jordan", color: "accent-3" },
];

const expenses = [
  { desc: "Rent", paid: "Alex", amount: 2400, split: [800, 800, 800] },
  { desc: "Electricity", paid: "Morgan", amount: 180, split: [60, 60, 60] },
  { desc: "Internet", paid: "Jordan", amount: 90, split: [30, 30, 30] },
  { desc: "Groceries", paid: "Alex", amount: 210, split: [70, 70, 70] },
];

const balances = [
  { name: "Alex", color: "accent-2", amount: "+$340", isPositive: true },
  { name: "Morgan", color: "accent", amount: "-$150", isPositive: false },
  { name: "Jordan", color: "accent-3", amount: "-$190", isPositive: false },
];

function UserIcon({ initial, color }) {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-black shadow-lg`}
      style={{
        background: `var(--color-${color})20`,
        color: `var(--color-${color})`,
        border: `1px solid var(--color-${color})40`,
      }}
    >
      {initial}
    </div>
  );
}

export default function SharedExpensesSection() {
  return (
    <section
      id="shared-expenses"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <Reveal direction="left">
          <div className="flex flex-col">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              Shared expenses made simple
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              Know Who Owes Who — Without the Guesswork
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-5">
              Prism helps you track shared costs between roommates, partners,
              friends, family, or anyone you split expenses with.
            </p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] mb-8 font-bold">
              See who paid, who owes, how much is still open, and settle
              balances without messy notes, texts, or spreadsheets.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "See exactly who owes who",
                "Track how much each person owes",
                "Split bills and shared costs clearly",
                "Settle balances with confidence",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-text text-[0.95rem] font-bold leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0 shadow-[0_0_12px_rgba(38,230,163,0.5)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: Shared Expenses Visual */}
        <Reveal direction="right" delay={0.15}>
          <div className="relative min-h-[520px] overflow-hidden rounded-[38px] bg-[radial-gradient(circle_at_50%_50%,rgba(38,230,163,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(124,92,255,0.08),transparent_28%)] p-5">
            {/* Group header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-md mb-3"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <p className="text-text text-[0.8rem] font-extrabold">Apartment Split</p>
                  <span className="px-1.5 py-0.5 rounded-md bg-accent-2/15 text-accent-2 text-[0.5rem] font-extrabold uppercase tracking-wider">3 people</span>
                </div>
                <div className="flex -space-x-1.5">
                  {people.map((p) => (
                    <UserIcon key={p.name} {...p} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {balances.map((b) => (
                  <div
                    key={b.name}
                    className="rounded-xl border border-white/8 bg-white/5 p-2.5 text-center"
                  >
                    <p className="text-muted text-[0.55rem] font-bold">{b.name}</p>
                    <p
                      className={`text-[0.85rem] font-extrabold ${b.isPositive ? "text-accent-2" : "text-[#ff6b8a]"}`}
                    >
                      {b.amount}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Expense list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl backdrop-blur-md mb-3"
            >
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-text text-[0.75rem] font-extrabold">Recent Expenses</p>
                <p className="text-muted text-[0.55rem] font-bold uppercase tracking-wider">Total: $2,880</p>
              </div>
              <div className="space-y-2">
                {expenses.map((e, i) => (
                  <div key={e.desc} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-[0.55rem] font-black"
                        style={{
                          background: `var(--color-accent-2)15`,
                          color: `var(--color-accent-2)`,
                        }}
                      >
                        ${e.amount}
                      </div>
                      <div>
                        <p className="text-text text-[0.7rem] font-bold">{e.desc}</p>
                        <p className="text-muted text-[0.55rem]">Paid by {e.paid}</p>
                      </div>
                    </div>
                    <span className="text-accent-2 text-[0.65rem] font-extrabold">
                      ${e.split[0]} each
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Settle up */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-accent-2/20 bg-gradient-to-br from-accent-2/10 to-accent/10 p-4 shadow-xl backdrop-blur-md text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-2 shadow-[0_0_10px_rgba(38,230,163,0.7)] animate-pulse" />
                <p className="text-accent-2 text-[0.75rem] font-extrabold">Ready to settle</p>
              </div>
              <p className="text-text text-[0.6rem] font-bold">
                Morgan owes Alex $150 · Jordan owes Alex $190
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-br from-accent-2 to-accent text-[#07101d] text-[0.65rem] font-extrabold shadow-lg">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Settle Up
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
