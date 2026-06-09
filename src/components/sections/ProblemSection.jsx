import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

/* Inline SVG icons */
function BankIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5dd8ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </svg>
  );
}

function CreditIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff6b8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

function BillsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffc857" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
      <circle cx="8" cy="16.5" r="0.5" fill="#ffc857" />
    </svg>
  );
}

function SpreadsheetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c5cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}

function BudgetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26e6a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff9f6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="14" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
  );
}

const scatteredItems = [
  { label: "Bank Accounts", icon: <BankIcon />, color: "#5dd8ff", pos: "left-[2%] top-[6%]", delay: 0, floatY: [0, -8, 0], floatDur: 3.8 },
  { label: "Credit Cards", icon: <CreditIcon />, color: "#ff6b8a", pos: "right-[2%] top-[2%]", delay: 0.15, floatY: [0, -6, 0], floatDur: 4.2 },
  { label: "Bills", icon: <BillsIcon />, color: "#ffc857", pos: "left-[0%] top-[36%]", delay: 0.3, floatY: [0, -7, 0], floatDur: 4.6 },
  { label: "Spreadsheets", icon: <SpreadsheetIcon />, color: "#7c5cff", pos: "right-[2%] bottom-[3%]", delay: 0.45, floatY: [0, -5, 0], floatDur: 3.4 },
  { label: "Budgets", icon: <BudgetIcon />, color: "#26e6a3", pos: "left-[3%] bottom-[6%]", delay: 0.6, floatY: [0, -8, 0], floatDur: 5.0 },
  { label: "Receipts", icon: <ReceiptIcon />, color: "#ff9f6b", pos: "right-[1%] top-[34%]", delay: 0.75, floatY: [0, -6, 0], floatDur: 4.4 },
];

const painPoints = [
  "Not knowing if a transaction cleared",
  "Losing track of a budget halfway through the month",
  "Feeling like your money is everywhere and nowhere",
];

