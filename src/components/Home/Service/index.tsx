import React from "react";
import TagButton from "../../Shared/TagButton";

const ServiceSection = () => {
  return (
    <section className="mx-[15px] flex md:mx-0">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-[10px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
            <div className="flex min-w-[207px] pb-[26px] pt-[30px]">
              <div className="mx-auto sm:ml-0">
                <h2 className="text-center text-[32px] text-white sm:text-left">01</h2>
                <p className="text-[10px] text-[#FDCE40]">CHARACTER</p>
              </div>
              {/* <img src="./card-square.svg" alt="" className="hidden ml-auto sm:block" /> */}
              <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] sm:flex">
                <img src="./design.svg" alt="" className="mx-auto my-auto sm:h-[25px] sm:w-[25x]" />
              </div>
            </div>
            <div className="mx-auto hidden h-[180px] w-[180px] rounded-xl border-[10px] border-white lg:block"></div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
            <div className="flex max-w-[200px] flex-wrap justify-center gap-[3px] pb-[15px]">
              <TagButton tagContent="Photoshop" />
              <TagButton tagContent="InDesign" />
              <TagButton tagContent="Illustrator" />
            </div>
            <div className="h-[50px] translate-y-[17px]">
              <img src="./round-play.svg" alt="" className="mx-auto sm:ml-[15px]" />
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div className="mx-auto sm:ml-0">
                <h2 className="text-center text-[32px] text-white sm:text-left">02</h2>
                <p className="text-[10px] text-[#FDCE40]">CUSTOM</p>
              </div>
              <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] sm:flex">
                <img src="./uiux.svg" alt="" className="mx-auto my-auto sm:h-[30px] sm:w-[30px]" />
              </div>
            </div>
            <div className="mx-auto hidden h-[180px] w-[180px] rounded-xl border-[10px] border-white lg:block"></div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              UI & UX Design
            </h2>
            <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
            <div className="flex max-w-[200px] flex-wrap justify-center gap-[3px] pb-[15px]">
              <TagButton tagContent="Figma" />
              <TagButton tagContent="XD" />
              <TagButton tagContent="Design System" />
            </div>
            <div className="h-[50px] translate-y-[17px]">
              <img src="./round-play.svg" alt="" className="mx-auto sm:ml-[15px]" />
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-[10px] sm:flex-row">
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div className="mx-auto sm:ml-0">
                <h2 className="text-center text-[32px] text-white sm:text-left">03</h2>
                <p className="text-[10px] text-[#FDCE40]">EFFICIENT</p>
              </div>
              <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] sm:flex">
                <img src="./light.svg" alt="" className="mx-auto my-auto sm:h-[25px] sm:w-[25px]" />
              </div>
            </div>
            <div className="mx-auto hidden h-[180px] w-[180px] rounded-xl border-[10px] border-white lg:block"></div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              Web Development
            </h2>
            <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
            <div className="flex max-w-[200px] flex-wrap justify-center gap-[3px] pb-[15px]">
              <TagButton tagContent="Front-end" />
              <TagButton tagContent="Backend" />
              <TagButton tagContent="Database" />
            </div>
            <div className="h-[50px] translate-y-[17px]">
              <img src="./round-play.svg" alt="" className="mx-auto sm:ml-[15px]" />
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div className="mx-auto sm:ml-0">
                <h2 className="text-center text-[32px] text-white sm:text-left">04</h2>
                <p className="text-[10px] text-[#FDCE40]">CONSISTENT</p>
              </div>
              <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] sm:flex">
                <img
                  src="./support.svg"
                  alt=""
                  className="mx-auto my-auto sm:h-[30px] sm:w-[30px]"
                />
              </div>
            </div>
            <div className="mx-auto hidden h-[180px] w-[180px] rounded-xl border-[10px] border-white lg:block"></div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              IT Support
            </h2>
            <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
            <div className="flex max-w-[200px] flex-wrap justify-center gap-[3px] pb-[15px]">
              <TagButton tagContent="NAS" />
              <TagButton tagContent="Pronto" />
              <TagButton tagContent="HyperV" />
              <TagButton tagContent="VMware" />
            </div>
            <div className="h-[50px] translate-y-[17px]">
              <img src="./round-play.svg" alt="" className="mx-auto sm:ml-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
