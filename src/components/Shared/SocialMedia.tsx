import React, { useState } from "react";
import SendEmail from "./SendEmail";

export enum SocialMediaType {
  Linkedin = "linkedin",
  Github = "github",
  Figma = "figma",
  Wechat = "wechat",
  Email = "email",
}
interface SocialMediaProps {
  socialMedia: SocialMediaType;
  wechatPopupVisible: boolean;
  setWechatPopupVisible: (newValue: boolean) => void;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  socialMedia,
  wechatPopupVisible,
  setWechatPopupVisible,
}) => {
  let bgColor;
  let imgSrc;
  let linkUrl: string;
  switch (socialMedia) {
    case SocialMediaType.Linkedin:
      bgColor = "bg-[#0077B5]";
      imgSrc = "./linkedin.svg";
      linkUrl = "https://www.linkedin.com/in/jasonzhw/";
      break;
    case SocialMediaType.Github:
      bgColor = "bg-[#6e5494]";
      imgSrc = "./github.svg";
      linkUrl = "https://github.com/jasonzhwang";
      break;
    case SocialMediaType.Figma:
      bgColor = "bg-[#00BEFF]";
      imgSrc = "./figma.svg";
      linkUrl =
        "https://www.figma.com/proto/ggF3BYJNnEwtgce2EaLn5j/JayJay-Studio?type=design&node-id=617-1768&t=HU3sLIE4qyutqLF9-0&scaling=min-zoom&page-id=0%3A1";
      break;
    case SocialMediaType.Wechat:
      bgColor = "bg-[#09B83E]";
      imgSrc = "./wechat.svg";
      break;
    case SocialMediaType.Email:
      bgColor = "bg-[#808080]";
      imgSrc = "./email.svg";
      break;
  }
  return (
    <div
      className={`my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white group-hover:border-[#FDED39] sm:h-[70px] sm:w-[70px] ${bgColor} sm:group-hover:h-[80px] sm:group-hover:w-[80px]`}
      onClick={(event) => {
        if (socialMedia === SocialMediaType.Wechat || socialMedia === SocialMediaType.Email) {
          event.preventDefault();

          if (socialMedia === SocialMediaType.Wechat) {
            setWechatPopupVisible(!wechatPopupVisible);
          } else if (socialMedia === SocialMediaType.Email) {
            SendEmail();
          }
        } else {
          window.location.href = linkUrl;
        }
      }}
    >
      <img
        src={imgSrc}
        alt=""
        className="mx-auto my-auto h-[25px] w-[25px] sm:h-[40px] sm:w-[40px]"
      />
    </div>
  );
};

export default SocialMedia;
