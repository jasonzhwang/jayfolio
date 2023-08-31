import React from "react";
import OutlineButton from "../../Shared/OutlineButton";

const ExperienceSection = () => {
  return (
    <section className="mx-[15px] mt-[100px] md:mx-[32px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col-reverse rounded-2xl bg-[#F74E3B] pb-[34px] pt-[70px] sm:flex-row">
        <div className="ml-0 flex flex-col sm:ml-0 sm:pl-[120px]">
          <p className="text-center text-[#FDED39] sm:text-left">No 1/3</p>
          <h2 className="pb-[76px] pt-[48px] text-center font-Hemenix text-[32px] font-black text-white sm:text-left">
            Personal
            <br />
            Experience
          </h2>
          <img src="./arrow-buttons.svg" alt="" className="xs:ml-0 mx-auto" />
        </div>
        <div className="xs:ml-0 mx-auto flex gap-[20px]">
          <div className="flex min-w-[200px] max-w-[250px] flex-col">
            <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
            <p className="mx-auto pb-[45px] pt-[45px] text-[24px] font-extrabold text-white">
              Full-Stack
              <br />
              Developer
            </p>
            <div className="mx-auto flex pb-[20px]">
              <OutlineButton />
            </div>
            <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
          </div>
          <div className="hidden min-w-[200px] max-w-[250px] flex-col md:flex">
            <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
            <p className="mx-auto pb-[45px] pt-[45px] text-[24px] font-extrabold text-white">
              Full-Stack
              <br />
              Developer
            </p>
            <div className="mx-auto flex pb-[20px]">
              <OutlineButton />
            </div>
            <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
          </div>
          <div className="hidden min-w-[200px] max-w-[250px] flex-col lg:flex">
            <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
            <p className="mx-auto pb-[45px] pt-[45px] text-[24px] font-extrabold text-white">
              Full-Stack
              <br />
              Developer
            </p>
            <div className="mx-auto flex pb-[20px]">
              <OutlineButton />
            </div>
            <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
