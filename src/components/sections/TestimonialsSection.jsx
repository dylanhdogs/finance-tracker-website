import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
const testimonials = [
  {
    quote:
      "Roommate bills used to take forever. Now I just enter the expense in PRISM and it shows exactly who owes who at a glance.",
    initial: "M",
    name: "Marcus R.",
    role: "Renter",
    color: "var(--color-accent)",
  },
  {
    quote:
      "We used notes and spreadsheets for group trips. PRISM made it clear who paid and what still needed to be split.",
    initial: "S",
    name: "Sarah K.",
    role: "Trip organizer",
    color: "var(--color-accent-2)",
  },
  {
    quote:
      "Family expenses used to get messy. PRISM keeps shared bills clear so we can settle balances easily.",
    initial: "D",
    name: "Danielle P.",
    role: "Household manager",
    color: "var(--color-accent-3)",
  },
];
export default function TestimonialsSection() {
  const [main, ...secondary] = testimonials;
  return (
    <section
      id="testimonials"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-white/70 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          What users are saying about PRISM
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 mt-12">
        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-2 sm:p-6 rounded-[28px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.2)] glow-border"
        >
          <span className="absolute right-8 top-2 text-[9rem] leading-none text-white/[0.03] font-serif">&ldquo;</span>
          <blockquote className="relative z-10 m-0 max-w-[720px] text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
            {main.quote}
          </blockquote>
          <div className="relative z-10 mt-10 flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-black text-xl shadow-[0_0_20px_rgba(168,85,247,0.2)]">{main.initial}</div>
            <div><cite className="not-italic font-black block">{main.name}</cite><span className="text-muted text-sm">{main.role}</span></div>
          </div>
        </motion.article>
        <div className="grid gap-5">
          {secondary.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.58, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden p-6 pl-8 rounded-[28px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            >
              <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-accent-2 to-accent-3" />
              <span className="absolute right-5 top-1 text-6xl text-white/[0.03] font-serif">&ldquo;</span>
              <blockquote className="relative z-10 m-0 text-muted leading-relaxed">{t.quote}</blockquote>
              <div className="relative z-10 mt-6 flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full font-black bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${t.color}, rgba(255,255,255,0.05))` }}>{t.initial}</div>
                <div><cite className="not-italic font-bold block">{t.name}</cite><span className="text-muted text-xs">{t.role}</span></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
