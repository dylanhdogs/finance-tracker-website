import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const audiences = [
  {
    title: "Households",
    desc: "Track spending, budgets, credit cards, recurring bills, savings, loans, and net worth in one structured workspace.",
    visual: "bills",
  },
  {
    title: "Budgeters",
    desc: "Plan monthly spending by category, track progress, manage recurring bills, and never wonder where your money went.",
    visual: "bars",
  },
  {
    title: "Savers & Investors",
    desc: "Monitor net worth, track savings goals, review account balances, and understand your full financial picture.",
    visual: "line",
  },
];

function AudienceVisual({ type }) {
  if (type === "bills") {
    return <div className="grid grid-cols-2 gap-2 text-xs font-bold"><span className="rounded-xl bg-white/8 p-3 text-muted">Bills<br /><b className="text-text">$2.4k</b></span><span className="rounded-xl bg-accent-2/12 p-3 text-accent-2">Saved<br /><b>$840</b></span></div>;
  }
  if (type === "bars") {
    return <div className="space-y-2">{[82, 56, 38].map((w, i) => <div key={w} className="h-3 rounded-full bg-white/10"><span className={`block h-3 rounded-full ${i === 0 ? "bg-warning" : "bg-accent-2"}`} style={{ width: `${w}%` }} /></div>)}</div>;
  }
  return <svg viewBox="0 0 180 80" className="w-full h-20" aria-hidden="true"><path d="M8 62 C34 50, 42 28, 68 38 S108 70, 130 38 S154 12, 174 18" fill="none" stroke="#26e6a3" strokeWidth="5" strokeLinecap="round" /><path d="M8 62 C34 50, 42 28, 68 38 S108 70, 130 38 S154 12, 174 18" fill="none" stroke="#5dd8ff" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export default function AudienceSection() {
  return (
    <section
      id="audience"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
        <Reveal direction="left">
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
            Who it is for
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
            Built for people who want real control over their finances
          </h2>
        </Reveal>

        <div className="space-y-4">
          {audiences.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, x: 42 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.58, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid gap-5 sm:grid-cols-[180px_1fr] items-center py-7 pl-5"
            >
              <span className="absolute left-0 top-7 bottom-7 w-1 rounded-full bg-gradient-to-b from-accent-2 to-accent" />
              <div className="relative rounded-full bg-[radial-gradient(circle,rgba(38,230,163,0.13),rgba(124,92,255,0.07)_58%,transparent_72%)] p-5 transition-transform duration-300 group-hover:scale-[1.03]">
                <AudienceVisual type={a.visual} />
              </div>
              <div>
                <span className="text-accent-2 text-xs font-black uppercase tracking-[0.18em]">Lane 0{i + 1}</span>
                <h3 className="mt-2 mb-2 text-2xl font-black tracking-tight">{a.title}</h3>
                <p className="m-0 text-muted leading-relaxed">{a.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
