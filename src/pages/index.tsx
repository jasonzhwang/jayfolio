import HeroSection from "../components/Home/Hero";
import InterestsSection from "../components/Home/Interests";
import ExperienceSection from "../components/Home/Experiences";
import ShowCase from "../components/Home/Showcase";
import SkillSection from "../components/Home/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InterestsSection />
      {/* <CaseSection /> */}
      <SkillSection />
      <ShowCase />
      <ExperienceSection />
    </>
  );
}
