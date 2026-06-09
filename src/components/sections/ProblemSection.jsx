import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

/* Inline SVG icons */
function BankIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
    </svg>
  );
}

function CreditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

function BillsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function SpreadsheetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="14" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
  );
}

function NotesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="16" x2="14" y2="16" />
      <line x1="8" y1="19" x2="12" y2="19" />
    </svg>
  );
}

const scatteredItems = [
  { label: "Bank Accounts", icon: <BankIcon />, color: "#ff6b8a", pos: "left-[2%] top-[2%]", rotate: -14, delay: 0, floatY: [0, -10, 0], floatDur: 4.2 },
  { label: "Credit Cards", icon: <CreditIcon />, color: "#ff6b8a", pos: "right-[3%] top-[-1%]", rotate: 11, delay: 0.12, floatY: [0, -7, 0], floatDur: 3.6 },
  { label: "Bills", icon: <BillsIcon />, color: "#ffc857", pos: "left-[-1%] top-[30%]", rotate: 7, delay: 0.24, floatY: [0, -9, 0], floatDur: 4.8 },
  { label: "Receipts", icon: <ReceiptIcon />, color: "#ff9f6b", pos: "right-[1%] top-[28%]", rotate: -10, delay: 0.36, floatY: [0, -6, 0], floatDur: 3.9 },
  { label: "Reminders", icon: <NotesIcon />, color: "#ffc857", pos: "left-[35%] top-[-3%]", rotate: 17, delay: 0.48, floatY: [0, -11, 0], floatDur: 3.3 },
  { label: "Budgets", icon: <BudgetIcon />, color: "#26e6a3", pos: "left-[3%] bottom-[5%]", rotate: -5, delay: 0.6, floatY: [0, -8, 0], floatDur: 4.4 },
  { label: "Spreadsheets", icon: <SpreadsheetIcon />, color: "#7c5cff", pos: "right-[2%] bottom-[2%]", rotate: 8, delay: 0.72, floatY: [0, -5, 0], floatDur: 5.0 },
];

const painPoints = [
  "Not knowing if a transaction cleared",
  "Losing track of a budget halfway through the month",
  "Feeling like your money is everywhere and nowhere",
];

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
          <div className="relative perspective-[1200px] min-h-[580px]">
            {/* Atmosphere: warm edges → cool center */}
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_50%_50%,rgba(38,230,163,0.15),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,107,138,0.12),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(255,200,87,0.08),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,159,107,0.08),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(124,92,255,0.10),transparent_30%)] blur-2xl" />

            {/* Scattered items — chaotic perimeter */}
            {scatteredItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${item.pos} z-20 hidden sm:block`}
                style={{ rotate: `${item.rotate}deg` }}
              >
                <motion.div
                  animate={{ y: item.floatY }}
                  transition={{ duration: item.floatDur, ease: "easeInOut", repeat: Infinity }}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-2xl border shadow-2xl backdrop-blur-lg cursor-default select-none"
                  style={{
                    borderColor: `${item.color}44`,
                    background: `linear-gradient(135deg, ${item.color}15, #07101dee)`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    borderColor: item.color,
                    boxShadow: `0 0 30px ${item.color}44, 0 8px 40px rgba(0,0,0,0.4)`,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-xl"
                    style={{ background: `${item.color}20` }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <span
                    className="text-[0.78rem] font-extrabold whitespace-nowrap"
                    style={{ color: `${item.color}dd` }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* Central Prism hub — the organizing force */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              {/* Glow rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center"
              >
                {/* Outer pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.08, 0.15] }}
                  transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
                  className="absolute w-[240px] h-[240px] rounded-full border border-accent-2/20"
                  style={{
                    background: "radial-gradient(circle, rgba(38,230,163,0.06), transparent 70%)",
                  }}
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, delay: 0.3 }}
                  className="absolute w-[180px] h-[180px] rounded-full border border-accent/20"
                  style={{
                    background: "radial-gradient(circle, rgba(124,92,255,0.08), transparent 70%)",
                  }}
                />
                {/* Core card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                  className="relative w-[140px] h-[140px] rounded-[32px] border border-white/20 bg-gradient-to-br from-white/18 to-white/5 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center gap-2"
                >
                  {/* Traffic dots */}
                  <div className="flex gap-1.5 absolute top-3 left-3">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b6b]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                    <span className="w-2 h-2 rounded-full bg-[#26e6a3]" />
                  </div>
                  {/* Prism branding */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-2 to-accent flex items-center justify-center shadow-[0_0_20px_rgba(38,230,163,0.35)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#07101d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 22 12 12 22 2 12 12 2" />
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                      </svg>
                    </div>
                    <span className="text-text text-[0.85rem] font-black tracking-tight">Prism</span>
                  </div>
                  {/* Organized indicator */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_rgba(38,230,163,0.7)]" />
                    <span className="text-accent-2 text-[0.55rem] font-extrabold uppercase tracking-[0.12em]">
                      All organized
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile items */}
            <div className="sm:hidden mt-8 grid grid-cols-4 gap-2 relative z-30">
              {scatteredItems.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: item.delay }}
                  className="flex items-center gap-1.5 px-2 py-2 rounded-xl border bg-white/6"
                  style={{ borderColor: `${item.color}33` }}
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-muted text-[0.6rem] font-extrabold leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
