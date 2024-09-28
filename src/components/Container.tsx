import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mr-12 ml-10">{children}</div>;
};

export default Container;
