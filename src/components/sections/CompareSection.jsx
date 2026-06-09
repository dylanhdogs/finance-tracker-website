import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
const rows = [
  {
    label: "Target",
    prism: "Personal",
    qb: "Business",
    mint: "Budgeting",
    sheets: "General",
  },
  {
    label: "Double-entry",
    prism: "\u2713",
    qb: "\u2713",
    mint: "\u2717",
    sheets: "Manual",
  },
  {
    label: "Chart of Accounts",
    prism: "\u2713",
    qb: "\u2713",
    mint: "\u2717",
    sheets: "Manual",
  },
  {
    label: "Local / Offline",
    prism: "\u2713",
    qb: "\u2717",
    mint: "\u2717",
    sheets: "\u2713",
  },
  {
    label: "Reconciliation",
    prism: "\u2713",
    qb: "\u2713",
    mint: "\u2717",
    sheets: "\u2717",
  },
  {
    label: "Budget Tracking",
    prism: "\u2713",
    qb: "\u2717",
    mint: "\u2713",
    sheets: "Manual",
  },
  {
    label: "Reports (P&L / BS)",
    prism: "\u2713",
    qb: "\u2713",
    mint: "\u2717",
    sheets: "Manual",
  },
  {
    label: "CSV / Excel Import",
    prism: "\u2713",
    qb: "\u2713",
    mint: "\u2713",
    sheets: "\u2713",
  },
  {
    label: "Price",
    prism: "$20/mo",
    qb: "$30+/mo",
    mint: "Free (ads)",
    sheets: "Free",
  },
];
const columns = [
  { key: "prism", label: "Prism" },
  { key: "qb", label: "QuickBooks" },
  { key: "mint", label: "Mint" },
  { key: "sheets", label: "Spreadsheets" },
];
function Cell({ value }) {
  if (value === "\u2713")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-2/16 text-lg font-black text-accent-2 shadow-[0_0_24px_rgba(38,230,163,0.16)]">
        {value}
      </span>
    );
  if (value === "\u2717")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff6b6b]/13 text-lg font-black text-[#ff8585]">
        {value}
      </span>
    );
  if (value === "$20/mo") return <strong className="text-text">{value}</strong>;
  return <span>{value}</span>;
}
export default function CompareSection() {
  return (
    <section
      id="compare"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-\[65px\] mx-auto max-w-7xl scroll-mt-32"
    >
      {" "}
      <Reveal direction="up">
        {" "}
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          {" "}
          The smarter choice{" "}
        </p>{" "}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          {" "}
          Prism does what the others can't{" "}
        </h2>{" "}
      </Reveal>{" "}
      <Reveal direction="fade" delay={0.1}>
        {" "}
        <div className="hidden md:block mt-12 overflow-x-auto rounded-[34px] border border-white/12 bg-[radial-gradient(circle_at_24%_0%,rgba(38,230,163,0.14),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(124,92,255,0.12),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-2 shadow-[0_28px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          {" "}
          <table className="w-full min-w-[860px] border-separate border-spacing-0 text-[0.95rem]">
            {" "}
            <thead>
              {" "}
              <tr className="bg-[#07101d]/78">
                {" "}
                <th className="rounded-tl-[26px] border-b border-white/14 p-5 text-left font-black tracking-tight text-[#d8e4ef]" />{" "}
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`relative border-b border-white/14 p-5 text-left font-black tracking-tight ${col.key === "prism" ? "text-accent-2 bg-accent-2/12 shadow-[inset_0_0_70px_rgba(38,230,163,0.13)]" : "text-[#d8e4ef]"} ${col.key === "sheets" ? "rounded-tr-[26px]" : ""}`}
                  >
                    {" "}
                    {col.label}{" "}
                    {col.key === "prism" && (
                      <span className="mt-2 block w-fit rounded-full bg-accent-2 px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#03111a] shadow-[0_10px_30px_rgba(38,230,163,0.22)]">
                        For your personal finances
                      </span>
                    )}{" "}
                  </th>
                ))}{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${i % 2 === 0 ? "bg-white/[0.025]" : "bg-[#07101d]/32"} transition-colors duration-180 hover:bg-white/[0.075]`}
                >
                  {" "}
                  <td
                    className={`border-b border-white/12 p-5 text-left font-bold text-text whitespace-nowrap ${i === rows.length - 1 ? "rounded-bl-[26px]" : ""}`}
                  >
                    {" "}
                    {row.label}{" "}
                  </td>{" "}
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`border-b border-white/12 p-5 text-left whitespace-nowrap ${col.key === "prism" ? "text-text bg-accent-2/8 shadow-[inset_1px_0_0_rgba(38,230,163,0.18),inset_-1px_0_0_rgba(93,216,255,0.14)]" : "text-[#c9d6e2]"} ${i === rows.length - 1 && col.key === "sheets" ? "rounded-br-[26px]" : ""}`}
                    >
                      {" "}
                      <Cell value={row[col.key]} />{" "}
                    </td>
                  ))}{" "}
                </motion.tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
        <div className="md:hidden grid gap-4 mt-10">
          {" "}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[24px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)]"
            >
              {" "}
              <div className="font-black text-text mb-4 text-[1rem]">
                {" "}
                {row.label}{" "}
              </div>{" "}
              <div className="grid grid-cols-2 gap-3">
                {" "}
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className={`rounded-2xl border p-3 text-sm ${col.key === "prism" ? "border-accent-2/22 bg-accent-2/9 text-text shadow-[inset_0_0_32px_rgba(38,230,163,0.08)]" : "border-white/10 bg-[#07101d]/36 text-[#c9d6e2]"}`}
                  >
                    {" "}
                    <span
                      className={`text-[0.75rem] font-black uppercase tracking-[0.08em] block mb-1.5 ${col.key === "prism" ? "text-accent-2" : "text-[#9fb0bf]"}`}
                    >
                      {" "}
                      {col.label}{" "}
                    </span>{" "}
                    <Cell value={row[col.key]} />{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </Reveal>{" "}
    </section>
  );
}
