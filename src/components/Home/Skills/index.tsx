import React, { useState } from "react";
import Skill from "../../Shared/skill";

type SkillSets = {
  [key: string]: BackendSkills;
};

type BackendSkills = {
  [key: string]: {
    year: string;
    popularity: "popular" | "intermediate" | "low";
    category: "Tools" | "framework" | "Language" | "API";
  };
};

const skillSets: SkillSets = {
  Web_DEV: {
    "next.js": {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    "node.js": {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Wordpress: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Stripe: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    MongoDB: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Reactjs: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Redux: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    "Restful API": {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Typescript: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    SCSS: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Keystone: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    // "Styled Components": {
    //   year: "2023",
    //   popularity: "popular",
    //   category: "Tools",
    // },
    Git: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Scrum: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Swagger: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
  },
  Design: {
    Figma: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Indesign: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Photoshop: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
  },
  Tech_Support: {
    Synology: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    VMware: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
    Pronto: {
      year: "2023",
      popularity: "popular",
      category: "Tools",
    },
  },
};

const SkillSection = () => {
  const [skillSet, setSkillSet] = useState<string>("Web_DEV");
  const backendSkills: BackendSkills = skillSets[skillSet];

  return (
    <section className="mx-[15px] flex flex-col md:mx-[32px]" id="skills">
      <p className="mx-auto mt-[72px] pb-[50px] font-Robuck text-[64px] tracking-wider text-white">
        Skills
      </p>
      <div className="mx-auto mb-[50px] justify-center rounded-lg bg-[#F14B36]">
        {Object.keys(skillSets).map((skill, index) => (
          <button
            className="px-[16px] py-[12px] font-Hemenix text-[16px] text-white hover:rounded-lg hover:bg-white hover:text-[#F74E3B]"
            key={index}
            onClick={() => {
              setSkillSet(skill);
            }}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="mx-auto h-[620px] max-w-[1180px] overflow-y-scroll">
        {Object.keys(backendSkills).map((skill, index) => (
          <Skill skillName={skill} year={backendSkills[skill]["year"]} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
