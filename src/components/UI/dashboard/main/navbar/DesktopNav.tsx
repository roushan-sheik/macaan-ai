import React from "react";
import Image from "next/image";

const DesktopNav = () => {
  return (
    <div className="bg-[#FFFFFF] w-full shadow-lg flex justify-between items-center h-[4.75rem]  ">
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
      {/* right side profile and settings container ================> */}
      <div className="flex items-center gap-4 mr-12">
        {/* item 1  */}
        <div className="flex justify-center cursor-pointer items-center border-[#FEFEFE] border size-[2.75rem] rounded-full shadow-md">
          <Image
            src={"/icons/endicator.png"}
            width={22}
            height={22}
            alt="Icon"
          />
        </div>
        {/* item 2  */}
        <div className="flex justify-center cursor-pointer items-center border-[#FEFEFE] border size-[2.75rem] rounded-full shadow-md">
          <Image
            src={"/icons/elements.png"}
            width={22}
            height={22}
            alt="Icon"
          />
        </div>
        {/* item 3  */}
        <div className="flex justify-center cursor-pointer size-[2.75rem] overflow-hidden  items-cente rounded-full  ">
          <Image
            className="w-full h-full rounded-full object-cover"
            src={"/assets/person.JPEG"}
            width={44}
            height={44}
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
