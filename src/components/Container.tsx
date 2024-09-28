import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="lg:mr-12 lg:ml-10">{children}</div>;
};

export default Container;
