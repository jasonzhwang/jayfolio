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
    <div className="flex flex-col rounded-xl bg-[#F14A38] px-[20px]">
      <div className="flex min-w-[207px] pb-[26px] pt-[30px]">
        <div className="mx-auto sm:ml-0">
          <h2 className="text-center text-[32px] text-white sm:text-left">0{index}</h2>
          <p className="text-[10px] text-[#FDCE40]">{advDescription}</p>
        </div>
        {/* <img src="./card-square.svg" alt="" className="hidden ml-auto sm:block" /> */}
        <div className="ml-auto hidden h-[50px] w-[50px] rounded-xl border-[3px] border-[#FE5943] sm:flex">
          <img src={advPic} alt="" className="mx-auto my-auto sm:h-[25px] sm:w-[25x]" />
        </div>
      </div>
      <div className="mx-auto hidden h-[200px] w-[208px] overflow-hidden rounded-xl border-[10px] border-white lg:flex">
        <img src={imgSrc} alt="" className="h-[190px] w-[200px]" />
      </div>
      <h2 className="mx-auto py-[20px] text-center font-Robuck text-[36px] font-light leading-none text-white">
        {serviceTitle}
      </h2>
      <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white">{serviceSubTitle}</p>
      <div className="flex max-w-[200px] flex-wrap justify-center gap-[3px] pb-[15px]">
        {skillSet.map((item, index) => {
          return <TagButton key={index} tagContent={item} />;
        })}
        {/* <TagButton tagContent="Photoshop" />
        <TagButton tagContent="InDesign" />
        <TagButton tagContent="Illustrator" /> */}
      </div>
      <div className="mx-auto mb-[10px] flex h-[50px] w-[50px]">
        <SendMessage className="h-full w-full text-white" />
      </div>
    </div>
  );
};

export default ServiceCard;
