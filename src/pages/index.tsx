import HeroSection from "../components/Home/Hero";
import ServiceSection from "../components/Home/Service";
import CaseSection from "../components/Home/Case";
import ExperienceSection from "../components/Home/Experiences";
import ShowCase from "../components/Home/Showcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CaseSection />
      <ExperienceSection />
      <ShowCase />
    </>
  );
}
