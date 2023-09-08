import React from "react";

export enum SocialMediaType {
  Linkedin = "linkedin",
  Github = "github",
  Figma = "figma",
  Wechat = "wechat",
  Email = "email",
}
interface SocialMediaProps {
  socialMedia: SocialMediaType;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ socialMedia }) => {
  let bgColor;
  let linkSrc;
  switch (socialMedia) {
    case SocialMediaType.Linkedin:
      bgColor = "bg-[#0077B5]";
      linkSrc = "./linkedin.svg";
      break;
    case SocialMediaType.Github:
      bgColor = "bg-[#6e5494]";
      linkSrc = "./github.svg";
      break;
    case SocialMediaType.Figma:
      bgColor = "bg-[#00BEFF]";
      linkSrc = "./figma.svg";
      break;
    case SocialMediaType.Wechat:
      bgColor = "bg-[#09B83E]";
      linkSrc = "./wechat.svg";
      break;
    case SocialMediaType.Email:
      bgColor = "bg-[#808080]";
      linkSrc = "./email.svg";
      break;
  }
  return (
    <div
      // className={`my-auto flex h-[30px] w-[30px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px] ${bgColor}`}
      className={`my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white group-hover:border-[#FDED39] sm:h-[70px] sm:w-[70px] ${bgColor} sm:group-hover:h-[80px] sm:group-hover:w-[80px]`}
    >
      <img
        src={linkSrc}
        alt=""
        className="mx-auto my-auto h-[25px] w-[25px] sm:h-[40px] sm:w-[40px]"
      />
    </div>
  );
};

export default SocialMedia;
