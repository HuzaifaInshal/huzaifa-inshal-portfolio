"use client";

import AboutSection from "@/sections/about/about.section";
import HeaderSection from "@/sections/header/header.section";
import HeroSection from "@/sections/hero/hero.section";

const LandingPageView = () => {
  return (
    <div className="container mx-auto">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default LandingPageView;
