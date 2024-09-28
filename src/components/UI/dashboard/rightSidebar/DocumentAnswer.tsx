import Image from "next/image";
import React from "react";

export const DocumentAnswer = () => {
  return (
    <div className="bg-[#FAFAFA] rounded-[10px] p-3 border border-[#E2E2E2]">
      {/* answer header  */}
      {/* answer header  */}
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-semibold">Document Answer</h3>
        <div className="flex items-center gap-2">
          {/* item - 1 */}
          <div className="flex items-center gap-[2px]">
            <Image
              src={"/icons/success.png"}
              width={15}
              height={15}
              alt="Icon"
            />
            <span className="text-[#050D1F] text-xs">88%</span>
          </div>
          {/* item - 2 */}
          <div className="flex items-center gap-[2px]">
            <Image
              src={"/icons/cancel.png"}
              width={15}
              height={15}
              alt="Icon"
            />
            <span className="text-[#050D1F] text-xs">88%</span>
          </div>
          {/* item - 3 */}
          <div className="flex items-center gap-1">
            <Image
              src={"/icons/reload.png"}
              width={15}
              height={15}
              alt="Icon"
            />
          </div>
        </div>
      </div>
      {/* answer content  */}
      <p className="mt-1 text-[#050D1F]">
        Order to help you locate the correct parts and repair information, we
        will need more information about the problem you are facing. Please
        submit a new question with more details, and we will be happy to help
        you. Looking forward to hearing from you!
      </p>
    </div>
  );
};
