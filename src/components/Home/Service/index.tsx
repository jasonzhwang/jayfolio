import React from "react";

const ServiceSection = () => {
  return (
    <section className="mx-[15px] flex md:mx-0">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-[10px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[10px] md:flex-row">
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[16px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white md:text-left">01</h2>
                <p className="text-[10px] text-[#FDCE40]">CHARACTER</p>
              </div>
              <img src="./card-square.svg" alt="" className="ml-auto hidden md:block" />
            </div>
            <div className="hidden h-[180px] w-[180px] border-[10px] lg:block">
              <img src="./cardPicture.svg" alt="" className="h-full w-full" />
            </div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[100px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
          </div>
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[16px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white md:text-left">02</h2>
                <p className="text-[10px] text-[#FDCE40]">CUSTOM</p>
              </div>
              <img src="./card-square.svg" alt="" className="ml-auto hidden md:block" />
            </div>
            <div className="hidden h-[180px] w-[180px] border-[10px] lg:block">
              <img src="./cardPicture.svg" alt="" className="h-full w-full" />
            </div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              UI & UX Design
            </h2>
            <p className="mx-auto pb-[100px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-[10px] md:flex-row">
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[16px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white md:text-left">03</h2>
                <p className="text-[10px] text-[#FDCE40]">EFFICIENT</p>
              </div>
              <img src="./card-square.svg" alt="" className="ml-auto hidden md:block" />
            </div>
            <div className="hidden h-[180px] w-[180px] border-[10px] lg:block">
              <img src="./cardPicture.svg" alt="" className="h-full w-full" />
            </div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              Web Development
            </h2>
            <p className="mx-auto pb-[100px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
          </div>
          <div className="flex flex-col rounded-xl bg-[#F14A38] px-[16px]">
            <div className="mx-auto flex min-w-[207px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white md:text-left">04</h2>
                <p className="text-[10px] text-[#FDCE40]">CONSISTENT</p>
              </div>
              <img src="./card-square.svg" alt="" className="ml-auto hidden md:block" />
            </div>
            <div className="hidden h-[180px] w-[180px] border-[10px] lg:block">
              <img src="./cardPicture.svg" alt="" className="h-full w-full" />
            </div>
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
              IT Support
            </h2>
            <p className="mx-auto pb-[100px] font-Hemenix text-[14px] text-white">VARIOUS WORKS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
