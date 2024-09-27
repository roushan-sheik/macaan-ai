import React from "react";

const ContentHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-red-200 basis-[60%]">left</div>
      <div className="bg-green-200 basis-[40%]">right</div>
    </div>
  );
};

export default ContentHeader;
