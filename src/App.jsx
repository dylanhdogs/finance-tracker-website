import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import SharedExpensesSection from "./components/sections/SharedExpensesSection";
import AudienceSection from "./components/sections/AudienceSection";
import HowSection from "./components/sections/HowSection";
import SolutionSection from "./components/sections/SolutionSection";
import LoveSection from "./components/sections/LoveSection";
import CompareSection from "./components/sections/CompareSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";

export default function App() {
  return (
    <>
      <div className="wallpaper-glow" aria-hidden="true" />
      <div className="wallpaper-orb wallpaper-orb--1" aria-hidden="true" />
      <div className="wallpaper-orb wallpaper-orb--2" aria-hidden="true" />
      <div className="wallpaper-orb wallpaper-orb--3" aria-hidden="true" />
      <div className="wallpaper-grid" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="bg-glow bg-glow--bl" aria-hidden="true" />
      <div className="bg-glow bg-glow--tr" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SharedExpensesSection />
        <AudienceSection />
        <HowSection />
        <SolutionSection />
        <LoveSection />
        <CompareSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
