const Footer = () => {
  return (
    <footer className="flex-col bg-[#FE5943]">
      <div className="mx-auto max-w-[1210px] translate-y-[100px] rounded-2xl border-[15px] border-[#FE5943]">
        <div className="flex flex-1 justify-center rounded-2xl border-[4px] border-[#F14A38] bg-[#F74E3B] py-[27px]">
          <div className="flex max-w-[950px] flex-1 flex-col md:flex-row">
            <h2 className="my-auto min-w-[200px] font-Robuck text-[48px] font-light leading-none text-white">
              YOU CAN FIND
              <span className="hidden md:inline">
                <br />
              </span>
              ME HERE:
            </h2>
            <div className="mx-auto flex space-x-[1rem]">
              <img src="./contact.svg" alt="" />
              <img src="./contact.svg" alt="" />
              <img src="./contact.svg" alt="" />
              <img src="./contact.svg" alt="" />
              <img src="./contact.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-[#F14A38] pb-[21px] pt-[127px]">
        <div className="mx-auto flex max-w-[1180px] flex-1 items-center px-[37px]">
          <div className="flex gap-[35px]">
            <img src="./footer-points.svg" alt="" />
            <div className="flex gap-[10px]">
              <div className="flex h-[72px] w-[72px] rounded-[8px] bg-white">
                <p className="mx-auto mt-[-3px] font-Nba_Lakers text-[64px] text-[#F14A38]">JS</p>
              </div>
              <p className="my-auto font-Hemenix text-[20px] font-black text-white">
                J A Y J A Y<br />S T U D I O
              </p>
            </div>
          </div>
          <div className="flex flex-1">
            <ul className="hidden flex-1 justify-center gap-[40px] px-[50px] lg:flex">
              <li className="font-Hemenix text-white">CASES</li>
              <li className="font-Hemenix text-white">CAREERS</li>
              <li className="font-Hemenix text-white">BLOGS</li>
              <li className="font-Hemenix text-white">ABOUT</li>
            </ul>
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
