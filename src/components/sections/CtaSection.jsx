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
        className="relative overflow-hidden grid md:grid-cols-[1fr_360px] gap-8 p-[clamp(24px,5vw,58px)] rounded-[42px] bg-[radial-gradient(circle_at_14%_20%,rgba(124,92,255,0.32),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(38,230,163,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.035))] shadow-2xl backdrop-blur-lg"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2 to-transparent" />
        <div className="relative z-10 flex-1">
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">Start tracking shared expenses clearly.</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[0.96] mb-5 max-w-[540px]">Make shared expenses easier to manage.</h2>
          <p className="text-muted leading-relaxed max-w-[540px]">Track what was paid, who owes who, and what has already been settled — all in one clear place.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 p-5 sm:p-6 rounded-[30px] text-center shadow-[0_22px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
          <span className="mb-4 inline-flex rounded-full bg-accent-2/14 px-3 py-1.5 text-accent-2 text-xs font-black uppercase tracking-[0.14em]">Checkout</span>
          <span className="text-muted font-black">Monthly plan</span>
          <strong className="block my-2 text-[3.4rem] sm:text-[4.4rem] font-black tracking-tight leading-none">$19.99</strong>
          <p className="text-muted mb-4">Per month · Cancel anytime</p>
          <motion.a
            href="download.html"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="block w-full relative inline-flex items-center justify-center min-h-[52px] px-6 rounded-full font-black text-[#03111a] bg-gradient-to-br from-accent-2 to-accent-3 shadow-[0_18px_50px_rgba(38,230,163,0.25)] transition-transform duration-180 no-underline hover:shadow-[0_18px_70px_rgba(38,230,163,0.45)]"
          >
            Get Prism for Desktop
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
