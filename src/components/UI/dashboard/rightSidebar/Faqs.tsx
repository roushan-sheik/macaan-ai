"use client";
import React, { useState } from "react";

const Faqs = () => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <div className="mt-2">
      <div className="  rounded-[6px] border border-[#E2E2E2] bg-[#FAFAFA]">
        {/*=============> accordian container ==========> */}
        <div className="p-2">
          <div className=" flex justify-between items-center">
            <h2 className="  text-[#050D1F] text-xs font-medium">
              Q: Order to help you locate the...
            </h2>
            <span
              onClick={() => setShowFaq(!showFaq)}
              className="cursor-pointer px-2 font-base font-semibold"
            >
              {showFaq ? "-" : "+"}
            </span>
          </div>
          {/* content  */}
          {showFaq && <p className="text-xs text-[#050D1F]">hello</p>}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
