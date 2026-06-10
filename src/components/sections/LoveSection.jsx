import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
const reasons = [
  {
    title: "Powerful",
    desc: "Double-entry accounting so your finances always add up and your reports are always trustworthy.",
    gradient: "from-accent/22 via-white/5 to-transparent",
    visual: "ledger",
  },
  {
    title: "Private",
    desc: "Your data lives on your machine, not in the cloud. No accounts, no telemetry, no gatekeeping.",
    gradient: "from-accent-2/20 via-white/5 to-transparent",
    visual: "lock",
  },
  {
    title: "Flexible",
    desc: "Tailor every last thing to your life — budgets, categories, reports, accounts, and more.",
    gradient: "from-accent-3/18 via-white/5 to-transparent",
    visual: "sliders",
  },
];
function PillarVisual({ type }) {
  if (type === "ledger") {
    return (
      <div className="space-y-2">
        {" "}
        {["Assets", "Income", "Expenses", "Equity"].map((row, i) => (
          <div
            key={row}
            className="grid grid-cols-[1fr_72px] gap-3 text-xs font-bold"
          >
            {" "}
            <span className="border-b border-white/10 px-1 py-2 text-muted">
              {row}
            </span>{" "}
            <span
              className={`border-b border-white/10 px-1 py-2 text-right ${i % 2 ? "text-accent-3" : "text-accent-2"}`}
            >
              {i % 2 ? "DR" : "CR"}
            </span>{" "}
          </div>
        ))}{" "}
      </div>
    );
  }
  if (type === "lock") {
    return (
      <div className="relative mx-auto flex h-[150px] w-[190px] items-end justify-center">
        {" "}
        <div className="absolute top-3 h-24 w-28 rounded-t-[34px] border-[10px] border-accent-2 border-b-0 shadow-[0_0_35px_rgba(38,230,163,0.18)]" />{" "}
        <div className="relative h-24 w-40 rounded-[18px] border border-accent-2/45 bg-[#0b1f28] shadow-[0_0_55px_rgba(38,230,163,0.22)]">
          {" "}
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-accent-2" />{" "}
          <span className="absolute left-1/2 top-[58%] h-8 w-1.5 -translate-x-1/2 rounded-sm bg-accent-2" />{" "}
        </div>{" "}
      </div>
    );
  }
  return (
    <div className="space-y-5 pt-2">
      {" "}
      {[72, 46, 88].map((width, i) => (
        <div key={width}>
          {" "}
          <div className="h-2 rounded-full bg-white/12">
            {" "}
            <div
              className="relative h-2 rounded-full bg-gradient-to-r from-accent-3 to-accent-2"
              style={{ width: `${width}%` }}
            >
              {" "}
              <span className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-[#07101d] bg-white" />{" "}
            </div>{" "}
          </div>{" "}
          <span className="mt-2 block text-xs font-bold text-muted">
            {["Categories", "Reports", "Budgets"][i]}
          </span>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default function LoveSection() {
  return (
    <section
      id="love"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-\[65px\] mx-auto max-w-7xl scroll-mt-32"
    >
      {" "}
      <Reveal direction="up">
        {" "}
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          {" "}
          Why Prism{" "}
        </p>{" "}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          {" "}
          Built for people who want control &mdash; not complexity
        </h2>{" "}
      </Reveal>{" "}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {" "}
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 34, scaleY: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.64,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative min-h-[360px] sm:min-h-[430px] overflow-hidden p-6 sm:p-8 ${r.visual === "ledger" ? "rounded-[14px_46px_28px_46px] shadow-[24px_24px_90px_rgba(124,92,255,0.10)]" : r.visual === "lock" ? "rounded-[28px_46px_28px_46px] shadow-[0_0_110px_rgba(38,230,163,0.13)]" : "rounded-[46px_14px_46px_28px] shadow-[-24px_24px_90px_rgba(93,216,255,0.10)]"}`}
          >
            {" "}
            <div
              className={`absolute inset-0 -z-10 ${r.visual === "ledger" ? "bg-[radial-gradient(circle_at_22%_18%,rgba(124,92,255,0.16),transparent_45%)]" : r.visual === "lock" ? "bg-[radial-gradient(circle,rgba(38,230,163,0.14),transparent_62%)]" : "bg-[linear-gradient(145deg,rgba(93,216,255,0.13),transparent_58%)]"}`}
            />{" "}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-2/70 to-transparent" />{" "}
            <div className="min-h-[170px]">
              {" "}
              <PillarVisual type={r.visual} />{" "}
            </div>{" "}
            <div className="mt-10">
              {" "}
              <h3 className="text-3xl font-black tracking-tight mb-3">
                {r.title}
              </h3>{" "}
              <p className="m-0 text-muted leading-relaxed">{r.desc}</p>{" "}
            </div>{" "}
          </motion.article>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
