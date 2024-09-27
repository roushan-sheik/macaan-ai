import React, { ReactNode } from "react";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";
import ContentHeader from "@/components/UI/dashboard/main/ContentHeader";

const MainContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* ==============> navbar <============== */}
      <Navbar />
      {/* content header  */}
      <ContentHeader />

      <div className="flex flex-col lg:flex-row  justify-between ">
        {/* <<  main dynamic content  >> */}
        <div className="bg-red-400 basis-[60%]"> {children}</div>
        {/*  right sidebar   */}
        <div className="bg-green-400 basis-[40%]">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MainContentLayout;
