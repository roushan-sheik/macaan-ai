import React, { ReactNode } from "react";
import RightSidebar from "../sidebar/RightSidebar";

import ContentHeader from "@/components/UI/dashboard/main/ContentHeader";
import DesktopNav from "@/components/UI/dashboard/main/navbar/DesktopNav";
import SmallDevicesNav from "@/components/UI/dashboard/main/navbar/SmallDevicesNav";

const MainContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* ==============> navbar <============== */}
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>
      <div className="flex lg:hidden">
        <SmallDevicesNav />
      </div>
      {/* content header  */}
      <ContentHeader />

      <div className="flex flex-col lg:flex-row  justify-between ">
        {/* <<  main dynamic content  >> */}
        <div className=" bg-[bg-#FFFFFF]  basis-[70%]"> {children}</div>
        {/*  right sidebar   */}
        <div className="bg-green-400 basis-[30%]">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MainContentLayout;
