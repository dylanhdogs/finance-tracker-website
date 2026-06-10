import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

function ScatteredCard({ x, y, angle, delay, label, title, detail, tone = "muted", className = "" }) {
  const toneClasses = {
    warning: "border-[#ff6b8a]/28 bg-[#ff6b8a]/10 text-[#ff9aaa]",
    accent: "border-accent/28 bg-accent/10 text-accent",
    cyan: "border-accent-3/28 bg-accent-3/10 text-accent-3",
    muted: "border-white/12 bg-white/7 text-muted",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: angle }}
      whileInView={{ opacity: 1, y: 0, rotate: angle }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", left: x, top: y }}
      className={`w-[210px] rounded-2xl border p-4 shadow-2xl backdrop-blur-md ${toneClasses[tone]} ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[0.66rem] font-black uppercase tracking-[0.14em]">
          {label}
        </span>
        <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_18px_currentColor]" />
      </div>
      <p className="text-text text-[0.9rem] font-black leading-tight">{title}</p>
      <p className="mt-1.5 text-[0.72rem] font-bold leading-snug text-muted">{detail}</p>
    </motion.div>
  );
}

function TangledLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-55 max-sm:opacity-35"
      viewBox="0 0 680 520"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="scatterLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6b8a" stopOpacity="0.65" />
          <stop offset="48%" stopColor="#7c5cff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#26e6a3" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {[
        "M70 92 C210 116 214 254 340 260 S492 164 612 112",
        "M80 360 C190 304 240 412 338 268 S488 296 600 382",
        "M74 246 C188 222 236 208 340 260 S482 226 608 246",
        "M170 72 C236 176 248 224 340 260 S438 356 508 438",
      ].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="url(#scatterLine)"
          strokeWidth={i === 2 ? 2.2 : 1.4}
          strokeLinecap="round"
          strokeDasharray={i % 2 ? "8 12" : "4 10"}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

function UnclearSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.72, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/16 bg-[#07101d]/72 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl max-sm:w-[210px] max-sm:p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-muted">
          financial picture
        </span>
        <span className="rounded-full border border-[#ff6b8a]/35 bg-[#ff6b8a]/12 px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.12em] text-[#ff9aaa]">
          unclear
        </span>
      </div>
      <strong className="block text-3xl font-black tracking-tight text-text blur-[1.4px] max-sm:text-2xl">
        $ ??.??
      </strong>
      <div className="mt-5 space-y-2.5">
        {[62, 86, 48].map((width, i) => (
          <div key={width} className="h-2 rounded-full bg-white/9">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${width}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.58 + i * 0.08 }}
              className="h-full rounded-full bg-gradient-to-r from-[#ff6b8a]/70 via-accent/60 to-accent-2/70 opacity-70 blur-[0.4px]"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusChip({ x, y, delay, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", left: x, top: y }}
      className={`z-20 rounded-full border border-white/14 bg-[#07101d]/78 px-3 py-2 text-[0.7rem] font-black text-muted shadow-2xl backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
        <Reveal direction="left">
          <div className="flex flex-col gap-5">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-1">
              Shared costs get messy fast
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] max-w-[760px]">
              Shared Costs Get Messy Fast
            </h2>
            <p className="text-muted text-[1rem] leading-relaxed max-w-[540px]">
              One person pays for groceries. Someone else covers dinner. Rent,
              utilities, subscriptions, trips, and random expenses pile up. Prism
              keeps shared costs clear so nobody has to guess or scroll through
              old messages.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" className="order-2 lg:order-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-[38px] border border-white/12 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,138,0.10),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(124,92,255,0.12),transparent_28%),radial-gradient(circle_at_14%_82%,rgba(38,230,163,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 shadow-2xl backdrop-blur-md sm:min-h-[520px]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
            <TangledLines />
            <ScatteredCard
              x="3%"
              y="5%"
              angle={-7}
              delay={0.1}
              label="bank"
              title="Balance alert"
              detail="Checking fell below target"
              tone="warning"
            />
            <ScatteredCard
              x="58%"
              y="8%"
              angle={5}
              delay={0.18}
              label="spreadsheet"
              title="Manual update"
              detail="Last edited 19 days ago"
              tone="accent"
              className="max-sm:hidden"
            />
            <ScatteredCard
              x="4%"
              y="66%"
              angle={4}
              delay={0.26}
              label="receipt"
              title="Uncategorized"
              detail="Dining, grocery, or transfer?"
              tone="muted"
              className="max-sm:top-[68%]"
            />
            <ScatteredCard
              x="61%"
              y="62%"
              angle={-5}
              delay={0.34}
              label="budget"
              title="Limit drifting"
              detail="Subscriptions and bills overlap"
              tone="cyan"
              className="max-sm:hidden"
            />
            <UnclearSummary />
            <StatusChip x="37%" y="11%" delay={0.46} className="max-sm:left-[46%] max-sm:top-[16%]">
              Missing category
            </StatusChip>
            <StatusChip x="62%" y="45%" delay={0.54} className="max-sm:hidden">
              Unmatched transfer
            </StatusChip>
            <StatusChip x="31%" y="83%" delay={0.62} className="max-sm:left-[42%] max-sm:top-[86%]">
              Budget drift
            </StatusChip>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
