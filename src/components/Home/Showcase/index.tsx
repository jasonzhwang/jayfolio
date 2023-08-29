import React from "react";
import Logo from "../../Shared/Logo";
import StudioName from "../../Shared/StudioName";

const ShowCase = () => {
  return (
    <section className="mx-[15px] mt-[100px] md:mx-[32px]">
      <div className="mx-auto flex max-w-[1180px] flex-col lg:flex-row">
        <div className="rounded-l-2xl bg-[#F74E3B] pt-[82px] lg:pb-[79px] lg:pr-[200px]">
          <div className="flex lg:gap-[35px] lg:pl-[56px]">
            <div className="mt-[15px]">
              <img src="./footer-points.svg" alt="" className="hidden lg:block" />
            </div>
            <div className="mx-auto">
              <div className="hidden gap-[10px] lg:flex">
                <Logo />
                <StudioName />
              </div>
              <h2 className="mt-[47px] text-center font-Robuck text-[48px] leading-none text-white lg:text-left">
                2023 BEST <br />
                OF THE BEST
              </h2>
              <img
                src="./line-switcher.svg"
                className="mx-auto pb-[24px] pt-[25px] lg:ml-0"
                alt=""
              />
              <p className="mx-auto w-[60%] text-center text-white lg:ml-0 lg:text-left ">
                Mattis enime tellus elementum sagittis rem ipsum dolor amet.
              </p>
              <div className="flex">
                <button className="mx-auto mt-[61px] bg-white px-[16px] py-[12px] text-[#FE5943] lg:ml-0">
                  View Cases
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[200px] rounded-r-2xl border-[4px] border-[#F14A38] bg-[#FE5943] lg:block"></div>
        <div className="flex bg-[#F74E3B] lg:relative lg:flex-1 lg:bg-[#FE5943]">
          <div className="mx-auto lg:absolute lg:right-0 lg:w-[626px] lg:translate-y-[35px]">
            <img src="./case-frame.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
