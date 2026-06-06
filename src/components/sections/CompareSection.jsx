import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const rows = [
  { label: "Target", prism: "Personal", qb: "Business", mint: "Budgeting", sheets: "General" },
  { label: "Double-entry", prism: "\u2713", qb: "\u2713", mint: "\u2717", sheets: "Manual" },
  { label: "Chart of Accounts", prism: "\u2713", qb: "\u2713", mint: "\u2717", sheets: "Manual" },
  { label: "Local / Offline", prism: "\u2713", qb: "\u2717", mint: "\u2717", sheets: "\u2713" },
  { label: "Reconciliation", prism: "\u2713", qb: "\u2713", mint: "\u2717", sheets: "\u2717" },
  { label: "Budget Tracking", prism: "\u2713", qb: "\u2717", mint: "\u2713", sheets: "Manual" },
  { label: "Reports (P&L / BS)", prism: "\u2713", qb: "\u2713", mint: "\u2717", sheets: "Manual" },
  { label: "CSV / Excel Import", prism: "\u2713", qb: "\u2713", mint: "\u2713", sheets: "\u2713" },
  { label: "Price", prism: "$20/mo", qb: "$30+/mo", mint: "Free (ads)", sheets: "Free" },
];

const columns = [
  { key: "prism", label: "Prism" },
  { key: "qb", label: "QuickBooks" },
  { key: "mint", label: "Mint" },
  { key: "sheets", label: "Spreadsheets" },
];

function Cell({ value }) {
  if (value === "\u2713") return <span className="text-accent-2 font-black">{value}</span>;
  if (value === "\u2717") return <span className="text-[#ff6b6b] font-black">{value}</span>;
  if (value === "$20/mo") return <strong className="text-text">{value}</strong>;
  return <span>{value}</span>;
}

export default function CompareSection() {
  return (
    <section
      id="compare"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          Comparison
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          Prism vs. the alternatives
        </h2>
      </Reveal>

      <Reveal direction="fade" delay={0.1}>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-[0.9rem]">
            <thead>
              <tr>
                <th className="p-4 text-left font-black tracking-tight text-muted border-b border-white/14" />
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`p-4 text-left font-black tracking-tight border-b border-white/14 ${
                      col.key === "prism" ? "text-accent-2" : "text-muted"
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="hover:bg-white/4 transition-colors duration-180"
                >
                  <td className="p-4 text-left font-bold text-text border-b border-white/14 whitespace-nowrap">
                    {row.label}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`p-4 text-left border-b border-white/14 whitespace-nowrap ${
                        col.key === "prism" ? "text-text" : "text-muted"
                      }`}
                    >
                      <Cell value={row[col.key]} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden grid gap-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 border border-white/14 rounded-2xl bg-white/5 backdrop-blur-lg"
            >
              <div className="font-bold text-text mb-3 text-[0.95rem]">
                {row.label}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className={`text-sm ${
                      col.key === "prism" ? "text-text" : "text-muted"
                    }`}
                  >
                    <span className="text-muted text-[0.75rem] font-bold uppercase block mb-0.5">
                      {col.label}
                    </span>
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
