import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-lg flex justify-between items-center h-[4.75rem]  ">
      {/* customer support dropdown container */}
      <div>
        <div className="flex ml-8 cursor-pointer justify-between items-center bg-[#E3ECFF] border-2  h-[38px] px-3 border-[#BBCCFF] rounded-md bg-[##E3ECFF] w-[12.75rem]   ">
          <span className="text-sm text-[#171717]">Customer Support</span>
          <Image
            src={"/icons/arrow-bottom.png"}
            width={8}
            height={8}
            alt="Icon"
          />
        </div>
      </div>
      {/* right side profile and settings container  */}
      <div className="flex items-center gap-4">
        {/* item 1  */}
        <div></div>
        {/* item 2  */}
        <div></div>
        {/* item 3  */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
