import HeroSection from "../components/Home/Hero";
import ServiceSection from "../components/Home/Service";
import CaseSection from "../components/Home/Case";
import ExperienceSection from "../components/Home/Experiences";
import ShowCase from "../components/Home/Showcase";
import SkillSection from "../components/Home/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      {/* <CaseSection /> */}
      <SkillSection />
      <ShowCase />
      <ExperienceSection />
    </>
  );
}
