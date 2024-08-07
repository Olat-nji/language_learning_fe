import React from "react";

import DarkNav from "~/components/DarkNav/DarkNav";
import HeroSection from "~/components/HowItWorks/Hero/Hero";
import StepTabs from "~/components/HowItWorks/Steps/Steps";
import ReadyToStart from "~/components/HowItWorks/readytostart/Readytostart";
import Footer from "~/components/footer/Footer";
import LightNav from "~/components/light-navbar/LightNav";

export default function HowItWorks() {
  return (
    <>
      <LightNav />
      <HeroSection />
      <StepTabs />
      <ReadyToStart />
      <Footer />
    </>
  );
}
