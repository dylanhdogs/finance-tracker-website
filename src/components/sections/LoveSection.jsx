import Reveal from "../animations/Reveal";
import controlGraphic from "../../../Built for people who want control — not complexity.png";

export default function LoveSection() {
  return (
    <section
      id="love"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-\[65px\] mx-auto max-w-[1440px] scroll-mt-32"
    >
      {" "}
      <Reveal direction="up">
        {" "}
        <p className="text-white/70 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          {" "}
          Why <strong>PRISM</strong>{" "}
        </p>{" "}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          {" "}
          Built for people who want control &mdash; not complexity
        </h2>{" "}
      </Reveal>{" "}
      <div className="mt-10 sm:mt-12 flex justify-center overflow-visible px-2 sm:px-3">
        <img
          src={controlGraphic}
          alt="Built for people who want control, not complexity"
          className="h-auto w-full max-w-[720px] object-contain sm:max-w-[920px] lg:max-w-[1080px] xl:max-w-[1180px]"
          draggable="false"
        />
      </div>{" "}
    </section>
  );
}
