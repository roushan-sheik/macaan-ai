import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#FFFFFF] drp_shadow  mr-5 mt-5 py-4 ml-10 rounded-[.625rem]">
      {/* profile content container */}
      <div className="flex px-8 items-center gap-4">
        {/* avatar box */}
        <div className=" flex justify-center items-center rounded-full size-[3.4375rem] bg-[#F2F5FB] text-[#B3B3B3] text-lg font-medium">
          MN
        </div>
        {/* content box  */}
        <div>
          <div className="flex items-center gap-2">
            <div>
              <h4 className="text-[#171717] font-xs ">Mudassir Nisar</h4>{" "}
            </div>
            <div>
              <span className="text-[#7E7E7E] text-xs">07/28/2023</span>
            </div>
          </div>
          <h3 className="text-lg text-[#3062F9] font-semibold">
            This a new Ticket
          </h3>
        </div>
      </div>
      {/* horizontal line  */}
      <div className="border-[1px] mt-4 border-[#D3D3D3]"></div>
      {/* body content container */}
      <div>body content</div>
    </div>
  );
};

export default HomePage;
