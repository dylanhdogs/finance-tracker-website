import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
import StaggerContainer, { staggerItemLeft, staggerItem, staggerItemRight } from "../animations/StaggerContainer";

const testimonials = [
  {
    quote:
      "I tried QuickBooks for my personal finances and it was a nightmare. Prism gives me the same accounting structure without all the business clutter. The reconciliation feature alone saved me hours.",
    initial: "M",
    name: "Marcus R.",
    role: "Freelancer",
    color: "var(--color-accent)",
  },
  {
    quote:
      "I've been a spreadsheet person for years, but keeping my books in Excel was getting ridiculous. Prism gave me structure, real reports, and peace of mind. I actually look forward to reconciling now.",
    initial: "S",
    name: "Sarah K.",
    role: "Homeowner",
    color: "var(--color-accent-2)",
  },
  {
    quote:
      "Every budgeting app I tried was missing the accounting piece. Prism is the first tool that gives me both \u2014 a clear view of my spending and proper books I can trust.",
    initial: "D",
    name: "Danielle P.",
    role: "Investor",
    color: "var(--color-accent-3)",
  },
];

const staggerVariants = [staggerItemLeft, staggerItem, staggerItemRight];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          What users are saying about Prism
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {testimonials.map((t, i) => {
          const variants = staggerVariants[i] || staggerItem;
          return (
            <motion.article
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: variants.hidden,
                visible: {
                  ...variants.visible,
                  transition: {
                    ...variants.visible.transition,
                    delay: i * 0.1,
                  },
                },
              }}
              className="flex flex-col p-8 sm:p-[26px] border border-white/14 rounded-[28px] bg-white/5 shadow-2xl backdrop-blur-lg transition-all duration-320 hover:-translate-y-2 hover:border-accent-2/34 hover:shadow-[0_18px_60px_rgba(0,0,0,0.18),0_0_40px_rgba(38,230,163,0.08)]"
            >
              <blockquote className="m-0 mb-6 text-text text-[0.95rem] leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3.5">
                <div
                  className="w-[42px] h-[42px] flex items-center justify-center rounded-full font-black text-[1.1rem] shrink-0 bg-gradient-to-br"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, rgba(255,255,255,0.1))`,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <cite className="not-italic font-bold block">{t.name}</cite>
                  <span className="text-muted text-[0.82rem]">{t.role}</span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
