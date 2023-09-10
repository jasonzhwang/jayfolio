import react, { useState } from "react";
import { Session } from "next-auth";
import Menu from "@/src/components/Shared/Menu";
import Hamburger from "@/public/hamburger.svg";
import Close from "@/public/close.svg";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import Figma from "@/public/figma.svg";

const Header = ({ session }: { session: Session | null }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <header className="flex pt-[5px] md:mx-[32px]">
      <div className="mx-auto flex w-full max-w-[1180px]">
        <div className="flex rounded-l-xl border-red-400 bg-[#F3F3F3]">
          <div className="flex h-[99px] rounded-l-xl border-r-4 border-[#FE5943] bg-gray-200">
            <div className="my-auto ml-[17px] mr-[52px]">
              <img src="/headerpoints.svg" />
            </div>
          </div>
          <div className="mr-[-37px] -translate-x-1/2 translate-y-1/2">
            <img src="/jslogo.svg" className="-translate-y-1/2" />
          </div>
          <img src="/logositename.svg" className="hidden sm:mx-[18px] md:block" />
          <div className="w-[18px] lg:w-0"></div>
        </div>
        <div className="flex flex-1 rounded-r-xl border-4 border-l-0 border-[#F34932] bg-[#FE5943]">
          <Menu />
          <div className="flex flex-1">
            <div className="my-auto hidden flex-1 justify-center gap-[5px] sm:flex">
              {/* <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./linkedin.svg" className="mx-auto my-auto h-[20px]" />
              </div>
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./github.svg" className="mx-auto my-auto h-[20px]" />
              </div>
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./figma.svg" className="mx-auto my-auto h-[20px]" />
              </div> */}
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F14A38] hover:border-[3px] hover:border-[#FDCE40] hover:bg-[#0077B5]">
                <Linkedin className="h-[30px] w-[30px]" />
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F14A38] hover:border-[3px] hover:border-[#FDCE40] hover:bg-[#6e5494]">
                <Github className="h-[30px] w-[30px]" />
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F14A38] hover:border-[3px] hover:border-[#FDCE40] hover:bg-[#00BEFF]">
                <Figma className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div className="ml-auto flex gap-[5px] pr-[20px]">
              <span className="my-auto px-[16px] py-[12px] text-xl font-black text-white">
                LOGIN
              </span>
              {isMenuShown && (
                <div
                  className="my-auto flex h-[30px] w-[30px] lg:hidden"
                  onClick={() => {
                    setIsMenuShown(!isMenuShown);
                  }}
                >
                  <Close className="mx-auto my-auto h-full text-white" />
                </div>
              )}
              {!isMenuShown && (
                <div
                  className="my-auto flex h-[30px] w-[30px] lg:hidden"
                  onClick={() => {
                    setIsMenuShown(!isMenuShown);
                  }}
                >
                  <Hamburger className="mx-auto my-auto h-full text-white" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuShown && (
        <div className="absolute top-[110px] z-10 flex h-[500px] w-full items-center justify-center bg-white md:w-[93%] lg:hidden">
          <ul className="flex flex-col items-center gap-[50px] text-center leading-8">
            <li className="font-Robuck text-[32px] tracking-widest text-[#F14A38]">CASES</li>
            <li className="font-Robuck text-[32px] tracking-widest text-[#F14A38]">SKILLS</li>
            <li className="font-Robuck text-[32px] tracking-widest text-[#F14A38]">CAREER</li>
            <li className="font-Robuck text-[32px] tracking-widest text-[#F14A38]">BLOGS</li>
            <li className="flex gap-[10px]">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0077B5]">
                <Linkedin className="h-[30px] w-[30px]" />
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#6e5494]">
                <Github className="h-[30px] w-[30px]" />
              </div>
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#00BEFF]">
                <Figma className="h-[30px] w-[30px]" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
