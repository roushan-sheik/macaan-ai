import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    // this is our custom root if we have any kinds of providers
    // we will wrap here so that our main layout will be clean
    <>
      <div className="main_container">{children}</div>;
    </>
  );
};

export default Providers;
