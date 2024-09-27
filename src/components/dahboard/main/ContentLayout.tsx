import React, { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* ==============> navbar <============== */}
      <div className="flex">
        {/* ==============> main dynamic content <============== */}
        <div> {children}</div>
        {/* ==============>  right sidebar <============== */}
      </div>
    </>
  );
};

export default ContentLayout;
