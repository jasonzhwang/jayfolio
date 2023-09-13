import React from "react";
import OutlineButton from "./OutlineButton";

import AppDeveloper from "@/public/app-developer.svg";
import WebDeveloper from "@/public/web-development.svg";

export const AllExperiences = ["TaoTech", "Jobpin", "BEfoods", "GadgetGuys", "EZOZ", "PartnerTech"];

enum TaotechDetail {
  Company = "TaoTech",
  Title = "Full-Stack Developer",
  Period = "2023-Present",
  EmploymentType = "Full-time",
  Link = "https://www.taolix.com",
}

enum JobpinDetail {
  Company = "Jobpin",
  Title = "Full-Stack Developer",
  Period = "2022-2023",
  EmploymentType = "Full-time",
  Link = "https://jobpin.com.au",
}

enum BEfoodsDetail {
  Company = "B&E Foods",
  Title = "IT support",
  Period = "2021-2022",
  EmploymentType = "Full-time",
  Link = "https://befoodsqld.com.au",
}

enum GadgetGuysDetail {
  Company = "Gadget Guys",
  Title = "Mobile Technician",
  Period = "2021-2022",
  EmploymentType = "Full-time",
  Link = "https://thegadgetguys.com.au",
}

enum EzozDetail {
  Company = "Ezoz",
  Title = "Wordpress Developer",
  Period = "2021-2022",
  EmploymentType = "Intern",
  Link = "https://ezoz.my",
}

enum PartnerTechDetail {
  Company = "Partner Tech",
  Title = "Hardware Technician",
  Period = "2021-2022",
  EmploymentType = "Part-time",
  Link = "https://www.partnertechcorp.com",
}

export interface ExperienceItemProps {
  eachExperience: (typeof AllExperiences)[number];
}

const ExperienceCard: React.FC<ExperienceItemProps> = ({ eachExperience }) => {
  let experience:
    | typeof TaotechDetail
    | typeof JobpinDetail
    | typeof BEfoodsDetail
    | typeof GadgetGuysDetail
    | typeof EzozDetail
    | typeof PartnerTechDetail
    | undefined;
  switch (eachExperience) {
    case AllExperiences[0]:
      experience = TaotechDetail;
      break;
    case AllExperiences[1]:
      experience = JobpinDetail;
      break;
    case AllExperiences[2]:
      experience = BEfoodsDetail;
      break;
    case AllExperiences[3]:
      experience = GadgetGuysDetail;
      break;
    case AllExperiences[4]:
      experience = EzozDetail;
      break;
    case AllExperiences[5]:
      experience = PartnerTechDetail;
      break;
  }
  return (
    <div
      className="group relative max-h-[300px]"
      onClick={() => {
        if (experience) {
          window.location.href = experience?.Link;
        }
      }}
    >
      <div className="absolute hidden h-[450px] w-[280px] -translate-x-[30px] -translate-y-[70px] rounded-2xl border-[10px] border-white sm:group-hover:block"></div>
      <div className="relative flex flex-col justify-center">
        <div className="relative flex min-w-[220px] flex-col">
          <div className="flex -translate-y-[45px]">
            <div className="invisible mx-auto rounded-3xl bg-[#F74E3B] px-[15px] py-[5px] font-Nba_Lakers text-[12px] font-black text-[#FFD241] sm:group-hover:visible">
              {experience?.Period}
            </div>
          </div>
          <div className="mx-auto flex h-[80px] w-[80px] flex-1 justify-center pb-[15px]">
            <WebDeveloper className="h-full w-full text-white" />
          </div>
          <h3 className="mx-auto font-Robuck text-[48px] font-black tracking-wide text-white">
            {experience?.Company}
          </h3>
        </div>
        <div className="flex min-h-[105px] flex-col">
          <div className="group-hover:flex">
            <p className="mx-auto text-center text-[16px] font-extrabold text-white">
              {/* {experience?.Title.split(" ")[0]}
              <br />
              {experience?.Title.split(" ")[1]} */}
              {experience?.Title}
            </p>
          </div>
          <div className="mx-auto my-[20px] flex sm:group-hover:hidden">
            <OutlineButton period={experience?.Period} />
          </div>
        </div>
      </div>
      <div className="hidden translate-y-[10px] sm:group-hover:flex">
        <div className="flex flex-1 justify-center">
          <button className="flex rounded-xl border-[5px] border-[#FE5943] bg-white px-[16px] py-[12px] font-Hemenix text-[#FE5943] group-hover:flex group-hover:bg-[#FFCD3C] lg:ml-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
