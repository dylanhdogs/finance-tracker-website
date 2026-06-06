import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row justify-between gap-7 p-[clamp(28px,5vw,54px)] border border-white/14 rounded-[34px] bg-gradient-to-br from-accent/20 to-accent-2/8 shadow-2xl backdrop-blur-lg"
      >
        <div className="flex-1">
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[0.96] mb-5 max-w-[540px]">
            Your personal books deserve better than a spreadsheet
          </h2>
          <p className="text-muted leading-relaxed max-w-[540px]">
            Full access to every feature. Month-to-month subscription. Cancel
            anytime. Your data never leaves your machine.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-[250px] p-6 border border-white/20 rounded-[26px] bg-white/8 text-center"
        >
          <span className="text-muted font-black">Monthly plan</span>
          <strong className="block my-2 text-[4.4rem] font-black tracking-tight leading-none">
            $20
          </strong>
          <p className="text-muted mb-4">Per month &middot; Cancel anytime</p>
          <motion.a
            href="download.html"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="block w-full relative inline-flex items-center justify-center min-h-[52px] px-6 rounded-full font-black text-[#03111a] bg-gradient-to-br from-accent-2 to-accent-3 shadow-[0_18px_50px_rgba(38,230,163,0.25)] transition-transform duration-180 no-underline hover:shadow-[0_18px_70px_rgba(38,230,163,0.45)]"
          >
            Download Prism
          </motion.a>
          <p className="mt-3 text-muted text-[0.78rem]">
            Windows 10+ &middot; macOS &amp; Linux coming soon
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
