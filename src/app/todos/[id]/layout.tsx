import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>Individual Todo</div>
      {children}
    </>
  );
};

export default layout;
