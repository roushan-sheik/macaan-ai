import MainContentLayout from "@/components/dahboard/main/Layout";
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
        <div className="bg-[#030A1A] w-[20%]"></div>
        {/* main content ==================> */}
        <div className=" bg-[#FDFDFD] w-[80%]">
          <MainContentLayout>{children}</MainContentLayout>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
