import React from "react";

interface OutlineButtonProps {
  period?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ period }) => {
  return (
    <div className="rounded border-[2px] border-[#FDED39] bg-[#F74E3B] px-[10px] py-[5px] font-Hemenix text-[11px] text-[#FDED39]">
      {period}
    </div>
  );
};

export default OutlineButton;
