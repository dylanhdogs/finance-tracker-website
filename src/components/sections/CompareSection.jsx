import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
const rows = [
  { label: "Built for", prism: "Shared expenses", qb: "Small business operations", mint: "Budget tracking only", sheets: "You build it" },
  { label: "Who paid / who owes who", prism: "✓", qb: "✗", mint: "✗", sheets: "Manual setup" },
  { label: "Automatic balance calculations", prism: "✓", qb: "✗", mint: "✗", sheets: "Manual setup" },
  { label: "Local / Offline", prism: "✓", qb: "✗", mint: "✗", sheets: "✓" },
  { label: "Settle balances", prism: "✓", qb: "✗", mint: "✗", sheets: "Manual setup" },
  { label: "Group expenses", prism: "✓", qb: "✗", mint: "✗", sheets: "Manual setup" },
  { label: "Reports", prism: "✓", qb: "✓", mint: "✗", sheets: "Manual setup" },
  { label: "CSV / Excel import", prism: "✓", qb: "✓", mint: "✓", sheets: "✓" },
  { label: "Your data stays private", prism: "On your device", qb: "Cloud required", mint: "Cloud required", sheets: "Local files" },
  { label: "Where the others fall short", prism: "Built for shared costs", qb: "Designed for business", mint: "Made for targets", sheets: "Built for spreadsheets" },
];
const columns = [
  { key: "prism", label: "PRISM" },
  { key: "qb", label: "QuickBooks" },
  { key: "mint", label: "Mint" },
  { key: "sheets", label: "Spreadsheets" },
];
function Cell({ value }) {
  if (value === "✓")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-2/12 text-lg font-black text-accent-2 shadow-[0_0_20px_rgba(139,92,246,0.12)]">
        {value}
      </span>
    );
  if (value === "✗")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff6b6b]/10 text-lg font-black text-[#ff8585]">
        {value}
      </span>
    );
  return <span>{value}</span>;
}
export default function CompareSection() {
  return (
    <section id="compare" className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32">
      <Reveal direction="up">
        <p className="text-white text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">Built for shared expenses</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">Clear shared expenses. <span className="section-gradient-text">No confusion</span></h2>
        <p className="text-muted text-[1.12rem] leading-relaxed max-w-[620px]">Most spreadsheets, cloud apps, and business tools were not built for shared costs. PRISM is.</p>
      </Reveal>
      <Reveal direction="fade" delay={0.1}>
        <div className="hidden lg:block mt-12 overflow-hidden rounded-[34px] border border-white/[0.06] bg-white/[0.02] p-2 shadow-[0_0_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl glow-border">
          <table className="w-full min-w-[860px] border-separate border-spacing-0 text-[0.95rem]">
            <thead>
              <tr className="bg-white/[0.03]">
                <th className="rounded-tl-[26px] border-b border-white/[0.06] p-5 text-left font-black tracking-tight text-[#d8e4ef]" />
                {columns.map((col) => (
                  <th key={col.key} className={`relative border-b border-white/[0.06] p-5 text-left font-black tracking-tight ${col.key === "prism" ? "text-accent-2 bg-accent-2/[0.06] shadow-[inset_0_0_60px_rgba(139,92,246,0.06)]" : "text-[#d8e4ef]"} ${col.key === "sheets" ? "rounded-tr-[26px]" : ""}`}>
                    {col.label}
                    {col.key === "prism" && (
                      <span className="mt-2 block w-fit rounded-full bg-accent-2 px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#03111a] shadow-[0_0_20px_rgba(139,92,246,0.15)]">Built for personal finance</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr key={row.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }} className={`${i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"} transition-colors duration-200 hover:bg-white/[0.04]`}>
                  <td className={`border-b border-white/[0.06] p-5 text-left font-bold text-text whitespace-nowrap ${i === rows.length - 1 ? "rounded-bl-[26px]" : ""}`}>{row.label}</td>
                  {columns.map((col) => (
                    <td key={col.key} className={`border-b border-white/[0.06] p-5 text-left whitespace-nowrap ${col.key === "prism" ? "text-text bg-accent-2/[0.05] shadow-[inset_1px_0_0_rgba(139,92,246,0.1),inset_-1px_0_0_rgba(56,189,246,0.08)]" : "text-[#c9d6e2]"} ${i === rows.length - 1 && col.key === "sheets" ? "rounded-br-[26px]" : ""}`}>
                      <Cell value={row[col.key]} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:hidden grid gap-3 mt-8">
          {rows.map((row, i) => (
            <motion.div key={row.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }} className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-4 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <div className="font-black text-text mb-3 text-[0.95rem]">{row.label}</div>
              <div className="grid grid-cols-2 gap-3">
                {columns.map((col) => (
                  <div key={col.key} className={`rounded-2xl border p-3 text-sm ${col.key === "prism" ? "border-accent-2/15 bg-accent-2/[0.05] text-text shadow-[inset_0_0_24px_rgba(139,92,246,0.05)]" : "border-white/[0.06] bg-white/[0.02] text-[#c9d6e2]"}`}>
                    <span className={`text-[0.75rem] font-black uppercase tracking-[0.08em] block mb-1.5 ${col.key === "prism" ? "text-accent-2" : "text-[#9fb0bf]"}`}>{col.label}</span>
                    <Cell value={row[col.key]} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
