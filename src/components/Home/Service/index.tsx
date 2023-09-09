import React from "react";
import ServiceCard from "../../Shared/ServiceCard";

const ServiceSection = () => {
  return (
    <section className="mx-[15px] flex flex-col md:mx-0">
      <p className="mx-auto pb-[50px] text-center font-Robuck text-[64px] tracking-wider text-white">
        What I&apos;m interested
      </p>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-[10px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <ServiceCard
            index={1}
            advDescription="CHRACTER"
            advPic="./design.svg"
            serviceTitle="GRAPHIC DESIGN"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Product List", "Flyers", "Namecards", "Brochures", "Commercial Stickers"]}
          />
          <ServiceCard
            index={2}
            advDescription="CUSTOM"
            advPic="./uiux.svg"
            serviceTitle="UI & UX Design"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["User Interface", "User Interaction", "Figma", "System Design"]}
          />
        </div>
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <ServiceCard
            index={3}
            advDescription="EFFICIENT"
            advPic="./light.svg"
            serviceTitle="Web Development"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Full-Stack", "Microservices", "NoSQL & Relational DB", "AWS", "Algorithms"]}
          />
          <ServiceCard
            index={4}
            advDescription="CONSISTENT"
            advPic="./support.svg"
            serviceTitle="IT Support"
            serviceSubTitle="VARIOUS WORKS"
            skillSet={["Help Desk", "Server", "Prototyping", "ERP", "User mgmt", "Data backup"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
