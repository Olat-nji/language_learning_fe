import Footer from "~/components/footer/Footer";
import HeroSection from "~/components/HowItWorks/Hero/Hero";
import ReadyToStart from "~/components/HowItWorks/readytostart/Readytostart";
import StepTabs from "~/components/HowItWorks/Steps/Steps";
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
