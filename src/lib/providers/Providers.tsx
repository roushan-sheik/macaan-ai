import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto container">{children}</div>;
};

export default Providers;
