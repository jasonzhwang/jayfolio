import React from "react";
import TagButton from "./TagButton";
import SendMessage from "@/public/send-message.svg";

const serviceImg = ["./flyer.png", "./uiux.png", "./coding.jpeg", "./it-support.jpeg"];

interface ServiceCardProps {
  index: number;
  advDescription: string;
  advPic: string;
  serviceTitle: string;
  serviceSubTitle: string;
  skillSet: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  advDescription,
  advPic,
  serviceTitle,
  serviceSubTitle,
  skillSet,
}) => {
  const imgSrc = serviceImg[index - 1];
  return (
    <div className="group flex flex-col lg:min-h-[580px]">
      <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
        <div className="flex min-w-[207px] pb-[26px] pt-[30px]">
          <div className="mx-auto sm:ml-0">
            <h2 className="text-center text-[32px] text-white sm:text-left">0{index}</h2>
            <p className="text-[10px] text-[#FDCE40]">{advDescription}</p>
          </div>
          {/* <img src="./card-square.svg" alt="" className="hidden ml-auto sm:block" /> */}
          <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] group-hover:border-[#FDCE40] sm:flex">
            <img src={advPic} alt="" className="mx-auto my-auto sm:h-[25px] sm:w-[25x]" />
          </div>
        </div>
        <div className="mx-auto hidden h-[200px] w-[208px] overflow-hidden rounded-xl border-[10px] border-white lg:flex">
          <img src={imgSrc} alt="" className="h-[190px] w-[200px]" />
        </div>
        <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
          {serviceTitle}
        </h2>
        <div className="flex h-[80px] flex-col">
          <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white group-hover:hidden">
            {serviceSubTitle}
          </p>
          <div className="flex h-[25px] max-w-[200px] flex-wrap justify-center gap-[3px] overflow-hidden pb-[0px] group-hover:h-[50px]">
            {skillSet.map((item, index) => {
              return <TagButton key={index} tagContent={item} />;
            })}
          </div>
        </div>
        <div className="mx-auto mb-[10px] flex h-[35px] w-[35px] group-hover:invisible">
          <SendMessage className="h-full w-full text-white" />
        </div>
      </div>
      <button className="relative mx-auto hidden -translate-y-3/4 rounded-xl border-[5px] border-[#FE5943] bg-[#FDCE40] px-[16px] py-[12px] text-white group-hover:block">
        Send Enquries
      </button>
    </div>
  );
};

export default ServiceCard;
