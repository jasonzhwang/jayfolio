export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-[1180px] pb-[86px] pt-[51px] md:px-[100px]">
        <div className="mx-auto flex flex-col gap-[119px] lg:flex-row">
          <div className="flex flex-col">
            <p className="mx-auto text-[12px] text-[#FFCD3C] lg:ml-0">DESIGN/DEVELOPMENT/SUPPORT</p>
            <h1 className="mx-auto pb-[35px] pt-[60px] font-Nba_Lakers text-[130px] leading-[1] text-white lg:ml-0">
              JAYJAY
              <br />
              STUDIO
            </h1>
            <p className="mx-auto w-full text-center font-Hemenix text-[16px] text-white lg:ml-0 lg:w-[70%] lg:text-left">
              JayJay is an experienced Full Stack Developer making websites with 💛
            </p>
            <button className="mx-auto mt-[39px] bg-white px-[16px] py-[12px] text-[#FE5943] lg:ml-0">
              Learn more
            </button>
          </div>
          <div>
            <img src="./hero.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-[1180px] flex-1 flex-col gap-[19px] lg:flex-row">
        <div className="mx-auto flex flex-col gap-[19px] md:flex-row">
          <div className="flex max-w-[280px] flex-col rounded-xl bg-[#F14A38]">
            <div className="mx-auto flex gap-[50px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white xl:text-left">01</h2>
                <p className="text-[12px] text-[#FDCE40]">CHARACTER DESIGN</p>
              </div>
              <img src="./card-square.svg" alt="" className="hidden xl:block" />
            </div>
            <img src="./cardPicture.svg" alt="" className="hidden px-[50px] xl:block" />
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[48px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[100px] text-[14px] text-white">VARIOUS WORKS</p>
          </div>
          <div className="flex max-w-[280px] flex-col rounded-xl bg-[#F14A38]">
            <div className="mx-auto flex gap-[50px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white xl:text-left">02</h2>
                <p className="text-[12px] text-[#FDCE40]">CHARACTER DESIGN</p>
              </div>
              <img src="./card-square.svg" alt="" className="hidden xl:block" />
            </div>
            <img src="./cardPicture.svg" alt="" className="hidden px-[50px] xl:block" />
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[48px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[100px] text-[14px] text-white">VARIOUS WORKS</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-[19px] md:flex-row">
          <div className="flex max-w-[280px] flex-col rounded-xl bg-[#F14A38]">
            <div className="mx-auto flex gap-[50px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white xl:text-left">03</h2>
                <p className="text-[12px] text-[#FDCE40]">CHARACTER DESIGN</p>
              </div>
              <img src="./card-square.svg" alt="" className="hidden xl:block" />
            </div>
            <img src="./cardPicture.svg" alt="" className="hidden px-[50px] xl:block" />
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[48px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[100px] text-[14px] text-white">VARIOUS WORKS</p>
          </div>
          <div className="flex max-w-[280px] flex-col rounded-xl bg-[#F14A38]">
            <div className="mx-auto flex gap-[50px] pb-[26px] pt-[30px]">
              <div>
                <h2 className="text-center text-[32px] text-white xl:text-left">04</h2>
                <p className="text-[12px] text-[#FDCE40]">CHARACTER DESIGN</p>
              </div>
              <img src="./card-square.svg" alt="" className="hidden xl:block" />
            </div>
            <img src="./cardPicture.svg" alt="" className="hidden px-[50px] xl:block" />
            <h2 className="mx-auto py-[20px] text-center font-Robuck text-[48px] font-light leading-none text-white">
              CREATIVE DESIGN
            </h2>
            <p className="mx-auto pb-[100px] text-[14px] text-white">VARIOUS WORKS</p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-[1180px] flex-col">
        <div className="mx-auto mb-[50px] mt-[72px] rounded-lg bg-[#F14B36]">
          <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">TODO</button>
          <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">DONE</button>
          <button className="px-[16px] py-[12px] font-Hemenix font-[16px] text-white">
            COMMENT
          </button>
        </div>
        <div className="mx-auto w-full border-t-4 border-[#F14A38]">
          <div className="mx-auto flex items-center border-b-4 border-[#F14A38] px-[20px] py-[20px]">
            <div>
              <p className="text-[14px] text-white">Publications / Shots / Figma</p>
              <p className="text-white">Figma: JayJay Studio</p>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="flex items-center justify-center gap-[32px]">
                <img src="./task-icon.svg" alt="" />
                <img src="./profiles.svg" alt="" className="hidden md:block" />
                <p className="text-white">July,2023</p>
              </div>
            </div>
            <img src="dots-icon.svg" alt="" className="ml-auto" />
          </div>
          <div className="mx-auto flex items-center border-b-4 border-[#F14A38] px-[20px] py-[20px]">
            <div>
              <p className="text-[14px] text-white">Publications / Shots / Figma</p>
              <p className="text-white">Figma: JayJay Studio</p>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="flex items-center justify-center gap-[32px]">
                <img src="./task-icon.svg" alt="" />
                <img src="./profiles.svg" alt="" className="hidden md:block" />
                <p className="text-white">July,2023</p>
              </div>
            </div>
            <img src="dots-icon.svg" alt="" className="ml-auto" />
          </div>
          <div className="mx-auto flex items-center border-b-4 border-[#F14A38] px-[20px] py-[20px]">
            <div>
              <p className="text-[14px] text-white">Publications / Shots / Figma</p>
              <p className="text-white">Figma: JayJay Studio</p>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="flex items-center justify-center gap-[32px]">
                <img src="./task-icon.svg" alt="" />
                <img src="./profiles.svg" alt="" className="hidden md:block" />
                <p className="text-white">July,2023</p>
              </div>
            </div>
            <img src="dots-icon.svg" alt="" className="ml-auto" />
          </div>
          <div className="mx-auto flex items-center border-b-4 border-[#F14A38] px-[20px] py-[20px]">
            <div>
              <p className="text-[14px] text-white">Publications / Shots / Figma</p>
              <p className="text-white">Figma: JayJay Studio</p>
            </div>
            <div className="hidden flex-1 sm:block">
              <div className="flex items-center justify-center gap-[32px]">
                <img src="./task-icon.svg" alt="" />
                <img src="./profiles.svg" alt="" className="hidden md:block" />
                <p className="text-white">July,2023</p>
              </div>
            </div>
            <img src="dots-icon.svg" alt="" className="ml-auto" />
          </div>
        </div>
      </section>
      <section className="mx-auto mt-[100px] flex max-w-[1180px] rounded-2xl bg-[#F74E3B] pb-[34px] pt-[70px]">
        <div className="flex w-full flex-col sm:flex-row">
          <div className="mx-auto flex flex-col sm:ml-0 sm:pl-[110px]">
            <p className="text-center text-[#FDED39] sm:text-left">No 1/3</p>
            <h2 className="pb-[76px] pt-[48px] text-center font-Hemenix text-[32px] font-black text-white sm:text-left">
              Personal
              <br />
              Experience
            </h2>
            <img src="./arrow-buttons.svg" alt="" className="xs:ml-0 mx-auto" />
          </div>
          <div className="xs:ml-0 mx-auto flex gap-[20px]">
            <div className="flex min-w-[200px] max-w-[250px] flex-col">
              <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
              <p className="mx-auto pb-[85px] pt-[45px] text-[24px] font-extrabold text-white">
                Full-Stack
                <br />
                Developer
              </p>
              <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
            </div>
            <div className="hidden min-w-[200px] max-w-[250px] flex-col md:flex">
              <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
              <p className="mx-auto pb-[85px] pt-[45px] text-[24px] font-extrabold text-white">
                Full-Stack
                <br />
                Developer
              </p>
              <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
            </div>
            <div className="hidden min-w-[200px] max-w-[250px] flex-col lg:flex">
              <h3 className="mx-auto font-Hemenix text-[36px] font-black text-white">TaoTech</h3>
              <p className="mx-auto pb-[85px] pt-[45px] text-[24px] font-extrabold text-white">
                Full-Stack
                <br />
                Developer
              </p>
              <p className="mx-auto font-Hemenix font-extrabold text-white">Remote</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-[100px] flex max-w-[1180px] flex-col lg:flex-row">
        <div className="rounded-l-2xl bg-[#F74E3B] pt-[82px] lg:pb-[79px] lg:pr-[200px]">
          <div className="flex lg:gap-[35px] lg:pl-[56px]">
            <div className="mt-[15px]">
              <img src="./footer-points.svg" alt="" className="hidden lg:block" />
            </div>
            <div className="mx-auto">
              <div className="hidden gap-[10px] lg:flex">
                <div className="flex h-[72px] w-[72px] rounded-[8px] bg-white">
                  <p className="mx-auto mt-[-3px] font-Nba_Lakers text-[64px] text-[#F14A38]">JS</p>
                </div>
                <p className="my-auto font-Hemenix text-[20px] font-black text-white">
                  J A Y J A Y<br />S T U D I O
                </p>
              </div>
              <h2 className="mt-[47px] text-center font-Robuck text-[48px] leading-none text-white lg:text-left">
                2023 BEST <br />
                OF THE BEST
              </h2>
              <img
                src="./line-switcher.svg"
                className="mx-auto pb-[24px] pt-[25px] lg:ml-0"
                alt=""
              />
              <p className="mx-auto w-[60%] text-center text-white lg:ml-0 lg:text-left ">
                Mattis enime tellus elementum sagittis rem ipsum dolor amet.
              </p>
              <div className="flex">
                <button className="mx-auto mt-[61px] bg-white px-[16px] py-[12px] text-[#FE5943] lg:ml-0">
                  View Cases
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[200px] rounded-r-2xl border-[4px] border-[#F14A38] bg-[#FE5943] lg:block"></div>
        <div className="flex lg:relative lg:flex-1">
          <div className="mx-auto lg:absolute lg:right-0 lg:w-[626px] lg:translate-y-[35px]">
            <img src="./case-frame.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
