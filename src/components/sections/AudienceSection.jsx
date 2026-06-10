import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const audiences = [
  {
    title: "Roommates & Housemates",
    desc: "Split rent, utilities, groceries, and household bills without messy notes or awkward reminders.",
    visual: "bills",
  },
  {
    title: "Couples & Families",
    desc: "See who paid for what, keep shared costs clear, and settle balances without arguments.",
    visual: "bars",
  },
  {
    title: "Trips & Small Groups",
    desc: "Track trip costs, group purchases, and shared spending so everyone knows where they stand.",
    visual: "line",
  },
];

function AudienceVisual({ type }) {
  if (type === "bills") {
    return <div className="grid grid-cols-2 gap-5 text-xs font-bold"><span className="text-muted">Bills<br /><b className="text-text text-lg">$2.4k</b></span><span className="text-accent-2">Saved<br /><b className="text-lg">$840</b></span></div>;
  }
  if (type === "bars") {
    return <div className="space-y-2">{[82, 56, 38].map((w, i) => <div key={w} className="h-3 rounded-full bg-white/10"><span className={`block h-3 rounded-full ${i === 0 ? "bg-warning" : "bg-accent-2"}`} style={{ width: `${w}%` }} /></div>)}</div>;
  }
  return (
    <svg viewBox="0 0 180 80" className="w-full h-20" aria-hidden="true">
      <path d="M8 62 C34 50, 42 28, 68 38 S108 70, 130 38 S154 12, 174 18" fill="none" stroke="#26e6a3" strokeWidth="5" strokeLinecap="round" />
      <path d="M8 62 C34 50, 42 28, 68 38 S108 70, 130 38 S154 12, 174 18" fill="none" stroke="#5dd8ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AudienceSection() {
  return (
    <section id="audience" className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
        <Reveal direction="left">
          <div className="flex flex-col gap-4">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase">Who this is for</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] max-w-[620px]">Built for shared costs</h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px]">Prism is built around shared bills, trips, households, and groups — not spreadsheets or general budgeting apps.</p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] font-bold">If you split rent, groceries, trips, or household costs, this is for you.</p>
          </div>
        </Reveal>
        <Reveal direction="right" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {audiences.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className="rounded-[26px] border border-white/12 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-xl backdrop-blur-md">
              <div className="mb-3 h-20 rounded-xl border border-white/10 bg-white/6 p-3">
                <AudienceVisual type={item.visual} />
              </div>
              <h3 className="text-text text-[0.92rem] font-extrabold mb-2">{item.title}</h3>
              <p className="text-muted text-[0.88rem] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
