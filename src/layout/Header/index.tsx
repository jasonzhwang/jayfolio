import { Session } from "next-auth";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <header className="mx-auto flex max-w-[1180px] pt-[45px] ">
      <div className="flex rounded-l-xl border-red-400 bg-[#F3F3F3]">
        <div className="flex h-[99px] rounded-l-xl border-r-4 border-[#FE5943] bg-gray-200">
          <div className="my-auto ml-[17px] mr-[52px]">
            <img src="/headerpoints.svg" />
          </div>
        </div>
        <div className="mr-[-37px] -translate-x-1/2 translate-y-1/2">
          <img src="/jslogo.svg" className="-translate-y-1/2" />
        </div>
        <img src="/logositename.svg" className="hidden sm:mx-[18px] sm:block" />
        <div className="w-[18px] lg:w-0"></div>
      </div>
      <div className="flex flex-1 rounded-r-xl border-4 border-l-0 border-[#F34932] bg-[#FE5943]">
        <ul className="my-auto hidden w-0 min-w-[450px] gap-[40px] px-[50px] lg:flex">
          <li className="text-white">CASES</li>
          <li className="text-white">CAREERS</li>
          <li className="text-white">BLOGS</li>
          <li className="text-white">ABOUT</li>
        </ul>
        <div className="flex flex-1">
          <div className="my-auto flex-1">
            <img
              src="/socialmedias.svg"
              alt=""
              className="mx-auto hidden min-w-[130px] px-[16px] sm:block"
            />
          </div>
          <div className="flex gap-[5px] pr-[50px]">
            <span className="my-auto px-[16px] py-[12px] text-xl font-black text-white">LOGIN</span>
            <img
              src="/collapsible-navigation.svg"
              alt=""
              className="my-auto h-[16px] w-[24px] lg:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