/* Mini doughnut chart SVG */
function DoughnutChart() {
  const segments = [
    { pct: 35, color: "#26e6a3", label: "Housing" },
    { pct: 25, color: "#7c5cff", label: "Food" },
    { pct: 20, color: "#ffc857", label: "Transport" },
    { pct: 12, color: "#5dd8ff", label: "Utilities" },
    { pct: 8, color: "#ff6b8a", label: "Other" },
  ];
  let cumulative = 0;
  const r = 36;
  const cx = 50;
  const cy = 50;
  const circ = 2 * Math.PI * r;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
      {segments.map((seg) => {
        const offset = cumulative;
        const length = (seg.pct / 100) * circ;
        cumulative += length;
        return (
          <circle
            key={seg.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth="14"
            strokeDasharray={`${length} ${circ - length}`}
            strokeDashoffset={-offset}
            opacity="0.85"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r - 10} fill="#07101d" />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <Reveal direction="left">
          <div className="flex flex-col">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              Feel like this?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              Managing Money Gets Messy Fast
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-8">
              A few accounts here, a couple of cards there, bills you almost
              forgot, a budget you made in January… It does not take long before
              you are guessing instead of knowing.
            </p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] mb-9 font-bold">
              Prism brings it all together so you can stop guessing and start
              seeing your money clearly.
            </p>
            <ul className="flex flex-col gap-3.5">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3.5 text-muted text-[1rem] leading-snug"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_14px_rgba(124,92,255,0.6)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: Visual */}
        <Reveal direction="right" delay={0.15}>
          <div className="relative perspective-[1200px] min-h-[560px]">
            {/* Warm/cool atmosphere */}
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_60%_20%,rgba(38,230,163,0.22),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(124,92,255,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(255,200,87,0.08),transparent_34%)] blur-2xl" />

            {/* Scattered items */}
            {scatteredItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${item.pos} z-20 hidden sm:block`}
              >
                <motion.div
                  animate={{ y: item.floatY }}
                  transition={{ duration: item.floatDur, ease: "easeInOut", repeat: Infinity }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-lg cursor-default select-none"
                  style={{
                    borderColor: `${item.color}33`,
                    background: `linear-gradient(135deg, ${item.color}12, #07101dcc)`,
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: item.color,
                    boxShadow: `0 0 30px ${item.color}44, 0 8px 40px rgba(0,0,0,0.4)`,
                    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ background: `${item.color}18` }}
                    whileHover={{ scale: 1.15, background: `${item.color}30` }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-muted text-[0.82rem] font-extrabold whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* Central Prism mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-auto mt-16 sm:mt-20 max-w-[460px]"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-[radial-gradient(circle_at_40%_30%,rgba(38,230,163,0.18),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,92,255,0.18),transparent_50%)] blur-xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                className="relative overflow-hidden border border-white/18 rounded-[28px] bg-gradient-to-br from-white/16 to-white/5 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Title bar */}
                <div className="flex gap-2 items-center px-[18px] py-3.5 border-b border-white/14 bg-white/6">
                  <span className="w-[11px] h-[11px] rounded-full bg-[#ff6b6b]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#ffd166]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#26e6a3]" />
                  <strong className="ml-2.5 text-muted text-[0.82rem]">Prism</strong>
                </div>
                {/* Body: sidebar + content */}
                <div className="grid grid-cols-[140px_1fr] min-h-[400px] max-sm:grid-cols-1">
                  {/* Sidebar */}
                  <aside className="p-4 border-r border-white/14 bg-black/15 max-sm:hidden">
                    <div className="w-[60px] h-[12px] mb-6 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                    {["Dashboard", "Accounts", "Budgets", "Transactions", "Reports"].map((item, i) => (
                      <p
                        key={item}
                        className={`m-0 mb-1.5 px-2.5 py-2 rounded-xl text-[0.72rem] font-extrabold ${
                          i === 0 ? "bg-accent/22 text-text" : "text-muted"
                        }`}
                      >
                        {item}
                      </p>
                    ))}
                  </aside>
                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-muted text-[0.65rem] font-extrabold uppercase tracking-[0.14em]">
                          Net Worth
                        </span>
                        <strong className="block mt-0.5 text-2xl tracking-tight">$84,210</strong>
                      </div>
                      <div className="shrink-0">
                        <DoughnutChart />
                      </div>
                    </div>
                    {/* Account cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { label: "Checking", val: "$12.4k", color: "#26e6a3", w: 72 },
                        { label: "Savings", val: "$48.2k", color: "#5dd8ff", w: 88 },
                        { label: "Credit", val: "$2.1k", color: "#7c5cff", w: 34 },
                      ].map((m) => (
                        <article
                          key={m.label}
                          className="p-2.5 border border-white/14 rounded-[14px] bg-white/6"
                        >
                          <span className="text-muted text-[0.6rem] font-extrabold uppercase block">
                            {m.label}
                          </span>
                          <strong className="block mt-1 text-[0.85rem]">{m.val}</strong>
                          <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${m.w}%`, background: m.color }}
                            />
                          </div>
                        </article>
                      ))}
                    </div>
                    {/* Bar chart */}
                    <div className="relative h-[90px] p-3 border border-white/14 rounded-xl bg-gradient-to-b from-white/10 to-white/3.5 overflow-hidden">
                      <div className="absolute inset-x-3 top-4 bottom-4 grid grid-rows-3 opacity-20">
                        {[0, 1, 2].map((line) => (
                          <span key={line} className="border-t border-white/20" />
                        ))}
                      </div>
                      <div className="relative z-10 flex items-end gap-2 h-full">
                        {[
                          { h: "36%", d: 80 },
                          { h: "64%", d: 140 },
                          { h: "52%", d: 200 },
                          { h: "78%", d: 260 },
                          { h: "58%", d: 320 },
                          { h: "84%", d: 380 },
                        ].map((bar, i) => (
                          <div
                            key={i}
                            className="flex-1 min-w-[12px] rounded-t-full bg-gradient-to-b from-accent-2 to-accent"
                            style={{
                              height: bar.h,
                              animation: `grow 1s ${bar.d}ms cubic-bezier(0.2, 0.8, 0.2, 1) both`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Transaction rows */}
                    <div className="mt-4 space-y-2">
                      {[
                        { label: "Mortgage Payment", val: "-$1,840", dot: "#ff6b8a", tag: "Housing" },
                        { label: "Salary Deposit", val: "+$4,200", dot: "#26e6a3", tag: "Income" },
                        { label: "Groceries", val: "-$312", dot: "#ffc857", tag: "Food" },
                      ].map((t) => (
                        <div
                          key={t.label}
                          className="flex items-center gap-2.5 justify-between py-2 border-b border-white/8 text-muted text-[0.78rem] last:border-b-0"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ background: t.dot }}
                            />
                            <span className="truncate">{t.label}</span>
                          </div>
                          <strong
                            className={`ml-auto text-[0.82rem] shrink-0 ${
                              t.val.startsWith("+") ? "text-accent-2" : "text-text"
                            }`}
                          >
                            {t.val}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile scattered items */}
            <div className="sm:hidden mt-8 grid grid-cols-3 gap-2.5">
              {scatteredItems.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/14 bg-white/6"
                  style={{ borderColor: `${item.color}22` }}
                  whileHover={{ scale: 1.05, borderColor: `${item.color}55` }}
                >
                  <div className="w-6 h-6 flex items-center justify-center">{item.icon}</div>
                  <span className="text-muted text-[0.68rem] font-extrabold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
