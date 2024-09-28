import React from "react";
import { contentHeadersData } from "@/constants/contentHeader.constant";
import Container from "@/components/Container";

const ContentHeader = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* right side  button box  */}
        <div className="grid grid-cols-2 lg:grid-cols-8 bg-[#F2F5FB] lg:w-8/12 w-full  pr-4 mt-6 mb-4 border border-[#EEEEEE] rounded basis-[65%] ">
          {contentHeadersData.map((item) => (
            <div
              className={`flex flex-col p-8 ${
                item.title === "Model" && "lg:col-span-2"
              } ${item.title === "Posted" && "lg:col-span-2 lg:items-center"} `}
              key={item.title}
            >
              <p className="text-[#0F314B]  text-xs ">{item.title}</p>
              <h3 className="text-[#3062F9] text-[14px] font-semibold">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
        {/* right side  button box  */}
        <div className=" w-4/12 flex-1 lg:pl-0 pl-8 flex justify-center lg:items-end flex-col  gap-2  basis-[35%]">
          <p className="text-base text-nowrap text-[#0F314B]">
            Change Visibility
          </p>
          <div className="flex items-center  gap-2">
            <input
              type="checkbox"
              className="toggle  bg-white [--tglbg:#3062F9] hover:bg-white"
              defaultChecked
            />
            <span className="text-[#3062F9] text-sx">Public</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContentHeader;
