import React from "react";

interface TagButtonProps {
  tagContent: string;
}

const TagButton: React.FC<TagButtonProps> = ({ tagContent }) => {
  return (
    <div className="rounded-md border-[3px] border-[#FE5943] bg-[#FDCE40] px-[3px] py-[1px] font-Hemenix text-[10px] font-black text-[#F14A38]">
      {tagContent}
    </div>
  );
};

export default TagButton;
