"use client";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";

const ReplayMessageForm = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-xl mb-4 text-[#091323]  ">
        Compose your reply
      </h2>
      <form action="#">
        {/* input box parent  */}
        <div className="flex items-center justify-between gap-8">
          {/* box- 1 */}
          <div className="w-6/12">
            <h3 className="text-[#4F4F4F] mb-1">URL</h3>
            <input
              type="text"
              className="input input-bordered input-md w-full max-w-xs"
            />
            {/* tags  */}
            <div className="mt-4 flex items-center justify-between">
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
          {/* box- 2 */}
          <div className="w-6/12">
            <h3 className="text-[#4F4F4F] mb-1">Related Parts</h3>
            <input
              type="text"
              className="input input-bordered input-md w-full max-w-xs"
            />
            {/* tags  */}
            <div className="mt-4 flex items-center justify-between">
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReplayMessageForm;
