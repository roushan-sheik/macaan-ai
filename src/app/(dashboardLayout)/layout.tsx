import MainContentLayout from "@/components/dahboard/main/Layout";
import Sidebar from "@/components/dahboard/sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // we will try to use fragment instate of using much more div
    <>
      <div className="flex ">
        {/* left sidebar ==================> */}
        <div className="hidden lg:flex bg-[#030A1A] w-[20%]">
          <Sidebar />
        </div>
        {/* main content ==================> */}
        <div className=" bg-[#FDFDFD] w-full lg:w-[80%]">
          <MainContentLayout>{children}</MainContentLayout>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
