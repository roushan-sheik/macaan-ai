"use client";
import React, { useState } from "react";
import Image from "next/image";
import Drawer from "../../sidebar/SmallDevicesSidebar";

const SmallDevicesNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="bg-[#FFFFFF] shadow-lg w-full flex justify-between items-center h-[52px]  ">
      {/* customer support dropdown container */}
      <div>
        <div className="ml-3">
          {openDrawer ? (
            <Image
              className=" "
              onClick={() => setOpenDrawer(!openDrawer)}
              src={"/icons/bars-off.png"}
              width={22}
              height={28}
              alt="Icon"
            />
          ) : (
            <Image
              onClick={() => setOpenDrawer(!openDrawer)}
              src={"/icons/bars-on.png"}
              width={22}
              height={28}
              alt="Icon"
            />
          )}
        </div>
        <div
          className={`absolute mt-4 transition-all ease-in-out duration-150 ${
            openDrawer ? "translate-x-[-3px]" : "translate-x-[-270px]"
          } `}
        >
          <Drawer />
        </div>
      </div>
      {/* right side profile and settings container ================> */}
      <div className="flex items-center gap-4 mr-3">
        {/* item 1  */}
        <div className="flex justify-center cursor-pointer items-center border-[#FEFEFE] border size-[2.25rem] rounded-full shadow-md">
          <Image
            src={"/icons/endicator.png"}
            width={18}
            height={18}
            alt="Icon"
          />
        </div>
        {/* item 2  */}
        <div className="flex justify-center cursor-pointer items-center border-[#FEFEFE] border size-[2.25rem] rounded-full shadow-md">
          <Image
            src={"/icons/elements.png"}
            width={18}
            height={18}
            alt="Icon"
          />
        </div>
        {/* item 3  */}
        <div className="flex justify-center cursor-pointer size-[2.25rem] overflow-hidden  items-cente rounded-full  ">
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

export default SmallDevicesNav;
