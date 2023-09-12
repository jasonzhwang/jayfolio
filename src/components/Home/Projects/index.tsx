import React, { useState } from "react";
import Logo from "../../Shared/Logo";
import StudioName from "../../Shared/StudioName";
import LeftArrow from "@/public/arrow-point-to-left.svg";
import RightArrow from "@/public/arrow-point-to-right.svg";

export const AllProjects = [
  {
    name: "TaoTalk",
    link: "https://taotalk.vercel.app/",
    imgSrc: "./TaoTalk.png",
    github: "",
  },
  {
    name: "Resume Builder",
    link: "",
    imgSrc: "./jobpin.png",
    bitbucket: "internal",
  },
  {
    name: "CrankIT Fitness",
    link: "https://www.crankitfitness.com/",
    imgSrc: "./CrankIT.png",
    wordpress: "internal",
  },
  {
    name: "Jason's Portfolio",
    link: "https://jayjaystudio.vercel.app/",
    imgSrc: "./jayjayStudio.png",
    github: "",
    figma: "",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const currentProjectInfo = AllProjects[currentProject];
  return (
    <section className="mt-[100px] flex flex-col" id="projects">
      <p className="mx-auto pb-[50px] font-Robuck text-[64px] tracking-wider text-white">
        Projects
      </p>
      <div className="relative">
        <div className="mx-[15px] md:mx-[32px]">
          <div className="mx-auto flex max-w-[1180px] flex-col lg:flex-row">
            <div className="z-10 rounded-l-2xl bg-[#F74E3B] py-[50px] lg:pr-[200px]">
              <div className="flex lg:gap-[35px] lg:pl-[56px]">
                <div className="mt-[15px]">
                  <img src="./footer-points.svg" alt="" className="hidden lg:block" />
                </div>
                <div className="mx-auto">
                  <div className="hidden gap-[10px] lg:flex">
                    <Logo />
                    <StudioName />
                  </div>
                  <h2 className="mt-[47px] text-center font-Robuck text-[48px] leading-none text-white lg:text-left">
                    BEST OF THE
                    <br />
                    RECENT
                  </h2>
                  <div className="flex justify-center gap-[5px] pb-[24px] pt-[25px] lg:ml-0 lg:justify-start">
                    {Array(4)
                      .fill(null)
                      .map((_, index) => (
                        <button
                          key={index}
                          className={`h-[4px] w-[38px] hover:bg-[#FFD241] focus:bg-[#FFD241] ${
                            currentProject === index ? "bg-[#FFD241]" : "bg-white"
                          }`}
                          onClick={() => {
                            setCurrentProject(index);
                            console.log(currentProject, index);
                          }}
                        ></button>
                      ))}
                  </div>
                  <p className="mx-auto w-[100%] py-[20px] text-center font-Robuck text-[64px] text-[#FFD241] lg:ml-0 lg:text-left">
                    {currentProjectInfo.name}
                  </p>
                  <div className="flex">
                    <div className="mx-auto flex gap-[20px] lg:ml-0">
                      <button className="border-[2px] border-[#FFD241] px-[12px] py-[8px] text-[#FFD241] hover:bg-[#FFD241] hover:text-white">
                        Browser
                      </button>
                      <button className="border-[2px] border-white px-[12px] py-[8px] text-white hover:bg-white hover:text-[#F14A38]">
                        Github
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-10 hidden w-[200px] rounded-r-2xl border-[4px] border-[#F14A38] bg-[#FE5943] lg:block"></div>
            <div className="z-10 flex bg-[#F74E3B] lg:relative lg:flex-1 lg:bg-[#FE5943]">
              <div className="relative mx-auto h-[350px] overflow-hidden rounded-2xl border-[10px] border-white sm:h-[500px] lg:absolute lg:right-0 lg:w-[626px] lg:translate-y-[23px]">
                <img src={currentProjectInfo.imgSrc} alt="" />
                <div
                  className="absolute left-0 top-1/2 ml-[30px]"
                  onClick={() => {
                    currentProject === 0
                      ? setCurrentProject(AllProjects.length - 1)
                      : setCurrentProject(currentProject - 1);
                  }}
                >
                  <LeftArrow className="h-[20px] w-[20px] text-white" />
                </div>
                <div
                  className="absolute right-0 top-1/2 mr-[30px]"
                  onClick={() => {
                    currentProject === AllProjects.length - 1
                      ? setCurrentProject(0)
                      : setCurrentProject(currentProject + 1);
                  }}
                >
                  <RightArrow className="h-[20px] w-[20px] text-white" />
                </div>
                {/* <div className="absolute bottom-[20px] left-1/2 flex -translate-x-1/2 gap-[20px]">
              <button className="border-[2px] border-[#FFD241] px-[12px] py-[8px] text-[#FFD241]">
                Browser
              </button>
              <button className="border-[2px] border-white px-[12px] py-[8px] text-white">
                Github
              </button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 h-[5px] w-full bg-[#F74E3B]"></div>
      </div>
    </section>
  );
};
export default Projects;
