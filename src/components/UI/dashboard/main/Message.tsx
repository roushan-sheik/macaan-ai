import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <div className="px-2 py-4">
      {/* header content  */}
      <p className="text-[#050D1F]">
        Agent at Mar 28, 2024 <br />
        Hello Mudassir, <br />
        Thank you for reaching out.
        <br />
      </p>
      {/* main message  */}
      <p className="mt-3">
        In order to help you locate the correct parts and repair information, we
        will need more information about the problem you are facing. Please
        submit a new question with more details, and we will be happy to help
        you.
      </p>
      {/* footer watch  */}
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-1">
          <Image src={"/icons/watch.png"} width={13} height={13} alt="Icon" />
          <span className="text-[#3062F9] text-sm">Watch video</span>
        </div>
        <div className="flex items-center gap-1">
          <Image src={"/icons/watch.png"} width={13} height={13} alt="Icon" />
          <span className="text-[#3062F9] text-sm">Watch video</span>
        </div>
      </div>
      {/* related parts  */}
      <p className="mt-2">Related Parts: 123 35</p>
    </div>
  );
};

export default Message;
