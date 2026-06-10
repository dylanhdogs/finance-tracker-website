import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
export default function CtaSection() {
  return (
    <section id="cta" className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden grid md:grid-cols-[1fr_360px] gap-8 p-[clamp(24px,5vw,58px)] rounded-[42px] border border-white/[0.06] bg-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl glow-border"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(99,102,241,0.15),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(139,92,246,0.1),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/40 to-transparent" />
        <div className="relative z-10 flex-1">
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">Start tracking shared expenses clearly.</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[0.96] mb-5 max-w-[540px]">Make shared expenses <span className="section-gradient-text">easier</span> to manage.</h2>
          <p className="text-muted leading-relaxed max-w-[540px]">Track what was paid, who owes who, and what has already been settled — all in one clear place.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 p-5 sm:p-6 rounded-[30px] text-center border border-white/[0.08] bg-white/[0.03] shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
        >
          <span className="mb-4 inline-flex rounded-full bg-accent-2/10 px-3 py-1.5 text-accent-2 text-xs font-black uppercase tracking-[0.14em]">Checkout</span>
          <span className="text-muted font-black">Monthly plan</span>
          <strong className="block my-2 text-[3.4rem] sm:text-[4.4rem] font-black tracking-tight leading-none">$19.99</strong>
          <p className="text-muted mb-4">Per month · Cancel anytime</p>
          <motion.a
            href="/download.html"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-border-button block w-full relative inline-flex items-center justify-center min-h-[52px] px-6 rounded-full font-black text-[#03111a] bg-gradient-to-r from-accent-2 via-accent-3 to-accent shadow-[0_0_30px_rgba(99,102,241,0.15),0_18px_50px_rgba(139,92,246,0.2)] transition-all duration-300 no-underline hover:shadow-[0_0_40px_rgba(99,102,241,0.25),0_18px_70px_rgba(139,92,246,0.35)]"
          >
            Get PRISM Desktop
          </motion.a>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[0.72rem] font-black text-muted">
            <span>Local data</span>
            <span>Cancel anytime</span>
            <span>Windows 10+</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
