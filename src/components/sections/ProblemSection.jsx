import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const scatteredItems = [
  { label: "Bank Accounts", icon: "🏦", pos: "top-[6%] left-[2%]", delay: 0 },
  { label: "Credit Cards", icon: "💳", pos: "top-[2%] right-[8%]", delay: 0.15 },
  { label: "Bills", icon: "📋", pos: "bottom-[28%] left-[0%]", delay: 0.3 },
  { label: "Spreadsheets", icon: "📊", pos: "bottom-[2%] right-[4%]", delay: 0.45 },
  { label: "Budgets", icon: "🎯", pos: "bottom-[2%] left-[6%]", delay: 0.6 },
  { label: "Receipts", icon: "🧾", pos: "top-[34%] -right-[2%]", delay: 0.75 },
];

const painPoints = [
  "Your spending is hard to track",
  "Your budgets are easy to lose sight of",
  "Your accounts do not always match",
  "Your reports take too much time to build",
  "Your financial picture feels scattered",
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
              The problem
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              Managing Money Gets Messy Fast
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-8">
              Your money moves through different accounts, cards, bills, budgets,
              and spreadsheets. Before long, it becomes hard to see what came in,
              what went out, and what needs attention.
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
          <div className="relative perspective-[1200px] min-h-[520px]">
            {/* Background glow */}
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_70%_20%,rgba(38,230,163,0.25),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(124,92,255,0.25),transparent_40%)] blur-2xl" />

            {/* Scattered items floating around */}
            {scatteredItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                animate={{ y: [0, -10, 0] }}
                className={`absolute ${item.pos} z-20 hidden sm:flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-white/14 bg-[#07101d]/85 shadow-2xl backdrop-blur-lg`}
                style={{ animation: `float 4s ${item.delay}s ease-in-out infinite` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-muted text-[0.82rem] font-extrabold whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            ))}

            {/* Connecting arrows (decorative SVG) */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none max-lg:hidden"
              viewBox="0 0 600 520"
              fill="none"
              aria-hidden="true"
            >
              {[
                "M 60 80 C 160 100, 200 140, 280 200",
                "M 540 60 C 440 110, 380 150, 310 210",
                "M 40 340 C 140 320, 210 270, 280 240",
                "M 560 460 C 430 400, 370 320, 310 260",
                "M 60 480 C 160 410, 230 320, 280 260",
                "M 580 200 C 470 220, 390 230, 310 240",
              ].map((path, i) => (
                <motion.path
                  key={i}
                  d={path}
                  stroke="url(#problemGlow)"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
              <defs>
                <linearGradient id="problemGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#7c5cff" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#26e6a3" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Prism mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-auto mt-16 sm:mt-20 max-w-[420px]"
            >
              <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_30%_20%,rgba(38,230,163,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,92,255,0.15),transparent_50%)] blur-xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                className="relative overflow-hidden border border-white/18 rounded-[30px] bg-gradient-to-br from-white/16 to-white/5 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Traffic lights */}
                <div className="flex gap-2 items-center px-[18px] py-4 border-b border-white/14 bg-white/6">
                  <span className="w-[11px] h-[11px] rounded-full bg-[#ff6b6b]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#ffd166]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#26e6a3]" />
                  <strong className="ml-2.5 text-muted text-[0.82rem]">Prism</strong>
                </div>
                {/* Mockup content */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted text-[0.72rem] font-extrabold uppercase tracking-[0.14em]">
                      All Accounts
                    </span>
                    <strong className="text-xl tracking-tight">$84,210</strong>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    {[
                      { label: "Checking", val: "$12.4k", accent: "from-accent-2 to-accent" },
                      { label: "Savings", val: "$48.2k", accent: "from-accent-3 to-accent-2" },
                      { label: "Credit", val: "$2.1k", accent: "from-accent to-accent-3" },
                    ].map((m) => (
                      <article
                        key={m.label}
                        className="p-3 border border-white/14 rounded-[16px] bg-white/6"
                      >
                        <span className="text-muted text-[0.68rem] font-extrabold uppercase block">
                          {m.label}
                        </span>
                        <strong className="block mt-1.5 text-[0.95rem]">{m.val}</strong>
                        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${m.accent}`}
                            style={{ width: `${60 + Math.random() * 30}%` }}
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="relative h-[100px] p-4 border border-white/14 rounded-2xl bg-gradient-to-b from-white/10 to-white/3.5 overflow-hidden">
                    <div className="absolute inset-x-4 top-5 bottom-5 grid grid-rows-3 opacity-20">
                      {[0, 1, 2].map((line) => (
                        <span key={line} className="border-t border-white/20" />
                      ))}
                    </div>
                    <div className="relative z-10 flex items-end gap-3 h-full">
                      {[
                        { h: "38%", d: 80 },
                        { h: "68%", d: 140 },
                        { h: "54%", d: 200 },
                        { h: "82%", d: 260 },
                        { h: "60%", d: 320 },
                        { h: "88%", d: 380 },
                      ].map((bar, i) => (
                        <div
                          key={i}
                          className="flex-1 min-w-[14px] rounded-t-full bg-gradient-to-b from-accent-2 to-accent"
                          style={{
                            height: bar.h,
                            animation: `grow 1s ${bar.d}ms cubic-bezier(0.2, 0.8, 0.2, 1) both`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-muted text-[0.75rem]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-2" />
                      All reconciled
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-3" />
                      Budgets on track
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Reports ready
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile scattered items (simplified) */}
            <div className="sm:hidden mt-8 grid grid-cols-3 gap-2.5">
              {scatteredItems.slice(0, 6).map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/14 bg-white/6"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-muted text-[0.72rem] font-extrabold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
