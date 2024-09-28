import React from "react";
import { contentHeadersData } from "@/constants/contentHeader.constant";

const ContentHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between ">
      <div className="grid grid-cols-2 lg:grid-cols-6 bg-[#F2F5FB] w-6/12 ml-10 pr-4 mt-6 mb-4 border border-[#EEEEEE] rounded basis-[67%] ">
        {contentHeadersData.map((item) => (
          <div className="flex flex-col p-8" key={item.title}>
            <p className="text-[#0F314B] text-xs ">{item.title}</p>
            <h4 className="text-[#3062F9] text-[14px] font-semibold">
              {item.label}
            </h4>
          </div>
        ))}
      </div>
      <div className=" flex-1 flex justify-center items-end flex-col mr-12 gap-2  basis-[30%]">
        <p className="text-base text-[#0F314B]">Change Visibility</p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="toggle  bg-white [--tglbg:#3062F9] hover:bg-white"
            defaultChecked
          />
          <span className="text-[#3062F9] text-sx">Public</span>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
