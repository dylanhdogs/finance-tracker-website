import Reveal from "../animations/Reveal";
import knowWhoOwesGraphic from "../../../Know_Who_Owes_Who_In_Seconds_section_graphic.png";

export default function HowSection() {
  return (
    <section
      id="how"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-center">
        <Reveal direction="left">
          <div>
            <p className="text-white/70 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              Add it. Split it. Settle it.
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
              Know Who Owes Who In Seconds
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[620px]">
              Add an expense, split the cost, see who owes who, and settle the balance.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="relative flex justify-center overflow-hidden">
            <img
              src={knowWhoOwesGraphic}
              alt="Know who owes who in seconds"
              className="relative z-10 h-auto w-full max-w-[560px] object-contain sm:max-w-[680px] lg:max-w-[760px]"
              draggable="false"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
