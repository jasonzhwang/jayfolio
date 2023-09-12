import React from "react";
import InterestsCard from "../../Shared/InterestsCard";

const InterestsSection = () => {
  return (
    <section className="mx-[15px] flex flex-col md:mx-0" id="interests">
      <p className="mx-auto pb-[50px] text-center font-Robuck text-[64px] tracking-wider text-white">
        What I&apos;m interested
      </p>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-0 sm:gap-[25px] lg:flex-row lg:gap-[10px]">
        <div className="mx-auto flex flex-col gap-0 sm:flex-row sm:gap-[25px] lg:gap-[10px]">
          <InterestsCard
            index={1}
            advDescription="CHRACTER"
            advPic="./design.svg"
            InterestsTitle="GRAPHIC DESIGN"
            InterestsSubTitle="VARIOUS WORKS"
            skillSet={["Product List", "Flyers", "Namecards", "Brochures", "Commercial Stickers"]}
          />
          <InterestsCard
            index={2}
            advDescription="CUSTOM"
            advPic="./uiux.svg"
            InterestsTitle="UI & UX Design"
            InterestsSubTitle="VARIOUS WORKS"
            skillSet={["UI", "UX", "Figma", "XD", "System Design"]}
          />
        </div>
        <div className="mx-auto flex flex-col gap-0 sm:flex-row sm:gap-[25px] lg:gap-[10px]">
          <InterestsCard
            index={3}
            advDescription="EFFICIENT"
            advPic="./light.svg"
            InterestsTitle="Web Development"
            InterestsSubTitle="VARIOUS WORKS"
            skillSet={[
              "Full-Stack",
              "NoSQL",
              "Relational DB",
              "Micro-services",
              "AWS",
              "Algorithms",
            ]}
          />
          <InterestsCard
            index={4}
            advDescription="CONSISTENT"
            advPic="./support.svg"
            InterestsTitle="IT Support"
            InterestsSubTitle="VARIOUS WORKS"
            skillSet={["Help Desk", "ERP", "Server", "Prototyping", "User mgmt", "Data backup"]}
          />
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
