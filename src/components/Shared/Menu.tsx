import React from "react";

const Menu = () => {
  return (
    <ul className="my-auto hidden flex-1 justify-center gap-[30px] px-[20px] lg:flex">
      <li className="font-Hemenix text-[16px] text-white hover:text-[#FDCE40]">
        <a href="#skills">SKILLS</a>
      </li>
      <li className="font-Hemenix text-[16px] text-white hover:text-[#FDCE40]">
        <a href="#projects">PROJECTS</a>
      </li>
      <li className="font-Hemenix text-[16px] text-white hover:text-[#FDCE40]">
        <a href="#experiences">CAREER</a>
      </li>
      <li className="font-Hemenix text-[16px] text-white hover:text-[#FDCE40]">
        <a href="#interests">INTERESTS</a>
      </li>
    </ul>
  );
};

export default Menu;
