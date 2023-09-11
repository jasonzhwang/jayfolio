import React from "react";
import InterestsCard from "../../Shared/InterestsCard";

const InterestsSection = () => {
  return (
    <section className="mx-[15px] flex flex-col md:mx-0" id="interests">
      <p className="mx-auto pb-[50px] text-center font-Robuck text-[64px] tracking-wider text-white">
        What I&apos;m interested
      </p>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-[10px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
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
            skillSet={["User Interface", "User Interaction", "Figma", "System Design"]}
          />
        </div>
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <InterestsCard
            index={3}
            advDescription="EFFICIENT"
            advPic="./light.svg"
            InterestsTitle="Web Development"
            InterestsSubTitle="VARIOUS WORKS"
            skillSet={[
              "Full-Stack",
              "MicroInterestss",
              "NoSQL & Relational DB",
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
            skillSet={["Help Desk", "Server", "Prototyping", "ERP", "User mgmt", "Data backup"]}
          />
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
