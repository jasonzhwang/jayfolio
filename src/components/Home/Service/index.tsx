import React from "react";
import ServiceCard from "../../Shared/ServiceCard";

const ServiceSection = () => {
  return (
    <section className="mx-[15px] flex flex-col md:mx-0">
      <p className="mx-auto pb-[50px] font-Robuck text-[64px] tracking-wider text-white">
        What I&apos;m interested
      </p>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-[10px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <ServiceCard
            index={1}
            advDescription="CHRACTER"
            advPic="./design.svg"
            serviceTitle="CREATIVE DESIGN"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Photoshop", "InDesign", "Illustrator"]}
          />
          <ServiceCard
            index={2}
            advDescription="CUSTOM"
            advPic="./uiux.svg"
            serviceTitle="UI & UX Design"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Figma", "XD", "Design System"]}
          />
        </div>
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <ServiceCard
            index={3}
            advDescription="EFFICIENT"
            advPic="./light.svg"
            serviceTitle="Web Development"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Frontend", "Backend", "Database"]}
          />
          <ServiceCard
            index={4}
            advDescription="CONSISTENT"
            advPic="./support.svg"
            serviceTitle="IT Support"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["NAS", "Pronto", "HyperV", "VMware"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
