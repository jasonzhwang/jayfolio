import Logo from "@/src/components/Shared/Logo";
import StudioName from "@/src/components/Shared/StudioName";
import Menu from "@/src/components/Shared/Menu";

const Footer = () => {
  return (
    <footer className="flex-col bg-[#FE5943]">
      <div className="mx-auto max-w-[1210px] translate-y-[100px] rounded-2xl border-[15px] border-[#FE5943]">
        <div className="flex flex-1 justify-center rounded-2xl border-[4px] border-[#F14A38] bg-[#F74E3B] py-[27px]">
          <div className="flex max-w-[950px] flex-1 flex-col md:flex-row">
            <h2 className="mx-auto my-auto mb-[18px] min-w-[200px] font-Robuck text-[36px] font-light leading-none text-white sm:text-[48px] md:mb-0 md:ml-0">
              YOU CAN FIND
              <span className="hidden md:inline">
                <br />
              </span>
              ME HERE:
            </h2>
            <div className="mx-auto flex space-x-[0.5rem] sm:space-x-[1.5rem]">
              <img src="./contact.svg" alt="" className="w-[50px] sm:w-[80px]" />
              <img src="./contact.svg" alt="" className="w-[50px] sm:w-[80px]" />
              <img src="./contact.svg" alt="" className="w-[50px] sm:w-[80px]" />
              <img src="./contact.svg" alt="" className="w-[50px] sm:w-[80px]" />
              <img src="./contact.svg" alt="" className="w-[50px] sm:w-[80px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-[#F14A38] pb-[21px] pt-[127px]">
        <div className="mx-auto flex max-w-[1180px] flex-1 items-center px-[37px]">
          <div className="flex gap-[35px]">
            <img src="./footer-points.svg" alt="" />
            <div className="flex gap-[10px]">
              <Logo />
              <StudioName />
            </div>
          </div>
          <div className="flex flex-1">
            <Menu />
            {/* <ul className="hidden flex-1 justify-center gap-[40px] px-[50px] lg:flex">
              <li className="text-white font-Hemenix">CASES</li>
              <li className="text-white font-Hemenix">CAREERS</li>
              <li className="text-white font-Hemenix">BLOGS</li>
              <li className="text-white font-Hemenix">ABOUT</li>
            </ul> */}
          </div>
          <p className="my-auto ml-auto font-Hemenix text-[12px] text-[#FDED39]">
            2023 | COPYRIGHT
            <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
