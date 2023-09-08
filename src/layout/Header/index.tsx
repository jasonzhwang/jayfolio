import { Session } from "next-auth";
import Menu from "@/src/components/Shared/Menu";

const Header = ({ session }: { session: Session | null }) => {
  return (
    // <header className="mx-[15px] flex pt-[45px] md:mx-[32px]">
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
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./linkedin.svg" className="mx-auto my-auto h-[20px]" />
              </div>
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./github.svg" className="mx-auto my-auto h-[20px]" />
              </div>
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#F14A38]">
                <img src="./figma.svg" className="mx-auto my-auto h-[20px]" />
              </div>
            </div>
            <div className="ml-auto flex gap-[5px] pr-[50px]">
              <span className="my-auto px-[16px] py-[12px] text-xl font-black text-white">
                LOGIN
              </span>
              <img
                src="/collapsible-navigation.svg"
                alt=""
                className="my-auto h-[16px] w-[24px] lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
