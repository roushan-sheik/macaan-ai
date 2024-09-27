import React, { ReactNode } from "react";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";

const MainContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* ==============> navbar <============== */}
      <Navbar />
      {/* content header  */}

      <div className="flex">
        {/* <<  main dynamic content  >> */}
        <div> {children}</div>
        {/*  right sidebar   */}
        <div>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MainContentLayout;
