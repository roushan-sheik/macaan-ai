import React from "react";
import { sidebarList } from "@/constants/sidebar.constant";
import Image from "next/image";

export const Lists = () => {
  return (
    <div className="lg:mb-2 mb-1  text-white lg:mt-[2.5rem]  mt[2rem] pl-8 flex flex-col">
      {sidebarList.map((list, index) => (
        <div
          className={`flex items-center mr-2  lg:gap-5 gap-3 pl-5 lg:py-4 py-3 cursor-pointer ${
            list.key === "Start Working" ? "bg-[#3062F9] rounded-[4px]" : ""
          }`}
          key={index}
        >
          <Image src={list.label as string} width={20} height={20} alt="Icon" />
          <h3 className="">{list.key}</h3>
        </div>
      ))}
    </div>
  );
};
