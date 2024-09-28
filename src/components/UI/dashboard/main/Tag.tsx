import Image from "next/image";
import React from "react";

const Tag = () => {
  return (
    <div className="flex items-center gap-1 w-[74px] text-xs  py-2 px-3 bg-[#F6F6F6] border-[#D9D9D9] border-[1px] rounded-md">
      <span className="text-[#091323]">Link 1</span>
      <Image
        src={"/icons/cross.png"}
        className="cursor-pointer"
        width={10}
        height={10}
        alt="cancel"
      />
    </div>
  );
};

export default Tag;
