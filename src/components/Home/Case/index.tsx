import React from "react";

const CaseSection = () => {
  return (
    <section className="mx-[15px] flex flex-col md:mx-[32px]">
      <div className="mx-auto mb-[50px] mt-[72px] rounded-lg bg-[#F14B36]">
        <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">TODO</button>
        <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">DONE</button>
        <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">COMMENT</button>
      </div>
      <div className="mx-auto max-w-[1180px] border-t-4 border-[#F14A38]">
        <div className="mx-auto flex items-center gap-[20px] border-b-4 border-[#F14A38] px-[20px] py-[20px]">
          <div>
            <p className="text-[14px] text-white">Publications / Shots / Figma</p>
            <p className="text-white underline">Figma: JayJay Studio</p>
          </div>
          <div className="hidden flex-1 sm:block">
            <div className="flex items-center justify-center gap-[32px]">
              <img src="./task-icon.svg" alt="" />
              <img src="./profiles.svg" alt="" className="hidden md:block" />
              <p className="text-white">July,2023</p>
            </div>
          </div>
          <img src="dots-icon.svg" alt="" className="ml-auto" />
        </div>
        <div className="mx-auto flex items-center gap-[20px] border-b-4 border-[#F14A38] px-[20px] py-[20px]">
          <div>
            <p className="text-[14px] text-white">Publications / Shots / Figma</p>
            <p className="text-white underline">Figma: JayJay Studio</p>
          </div>
          <div className="hidden flex-1 sm:block">
            <div className="flex items-center justify-center gap-[32px]">
              <img src="./task-icon.svg" alt="" />
              <img src="./profiles.svg" alt="" className="hidden md:block" />
              <p className="text-white">July,2023</p>
            </div>
          </div>
          <img src="dots-icon.svg" alt="" className="ml-auto" />
        </div>
        <div className="mx-auto flex items-center gap-[20px] border-b-4 border-[#F14A38] px-[20px] py-[20px]">
          <div>
            <p className="text-[14px] text-white">Publications / Shots / Figma</p>
            <p className="text-white underline">Figma: JayJay Studio</p>
          </div>
          <div className="hidden flex-1 sm:block">
            <div className="flex items-center justify-center gap-[32px]">
              <img src="./task-icon.svg" alt="" />
              <img src="./profiles.svg" alt="" className="hidden md:block" />
              <p className="text-white">July,2023</p>
            </div>
          </div>
          <img src="dots-icon.svg" alt="" className="ml-auto" />
        </div>
        <div className="mx-auto flex items-center gap-[20px] border-b-4 border-[#F14A38] px-[20px] py-[20px]">
          <div>
            <p className="text-[14px] text-white">Publications / Shots / Figma</p>
            <p className="text-white underline">Figma: JayJay Studio</p>
          </div>
          <div className="hidden flex-1 sm:block">
            <div className="flex items-center justify-center gap-[32px]">
              <img src="./task-icon.svg" alt="" />
              <img src="./profiles.svg" alt="" className="hidden md:block" />
              <p className="text-white">July,2023</p>
            </div>
          </div>
          <img src="dots-icon.svg" alt="" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
