import React from "react";

const HeroSection = () => {
  return (
    <section
      className="mx-[15px] flex pb-[86px] pt-[51px] md:mx-[32px] md:px-[100px]"
      id="interest"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col lg:flex-row">
        <div className="flex flex-col">
          <p className="mx-auto text-[12px] text-[#FFCD3C] lg:ml-0">
            DESIGN&nbsp;&nbsp;/&nbsp;&nbsp;DEVELOPMENT&nbsp;&nbsp;/&nbsp;&nbsp;SUPPORT
          </p>
          <h1 className="mx-auto pb-[35px] pt-[60px] font-Nba_Lakers text-[130px] leading-[1] tracking-tight text-white lg:ml-0">
            JAYJAY
            <br />
            STUDIO
          </h1>
          <p className="mx-auto w-[80%] text-center font-Hemenix text-[16px] text-white lg:ml-0 lg:w-[70%] lg:text-left">
            JayJay is an experienced Full Stack Developer making websites with 💛
          </p>
          <button
            className="mx-auto mt-[39px] rounded-md bg-white px-[16px] py-[12px] font-Hemenix text-[#FE5943] hover:bg-[#FFCD3C] lg:ml-0"
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/jasonzhw/";
            }}
          >
            Learn more
          </button>
        </div>
        <div className="mx-auto mt-[50px] flex h-[300px] sm:h-[500px]">
          <img src="./hero.svg" alt="" className="h-full " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
