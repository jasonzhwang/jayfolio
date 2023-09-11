import HeroSection from "../components/Home/Hero";
import InterestsSection from "../components/Home/Interests";
import ExperienceSection from "../components/Home/Experiences";
import Projects from "../components/Home/Projects";
import SkillSection from "../components/Home/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InterestsSection />
      {/* <CaseSection /> */}
      <SkillSection />
      <Projects />
      <ExperienceSection />
    </>
  );
}
