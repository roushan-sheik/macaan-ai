import Image from "next/image";
import React from "react";
import { Lists } from "./Lists";

const MobileSidebar = () => {
  return (
    <div>
      {" "}
      <div className="min-w-[16.4375rem] mb-10">
        {/* logo box  */}
        <div className="flex justify-center mx-auto ">
          <div>
            <Image
              className="mt-[1.875rem]"
              src={"/assets/logo.png"}
              width={100}
              height={47}
              alt="Logo"
            />
          </div>
        </div>
        {/* lists  */}
        <Lists />
        {/* horizontal line bar  */}
        <div className="border-b-2 ml-8 mt-8 mb-4 border-[#383F4A] my-4"></div>
        {/* settings  */}
        <div
          className={`pl-[3.25rem] flex items-center mr-2  gap-5   py-4 cursor-pointer`}
        >
          <Image
            src={"/icons/settings.png"}
            width={20}
            height={20}
            alt="Icon"
          />
          <span className="text-white ">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
