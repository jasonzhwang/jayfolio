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
              <div className="my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px]">
                <img
                  src="./linkedin.svg"
                  alt=""
                  className="mx-auto my-auto sm:h-[40px] sm:w-[40px]"
                />
              </div>
              <div className="my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px]">
                <img
                  src="./github.svg"
                  alt=""
                  className="mx-auto my-auto sm:h-[40px] sm:w-[40px]"
                />
              </div>
              <div className="my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px]">
                <img src="./figma.svg" alt="" className="mx-auto my-auto sm:h-[40px] sm:w-[40px]" />
              </div>
              <div className="my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px]">
                <img
                  src="./wechat.svg"
                  alt=""
                  className="mx-auto my-auto sm:h-[40px] sm:w-[40px]"
                />
              </div>
              <div className="my-auto flex h-[50px] w-[50px] rounded-2xl border-[4px] border-white sm:h-[80px] sm:w-[80px]">
                <img src="./email.svg" alt="" className="mx-auto my-auto h-[30px] w-[30px]" />
              </div>
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
