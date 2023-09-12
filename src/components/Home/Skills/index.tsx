import React, { useState } from "react";
import Skill from "../../Shared/skill";

type SkillSets = {
  [key: string]: Skills;
};

type Skills = {
  [key: string]: {
    popularity: 1 | 2 | 3;
    category: string;
    linkUrl: string;
  };
};

const skillSets: SkillSets = {
  Web_DEV: {
    "next.js": {
      popularity: 3,
      category: "Framework",
      linkUrl: "https://nextjs.org/",
    },
    "node.js": {
      popularity: 3,
      category: "Backend",
      linkUrl: "https://nodejs.org/",
    },
    Wordpress: {
      popularity: 3,
      category: "Content Management",
      linkUrl: "https://wordpress.org/",
    },
    Stripe: {
      popularity: 3,
      category: "API",
      linkUrl: "https://stripe.com/",
    },
    MongoDB: {
      popularity: 3,
      category: "DataBase",
      linkUrl: "https://www.mongodb.com/",
    },
    Reactjs: {
      popularity: 3,
      category: "Framework",
      linkUrl: "https://reactjs.org/",
    },
    Redux: {
      popularity: 3,
      category: "Library",
      linkUrl: "https://redux.js.org/",
    },
    RestAPI: {
      popularity: 3,
      category: "API",
      linkUrl: "",
    },
    Typescript: {
      popularity: 3,
      category: "language",
      linkUrl: "https://www.typescriptlang.org/",
    },
    SCSS: {
      popularity: 3,
      category: "CSS Preprocessors",
      linkUrl: "https://sass-lang.com/",
    },
    Keystone: {
      popularity: 1,
      category: "Framework",
      linkUrl: "https://keystonejs.com/",
    },
    Git: {
      popularity: 3,
      category: "Version control",
      linkUrl: "https://git-scm.com/",
    },
    Scrum: {
      popularity: 3,
      category: "Project Management",
      linkUrl: "https://www.scrum.org/",
    },
    Swagger: {
      popularity: 3,
      category: "API",
      linkUrl: "https://swagger.io/",
    },
  },
  Design: {
    Figma: {
      popularity: 3,
      category: "UI/UX Design",
      linkUrl: "https://www.figma.com/",
    },
    Indesign: {
      popularity: 3,
      category: "Graphic Design",
      linkUrl: "https://www.adobe.com/products/indesign.html",
    },
    Photoshop: {
      popularity: 3,
      category: "Graphic Design",
      linkUrl: "https://www.adobe.com/products/photoshop.html",
    },
  },
  Tech_Support: {
    Synology: {
      popularity: 3,
      category: "NAS",
      linkUrl: "https://www.synology.com/",
    },
    VMware: {
      popularity: 3,
      category: "Virtualization",
      linkUrl: "https://www.vmware.com/",
    },
    Pronto: {
      popularity: 3,
      category: "ERP",
      linkUrl: "https://www.pronto.com.au/",
    },
  },
};

const SkillSection = () => {
  const [skillSet, setSkillSet] = useState<string>("Web_DEV");
  const skills: Skills = skillSets[skillSet];

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
        {Object.keys(skills).map((skillName, index) => {
          const skill = skills[skillName];
          const category = skill.category;
          const popularity = skill.popularity;
          const linkUrl = skill.linkUrl;
          return (
            <div
              key={index}
              onClick={() => {
                window.location.href = linkUrl;
              }}
            >
              <Skill
                skillName={skillName}
                index={index}
                key={index}
                category={category}
                popularity={popularity}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
