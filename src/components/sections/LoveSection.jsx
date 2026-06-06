import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const reasons = [
  {
    title: "Powerful",
    desc: "Uses real accounting principles for complete accuracy.",
    gradient: "from-accent/22 via-white/5 to-transparent",
    visual: "ledger",
  },
  {
    title: "Private",
    desc: "Your data stays on your computer.",
    gradient: "from-accent-2/20 via-white/5 to-transparent",
    visual: "lock",
  },
  {
    title: "Flexible",
    desc: "Customize categories, accounts, vendors, budgets, and reports to fit your life.",
    gradient: "from-accent-3/18 via-white/5 to-transparent",
    visual: "sliders",
  },
];

function PillarVisual({ type }) {
  if (type === "ledger") {
    return (
      <div className="space-y-2">
        {["Assets", "Income", "Expenses", "Equity"].map((row, i) => (
          <div key={row} className="grid grid-cols-[1fr_72px] gap-3 text-xs font-bold">
            <span className="rounded-lg bg-white/8 px-3 py-2 text-muted">{row}</span>
            <span className={`rounded-lg px-3 py-2 text-right ${i % 2 ? "bg-accent/18 text-accent-3" : "bg-accent-2/14 text-accent-2"}`}>{i % 2 ? "DR" : "CR"}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "lock") {
    return (
      <div className="relative mx-auto flex h-[150px] w-[190px] items-end justify-center">
        <div className="absolute top-3 h-24 w-28 rounded-t-[48px] border-[10px] border-accent-2/70 border-b-0" />
        <div className="relative h-24 w-40 rounded-[24px] border border-accent-2/30 bg-accent-2/14 shadow-[0_0_55px_rgba(38,230,163,0.16)]">
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2" />
          <span className="absolute left-1/2 top-[58%] h-8 w-1.5 -translate-x-1/2 rounded-full bg-accent-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 pt-2">
      {[72, 46, 88].map((width, i) => (
        <div key={width}>
          <div className="h-2 rounded-full bg-white/12">
            <div className="relative h-2 rounded-full bg-gradient-to-r from-accent-3 to-accent-2" style={{ width: `${width}%` }}>
              <span className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-[#07101d] bg-white" />
            </div>
          </div>
          <span className="mt-2 block text-xs font-bold text-muted">{["Categories", "Reports", "Budgets"][i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function LoveSection() {
  return (
    <section
      id="love"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          Why people love Prism
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          Built for people who want control &mdash; not complexity
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 34, scaleY: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.64, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative min-h-[430px] overflow-hidden p-7 sm:p-8 shadow-2xl ${
              r.visual === "ledger"
                ? `rounded-[14px_46px_28px_46px] bg-gradient-to-br ${r.gradient}`
                : r.visual === "lock"
                  ? "rounded-full lg:rounded-[999px] bg-[#050911] shadow-[0_0_90px_rgba(38,230,163,0.12)]"
                  : `rounded-[46px_14px_46px_28px] bg-[linear-gradient(145deg,rgba(93,216,255,0.18)_0%,rgba(93,216,255,0.18)_48%,rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.015)_100%)]`
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-2/70 to-transparent" />
            <span className="text-muted text-xs font-black uppercase tracking-[0.18em]">0{i + 1}</span>
            <div className="mt-8 min-h-[170px]">
              <PillarVisual type={r.visual} />
            </div>
            <div className="mt-10">
              <h3 className="text-3xl font-black tracking-tight mb-3">{r.title}</h3>
              <p className="m-0 text-muted leading-relaxed">{r.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
