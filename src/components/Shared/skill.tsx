import React, { useState } from "react";
import Fire from "@/public/fire.svg";
import Next from "@/public/next.svg";
import Node from "@/public/nodejs.svg";
import Category from "@/public/category.svg";
import Trend from "@/public/trend.svg";
import RightArrow from "@/public/arrow-point-to-right.svg";
import PlayButton from "@/public/play-button.svg";
import Indesign from "@/public/indesign.svg";
import Photoshop from "@/public/photoshop.svg";
import MongoDB from "@/public/mongodb.svg";
import ReactJS from "@/public/react.svg";
import Redux from "@/public/redux.svg";
import RestAPI from "@/public/rest-api.svg";
import Git from "@/public/git.svg";
import Typescript from "@/public/typescript.svg";
import Figma from "@/public/figma-large.svg";
import StyledComponents from "@/public/styled-components.svg";
import Scss from "@/public/scss.svg";
import Swagger from "@/public/swagger.svg";
import Wordpress from "@/public/wordpress.svg";
import Stripe from "@/public/stripe.svg";
import Synology from "@/public/synology.svg";
import VMware from "@/public/vmware.svg";
import Pronto from "@/public/pronto.svg";
import Scrum from "@/public/scrum.svg";
import KeystoneJS from "@/public/keystonejs.svg";

const iconList: { [key: string]: JSX.Element } = {
  "next.js": <Next alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  "node.js": <Node alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Reactjs: <ReactJS alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Redux: <Redux alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Indesign: <Indesign alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Photoshop: (
    <Photoshop alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />
  ),
  MongoDB: <MongoDB alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  RestAPI: <RestAPI alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Git: <Git alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Typescript: (
    <Typescript alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />
  ),
  "Styled Components": (
    <StyledComponents alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />
  ),
  SCSS: <Scss alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Swagger: <Swagger alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Figma: <Figma alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Wordpress: (
    <Wordpress alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />
  ),
  Stripe: <Stripe alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Synology: <Synology alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  VMware: <VMware alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Pronto: <Pronto alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Scrum: <Scrum alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />,
  Keystone: (
    <KeystoneJS alt="" className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]" />
  ),
};

interface SkillProps {
  skillName: string;
  // year: string;
  category: string;
  popularity: number;
  index: number;
}

const skill: React.FC<SkillProps> = ({ skillName, index, category, popularity }) => {
  const icon = iconList[skillName];
  return (
    <div key={index} className="group">
      {index === 0 && <div className="mx-[30px] h-[2px] bg-[#F14A38] group-hover:invisible"></div>}
      <div className="flex bg-[#FE5943] group-hover:rounded-lg group-hover:border-[3px] group-hover:border-[#F14A38]">
        <div className="w-[30px] group-hover:rounded-l-lg group-hover:bg-white"></div>
        <div className="mx-auto flex flex-1 items-center gap-[100px] py-[20px] group-hover:bg-white">
          <div className="flex items-center gap-[25px] sm:gap-[70px]">
            {/* <p className="hidden font-Hemenix text-[12px] text-white group-hover:text-[#FE5943] sm:flex">
              {year}
            </p> */}
            <div className="mr-auto hidden min-w-[55px] gap-[3px] sm:flex">
              {Array.from({ length: popularity }, (_, index) => (
                <Fire
                  key={index} // Make sure to provide a unique key for each Fire component
                  className="h-[15px] w-[15px] text-white group-hover:text-[#FE5943]"
                />
              ))}
            </div>
            <div className="h-[60px] w-[60px]">{icon}</div>
            <h2 className="min-w-[140px] font-Hemenix text-[24px] tracking-wider text-white group-hover:text-[#FE5943]">
              {skillName}
            </h2>
          </div>
          <div className="mr-[30px] hidden items-center gap-[50px] lg:flex">
            <div className="flex items-center gap-[10px]">
              <div className="flex h-[30px] w-[30px] items-center">
                <Category
                  alt=""
                  className="h-full w-full text-[#FFD241] group-hover:text-[#FE5943]"
                />
              </div>
              <p className="min-w-[140px] font-Hemenix text-[12px] text-white group-hover:text-[#FE5943]">
                {category}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex h-[30px] w-[30px] items-center">
                <Trend
                  alt=""
                  className="h-[23px] w-[23px] text-[#FFD241] group-hover:text-[#FE5943]"
                />
              </div>
              <p className="font-Hemenix text-[12px] text-white group-hover:text-[#FE5943]">
                {popularity === 3 ? "Popular" : popularity === 2 ? "Intermediate" : "low"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center group-hover:bg-[#FFD241]">
          <div className="visible my-auto hidden h-[11px] w-[30px] group-hover:invisible sm:flex">
            <RightArrow className="h-full w-full text-white" />
          </div>
          <div className="my-auto h-[11px] w-[25px]">
            <PlayButton className="h-full w-full text-[#FE5943]" />
          </div>
        </div>
        <div className="w-[10px] group-hover:rounded-r-lg group-hover:bg-[#FFD241] sm:w-[30px]"></div>
      </div>
      <div className="mx-[30px] h-[2px] bg-[#F14A38] group-hover:invisible"></div>
    </div>
  );
};

export default skill;
