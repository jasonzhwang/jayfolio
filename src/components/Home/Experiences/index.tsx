import React, { useState } from "react";
import ExperienceCard from "../../Shared/ExperienceCard";
import { AllExperiences } from "../../Shared/ExperienceCard";
import RightArrow from "@/public/arrow-point-to-right.svg";
import LeftArrow from "@/public/arrow-point-to-left.svg";

const ExperienceSection = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="mx-[15px] mt-[100px] flex flex-col md:mx-[32px]">
      <p className="mx-auto pb-[50px] font-Robuck text-[64px] tracking-wider text-white">Career</p>
      <div className="mx-auto flex w-full max-w-[1180px] flex-col-reverse rounded-2xl bg-[#F74E3B] py-[35px] sm:flex-row">
        <div className="ml-0 flex flex-col sm:ml-0 sm:pl-[120px]">
          <p className="text-center text-[#FDED39] sm:text-left">No 1/3</p>
          <h2 className="pb-[48px] pt-[48px] text-center font-Hemenix text-[32px] font-black text-white sm:text-left">
            Personal
            <br />
            Experience
          </h2>
          <div className="mx-auto flex min-h-[60px] items-center gap-[20px] sm:ml-0">
            <div
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#FE5943] hover:h-[60px] hover:w-[60px] hover:bg-[#FFD241]"
              onClick={() => {
                count != 0 && setCount(count - 1);
              }}
            >
              <LeftArrow className="h-[20px] w-[20px] text-white" />
            </div>
            <div
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#FE5943] hover:h-[60px] hover:w-[60px] hover:bg-[#FFD241]"
              onClick={() => {
                count != AllExperiences.length - 2 && setCount(count + 1);
              }}
            >
              <RightArrow className="h-[20px] w-[20px] text-white" />
            </div>
          </div>
        </div>
        <div className="xs:ml-0 relative mx-auto flex gap-[50px]">
          <div className="flex min-w-[200px] max-w-[250px] flex-col">
            <ExperienceCard eachExperience={AllExperiences[count]} />
          </div>
          <div className="hidden min-w-[200px] max-w-[250px] flex-col lg:flex">
            <ExperienceCard eachExperience={AllExperiences[count + 1]} />
          </div>
          <div className="hidden min-w-[200px] max-w-[250px] flex-col xl:flex">
            <ExperienceCard eachExperience={AllExperiences[count + 2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
