import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
const faqs = [
  {
    q: "Is PRISM only for personal finance?",
    a: "PRISM is built for personal finance too, but its strongest use is shared expenses: roommates, couples, family, friends, and small teams who need a clear way to track who paid, who owes who, and what's settled.",
  },
  {
    q: "What makes PRISM better than a spreadsheet for shared expenses?",
    a: "You add an expense once and PRISM calculates balances automatically — no shared formulas, version conflicts, or manual who-owes-who math.",
  },
  {
    q: "Can PRISM replace QuickBooks or Mint?",
    a: "PRISM offers personal finance features alongside shared expense tracking, but it's built to be simpler than business software and more useful for real shared costs than budgeting-only apps.",
  },
  {
    q: "Is my shared expense data private?",
    a: "Yes. Your data stays on your machine in a local SQLite database. There is no cloud sync, no shared account login, and no outside access by default.",
  },
  {
    q: "Can I import shared expenses from a bank or spreadsheet?",
    a: "Yes. PRISM supports CSV and Excel (.xlsx) import and lets you reassign imported transactions to specific people or shares.",
  },
  {
    q: "Does PRISM work for group trips?",
    a: "Yes. Trip expenses can be added and split as shared costs with balances tracked per person.",
  },
  {
    q: "Can I export my shared expense data or reports?",
    a: "Yes. You can export transactions and balances, and reports are designed to make shared costs easy to review and reconcile.",
  },
  {
    q: "How does PRISM calculate who owes who?",
    a: "When you add a shared expense, PRISM determines the per-person share — equal or custom — and derives net balances across all participants so you can see exactly what is owed.",
  },
  {
    q: "Is PRISM easier than spreadsheets for splitting costs?",
    a: "Yes. PRISM automates the owed-amount calculation and keeps one shared view of balances. You no longer need multiple tabs, comment threads, or reconciliation checklists.",
  },
];
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.06] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-0 py-6 text-left font-black text-text bg-transparent border-0 cursor-pointer"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-lg shrink-0 ml-4"
        >
          {isOpen ? "\u2212" : "+"}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-[860px] pb-6 m-0 text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section
      id="faq"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          <span className="section-gradient-text">Clear answers</span> for buyers
        </h2>
      </Reveal>
      <Reveal direction="fade" delay={0.1}>
        <div className="mt-10 border-t border-white/[0.06]">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
