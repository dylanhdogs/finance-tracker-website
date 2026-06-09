import { motion } from "motion/react";
import Reveal from "../animations/Reveal";
const bars = [
  { class: "b1", h: "42%", d: 120 },
  { class: "b2", h: "72%", d: 180 },
  { class: "b3", h: "58%", d: 240 },
  { class: "b4", h: "86%", d: 300 },
  { class: "b5", h: "64%", d: 360 },
  { class: "b6", h: "92%", d: 420 },
];
const callouts = [
  {
    label: "Balance verified",
    detail: "All sources matched",
    className: "top-[11%] -right-2 sm:-right-7",
    delay: 0.5,
  },
  {
    label: "Dining near limit",
    detail: "$38 remaining",
    className: "bottom-[18%] -left-2 sm:-left-8",
    delay: -1.4,
  },
  {
    label: "Net worth updated",
    detail: "+$2,410 this month",
    className: "bottom-[3%] right-[9%]",
    delay: -0.4,
  },
];
export default function HeroSection() {
  return (
    <section
      id="top"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 items-center px-5 sm:px-6 mx-auto max-w-7xl pt-[104px] sm:pt-[130px] pb-[54px] sm:pb-[70px] scroll-mt-0"
    >
      {" "}
      <div className="flex flex-col">
        {" "}
        <Reveal direction="up" delay={0}>
          {" "}
          <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
            {" "}
            See everything. Miss nothing.{" "}
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.12}>
          {" "}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 sm:mb-6 max-w-full">
            {" "}
            Know Exactly Where Your Money Goes{" "}
          </h1>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.24}>
          {" "}
          <p className="text-muted text-[1rem] sm:text-[1.12rem] leading-relaxed max-w-[620px]">
            {" "}
            Stop guessing. Get one calm private place to see your full financial
            picture — without spreadsheets, cloud uploads, or constant
            switching between accounts.{" "}
          </p>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.36}>
          {" "}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-8 mb-7">
            {" "}
            <a
              href="download.html"
              className="w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-6 rounded-full font-black text-[#03111a] bg-gradient-to-br from-accent-2 to-accent-3 shadow-[0_18px_50px_rgba(38,230,163,0.25)] transition-transform duration-180 hover:-translate-y-1 no-underline hover:shadow-[0_18px_70px_rgba(38,230,163,0.45)]"
            >
              {" "}
              Get Clarity{" "}
            </a>{" "}
            <a
              href="#how"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#how")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full sm:w-auto relative inline-flex items-center justify-center min-h-[52px] px-6 rounded-full font-black text-text border border-white/14 bg-white/6 transition-transform duration-180 hover:-translate-y-1 no-underline"
            >
              {" "}
              See How It Helps{" "}
            </a>{" "}
          </div>{" "}
        </Reveal>{" "}
        <Reveal direction="up" delay={0.48}>
          {" "}
          <div className="flex flex-wrap gap-2.5">
            {" "}
            {[
              "100% Local & Offline",
              "CSV & Excel Import",
              "Built for Personal Finance",
            ].map((tag) => (
              <span
                key={tag}
              className="px-3 py-2 rounded-full border border-white/14 bg-white/5 text-muted text-[0.8rem] font-bold"
              >
                {" "}
                {tag}{" "}
              </span>
            ))}{" "}
          </div>{" "}
        </Reveal>{" "}
      </div>{" "}
      <Reveal direction="right" delay={0.3}>
        {" "}
        <div className="relative perspective-[1200px] max-md:mx-auto max-md:max-w-[560px]">
          {" "}
          <div className="absolute -inset-5 rounded-[38px] bg-[radial-gradient(circle_at_70%_20%,rgba(38,230,163,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(124,92,255,0.22),transparent_32%)] blur-2xl" />{" "}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative overflow-hidden border border-white/18 rounded-[30px] bg-gradient-to-br from-white/16 to-white/5 shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {" "}
            <div className="flex gap-2 items-center px-[18px] py-4 border-b border-white/14 bg-white/6">
              {" "}
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff6b6b]" />{" "}
              <span className="w-[11px] h-[11px] rounded-full bg-[#ffd166]" />{" "}
              <span className="w-[11px] h-[11px] rounded-full bg-[#26e6a3]" />{" "}
              <strong className="ml-2.5 text-muted text-[0.82rem]">
                Your finances
              </strong>{" "}
            </div>{" "}
            <div className="grid grid-cols-[160px_1fr] min-h-[480px] max-md:grid-cols-1 max-md:min-h-[380px]">
              {" "}
              <aside className="p-5 border-r border-white/14 bg-black/15 max-md:hidden">
                {" "}
                <div className="w-[72px] h-[14px] mb-7 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                {[
                  "Dashboard",
                  "Transactions",
                  "Accounts",
                  "Budgets",
                  "Journal",
                  "Reconcile",
                  "Reports",
                ].map((item, i) => (
                  <p
                    key={item}
                    className={`m-0 mb-2 px-3 py-2.5 rounded-xl text-[0.78rem] font-extrabold ${i === 0 ? "bg-accent/22 text-text" : "text-muted"}`}
                  >
                    {" "}
                    {item}{" "}
                  </p>
                ))}{" "}
              </aside>{" "}
              <div className="p-[22px] max-md:p-4">
                {" "}
                <div className="flex justify-between items-center mb-[18px]">
                  {" "}
                  <span className="text-muted text-[0.78rem] font-extrabold uppercase">
                    {" "}
                    Net Worth{" "}
                  </span>{" "}
                  <strong className="text-3xl tracking-tight">
                    $84,210
                  </strong>{" "}
                </div>{" "}
                <div className="grid grid-cols-3 gap-3 mb-[18px] max-sm:grid-cols-1">
                  {" "}
                  {[
                    { label: "Income", val: "$9,840" },
                    { label: "Expenses", val: "$4,126" },
                    { label: "Remaining", val: "$5,714" },
                  ].map((m) => (
                    <article
                      key={m.label}
                      className="p-4 border border-white/14 rounded-[18px] bg-white/6"
                    >
                      {" "}
                      <span className="text-muted text-[0.78rem] font-extrabold uppercase">
                        {" "}
                        {m.label}{" "}
                      </span>{" "}
                      <strong className="block mt-2 text-[1.12rem]">
                        {" "}
                        {m.val}{" "}
                      </strong>{" "}
                    </article>
                  ))}{" "}
                </div>{" "}
                <div className="relative h-[190px] max-md:h-[150px] p-5 max-md:p-4 border border-white/14 rounded-2xl bg-gradient-to-b from-white/10 to-white/3.5 overflow-hidden">
                  {" "}
                  <div className="absolute inset-x-5 top-6 bottom-6 grid grid-rows-4 opacity-25">
                    {" "}
                    {[0, 1, 2, 3].map((line) => (
                      <span key={line} className="border-t border-white/20" />
                    ))}{" "}
                  </div>{" "}
                  <div className="relative z-10 flex items-end gap-3.5 h-full">
                    {" "}
                    {bars.map((bar) => (
                      <div
                        key={bar.class}
                        className="flex-1 min-w-[18px] rounded-t-full bg-gradient-to-b from-accent-2 to-accent"
                        style={{
                          height: bar.h,
                          animation: `grow 1s ${bar.d}ms cubic-bezier(0.2, 0.8, 0.2, 1) both`,
                        }}
                      />
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-4">
                  {" "}
                  {[
                    { label: "Mortgage payment", val: "-$1,840" },
                    { label: "Client deposit", val: "+$3,200" },
                    { label: "Software tools", val: "-$129" },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-2.5 justify-between py-3 border-b border-white/8 text-muted text-[0.9rem]"
                    >
                      {" "}
                      <span className="w-[9px] h-[9px] rounded-full bg-accent-2" />{" "}
                      {t.label}{" "}
                      <strong className="ml-auto text-text">
                        {t.val}
                      </strong>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          {callouts.map((callout) => (
            <motion.div
              key={callout.label}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: callout.delay,
              }}
              className={`absolute hidden sm:block px-[18px] py-4 border border-white/14 rounded-xl bg-[#07101d]/82 shadow-2xl backdrop-blur-lg ${callout.className}`}
            >
              {" "}
              <span className="text-accent-2 text-[0.72rem] font-extrabold uppercase tracking-[0.14em]">
                {" "}
                {callout.label}{" "}
              </span>{" "}
              <strong className="block mt-1.5 text-[0.95rem]">
                {callout.detail}
              </strong>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </Reveal>{" "}
    </section>
  );
}
