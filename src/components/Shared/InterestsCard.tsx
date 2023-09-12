import React from "react";
import TagButton from "./TagButton";
// import SendMessage from "@/public/send-message.svg";
import SendMail from "@/public/mail-send.svg";

const InterestsImg = ["./flyer.png", "./uiux.png", "./coding.jpeg", "./it-support.jpeg"];

interface InterestsCardProps {
  index: number;
  advDescription: string;
  advPic: string;
  InterestsTitle: string;
  InterestsSubTitle: string;
  skillSet: string[];
}

const InterestsCard: React.FC<InterestsCardProps> = ({
  index,
  advDescription,
  advPic,
  InterestsTitle,
  InterestsSubTitle,
  skillSet,
}) => {
  const receiverEmail = "jason.zhw.work@gmail.com";

  const handleEmailClick = () => {
    console.log("clicked");
    const subject = "Your Subject Here"; // Replace with your desired email subject
    const body = "Your email body text goes here."; // Replace with your desired email body

    // Construct the mailto link
    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  const imgSrc = InterestsImg[index - 1];
  return (
    <div className="group flex min-h-[380px] flex-col lg:min-h-[580px]" onClick={handleEmailClick}>
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
          {InterestsTitle}
        </h2>
        <div className="flex h-[80px] flex-col">
          <p className="mx-auto pb-[18px] font-Hemenix text-[14px] text-white group-hover:hidden">
            {InterestsSubTitle}
          </p>
          <div className="flex h-[25px] max-w-[200px] flex-wrap justify-center gap-[3px] overflow-hidden pb-[0px] group-hover:h-[50px]">
            {skillSet.map((item, index) => {
              return <TagButton key={index} tagContent={item} />;
            })}
          </div>
        </div>
        <div className="mx-auto mb-[10px] flex h-[35px] w-[35px] group-hover:invisible">
          {/* <SendMessage className="w-full h-full text-white" /> */}
          <SendMail className="h-full w-full text-white" />
        </div>
      </div>
      <button className="relative mx-auto hidden -translate-y-3/4 rounded-xl border-[5px] border-[#FE5943] bg-[#FDCE40] px-[16px] py-[12px] font-Hemenix text-white group-hover:block">
        Send Enquries
      </button>
    </div>
  );
};

export default InterestsCard;
