import React from "react";
import { sidebarList } from "@/constants/sidebar.constant";
import Image from "next/image";

export const Lists = () => {
  return (
    <div className="mb-2  text-white mt-[2.5rem] pl-8 flex flex-col">
      {sidebarList.map((list, index) => (
        <div
          className={`flex items-center mr-2  gap-5 pl-5 py-4 cursor-pointer ${
            list.key === "Start Working" ? "bg-[#3062F9] rounded-[4px]" : ""
          }`}
          key={index}
        >
          <Image src={list.label as string} width={20} height={20} alt="Icon" />
          <span>{list.key}</span>
        </div>
      ))}
    </div>
  );
};
