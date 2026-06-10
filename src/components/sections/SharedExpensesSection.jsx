import Reveal from "../animations/Reveal";
import answerInSecondsGraphic from "../../../See_the_answer_in_seconds_section_graphic.png";

export default function SharedExpensesSection() {
  return (
    <section
      id="shared-expenses"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <Reveal direction="left">
          <div className="flex flex-col">
            <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              See the answer in seconds
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              See the <span className="section-gradient-text">answer in seconds</span>
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-5">
              Who owes who? How much? Can you settle it? PRISM makes shared
              expenses clear in one place.
            </p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] mb-8 font-bold">
              See who paid, who owes, what is still open, and settle balances
              without messy notes, texts, or spreadsheets.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "See exactly who owes who",
                "See how much each person owes",
                "Split bills and shared costs clearly",
                "Settle balances with confidence",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-text text-[0.95rem] font-bold leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: Shared Expenses Visual */}
        <Reveal direction="right" delay={0.15}>
          <div className="relative flex justify-center overflow-visible px-1 sm:px-2">
            <img
              src={answerInSecondsGraphic}
              alt="See the answer in seconds"
              className="relative z-10 h-auto w-[112%] max-w-none object-contain sm:w-full sm:max-w-[720px] lg:max-w-[810px] xl:max-w-[850px]"
              draggable="false"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
