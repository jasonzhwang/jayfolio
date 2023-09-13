import React, { useState } from "react";
import Logo from "../../Shared/Logo";
import StudioName from "../../Shared/StudioName";
import LeftArrow from "@/public/arrow-point-to-left.svg";
import RightArrow from "@/public/arrow-point-to-right.svg";

//browser, github, figma, bitbucke, wordpress
export const AllProjects = [
  {
    name: "TaoTalk",
    links: [
      { name: "website", url: "https://taotalk.vercel.app/" },
      { name: "github", url: "https://github.com/taodemy/taotalk" },
      {
        name: "figma",
        url: "https://www.figma.com/file/HlwTWiPL1kq4pygBmjCQ1x/TaoTalk?type=design&node-id=1315-2109&mode=design&t=u1vPGJoLRs0vOY6O-0",
      },
    ],
    imgSrc: "./TaoTalk.png",
  },
  {
    name: "Resume Builder",
    links: [
      { name: "website", url: "https://jobpin.com.au" },
      { name: "bitbucket", url: "#" },
    ],
    imgSrc: "./jobpin.png",
  },
  {
    name: "CrankIT Fitness",
    links: [
      { name: "website", url: "https://www.crankitfitness.com/" },
      { name: "wordpress", url: "internal" },
    ],
    imgSrc: "./CrankIT.png",
  },
  {
    name: "Jason's Portfolio",
    links: [
      { name: "website", url: "https://jayjaystudio.vercel.app/" },
      { name: "github", url: "https://github.com/jasonzhwang/jayfolio" },
      {
        name: "figma",
        url: "https://www.figma.com/proto/ggF3BYJNnEwtgce2EaLn5j/JayJay-Studio?node-id=617-1768",
      },
    ],
    imgSrc: "./jayjayStudio.png",
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
            <div className="z-10 rounded-t-2xl bg-[#F74E3B] py-[50px] lg:rounded-none lg:rounded-l-2xl lg:pr-[200px]">
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
                          }}
                        ></button>
                      ))}
                  </div>
                  <p className="mx-auto w-[100%] py-[20px] text-center font-Robuck text-[64px] text-[#FFD241] lg:ml-0 lg:text-left">
                    {currentProjectInfo.name}
                  </p>
                  <div className="flex">
                    <div className="mx-auto flex gap-[15px] lg:ml-0">
                      {currentProjectInfo.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`border-[2px] px-[12px] py-[8px] ${
                            link.name === "website"
                              ? "border-[#FFD241] text-[#FFD241] hover:bg-[#FFD241] hover:text-white"
                              : link.name === "github"
                              ? "border-white text-white hover:bg-white hover:text-[#F14A38]"
                              : link.name === "bitbucket"
                              ? "border-[#205081] text-[#205081] hover:bg-[#205081] hover:text-white" // Use Bitbucket color
                              : link.name === "figma"
                              ? "border-[#205081] text-[#205081] hover:bg-[#205081] hover:text-white" // Use Figma color
                              : link.name === "wordpress"
                              ? "border-[#0073AA] text-[#0073AA] hover:bg-[#0073AA] hover:text-white" // Use WordPress color
                              : "" // Add similar conditions for other links here
                          }`}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-10 hidden w-[200px] rounded-r-2xl border-[4px] border-[#F14A38] bg-[#FE5943] lg:block"></div>
            <div className="z-10 flex rounded-b-2xl bg-[#F74E3B] lg:relative lg:flex-1 lg:bg-[#FE5943]">
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
