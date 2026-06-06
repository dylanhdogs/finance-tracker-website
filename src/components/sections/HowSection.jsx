import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const features = [
  { title: "Accounts", desc: "Checking, savings, credit, loans, investments.", pos: "lg:left-0 lg:top-[14%]", line: "M 180 105 C 320 105, 360 175, 480 230" },
  { title: "Transactions", desc: "Categorized income and spending.", pos: "lg:right-0 lg:top-[12%]", line: "M 1010 105 C 860 120, 820 175, 710 230" },
  { title: "Budgets", desc: "Monthly plans with live progress.", pos: "lg:left-[6%] lg:bottom-[20%]", line: "M 225 415 C 345 370, 390 335, 490 305" },
  { title: "Vendors", desc: "Know who gets paid and why.", pos: "lg:right-[4%] lg:bottom-[24%]", line: "M 970 405 C 855 360, 805 335, 710 305" },
  { title: "Reports", desc: "P&L, balance sheet, trends.", pos: "lg:left-[28%] lg:bottom-0", line: "M 430 515 C 500 430, 520 365, 560 330" },
  { title: "Planning", desc: "Decisions from real data.", pos: "lg:right-[29%] lg:bottom-0", line: "M 780 515 C 705 430, 680 365, 635 330" },
];

export default function HowSection() {
  return (
    <section
      id="how"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          How Prism helps
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          One place for your entire financial life
        </h2>
      </Reveal>

      <div className="relative mt-14 min-h-[650px] max-lg:min-h-0">
        <svg className="absolute inset-0 hidden lg:block w-full h-full" viewBox="0 0 1200 650" preserveAspectRatio="none" aria-hidden="true">
          {features.map((feature, i) => (
            <motion.path
              key={feature.title}
              d={feature.line}
              fill="none"
              stroke="url(#howLine)"
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
          <defs>
            <linearGradient id="howLine" x1="0" x2="1">
              <stop stopColor="#5dd8ff" stopOpacity="0.15" />
              <stop offset="1" stopColor="#26e6a3" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-[640px] overflow-hidden rounded-[34px] border border-white/16 bg-[#07101d]/80 shadow-[0_30px_120px_rgba(0,0,0,0.34),0_0_80px_rgba(38,230,163,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/12 bg-white/6">
            <div className="flex gap-2"><span className="w-3 h-3 rounded-full bg-[#ff6b6b]" /><span className="w-3 h-3 rounded-full bg-[#ffc857]" /><span className="w-3 h-3 rounded-full bg-accent-2" /></div>
            <strong className="text-muted text-xs uppercase tracking-[0.18em]">Command center</strong>
          </div>
          <div className="grid sm:grid-cols-[0.8fr_1.2fr] min-h-[390px]">
            <aside className="p-5 border-r border-white/10 bg-black/15 max-sm:border-r-0 max-sm:border-b">
              {features.map((feature, i) => (
                <div key={feature.title} className={`mb-2.5 px-3 py-3 rounded-2xl ${i === 1 ? "bg-accent-2/14 text-text" : "text-muted"}`}>
                  <span className="text-xs font-black uppercase tracking-[0.14em]">{feature.title}</span>
                </div>
              ))}
            </aside>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="text-muted text-xs font-black uppercase tracking-[0.16em]">June overview</span>
                  <strong className="block text-3xl mt-2 tracking-tight">$84,210</strong>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-accent-2/14 text-accent-2 text-xs font-black">Balanced</span>
              </div>
              <div className="space-y-3">
                {["Checking reconciled", "Mortgage categorized", "Groceries budget 72%", "P&L ready to print"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${i === 2 ? "bg-warning" : "bg-accent-2"}`} />
                    <span className="text-sm text-muted font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-3 lg:block lg:mt-0">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:absolute ${feature.pos} max-lg:flex max-lg:items-start max-lg:gap-4 max-lg:border-b max-lg:border-white/10 max-lg:pb-5 lg:w-[210px]`}
            >
              <span className="inline-flex shrink-0 items-center justify-center text-accent-2 font-black tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-3">
                <h3 className="text-lg font-black mb-1 flex items-center gap-2"><span className="hidden lg:inline-block w-2 h-2 rounded-full bg-accent-2 shadow-[0_0_16px_rgba(38,230,163,0.9)]" />{feature.title}</h3>
                <p className="m-0 text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
