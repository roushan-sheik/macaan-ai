"use client";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import CommentTempTag from "./CommentTemp";

const ReplayMessageForm = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-xl mb-4 text-[#091323]  ">
        Compose your reply
      </h2>
      <form action="#">
        {/* input box parent =====================> */}
        <div className="flex items-center flex-col lg:flex-row justify-between gap-8">
          {/* box- 1 */}
          <div className="lg:w-6/12 w-full">
            <h3 className="text-[#4F4F4F] mb-1">URL</h3>
            <input
              type="text"
              className="input input-bordered border-[#DFDFDF] input-md w-full "
            />
            {/* tags  */}
            <div className="mt-4 flex items-center justify-between">
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
          {/* box- 2 */}
          <div className="lg:w-6/12 w-full">
            <h3 className="text-[#4F4F4F] mb-1">Related Parts</h3>
            <input
              type="text"
              className="input input-bordered border-[#DFDFDF]  input-md w-full  "
            />
            {/* tags  */}
            <div className="mt-4 flex items-center justify-between">
              <Tag />
              <Tag />
              <Tag />
            </div>
          </div>
        </div>
        {/* ansers input  parent =======================>   */}
        <div className="mt-6">
          <p className="text-[#4F4F4F] mb-2">Your answer goes here</p>
          <input
            type="text"
            className="input  input-bordered border-[#DFDFDF] input-lg w-full "
          />
          {/* button and tags parent  */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
            <div className="flex lg:w-6/12 w-full justify-between ">
              <CommentTempTag />
              <CommentTempTag />
              <CommentTempTag />
            </div>
            <div className="lg:w-6/12 mt-8 lg:mt-0 w-full flex lg:justify-end justify-center">
              <button className="rounded-lg bg-[#2B68E8] px-8 py-3 text-lg 2xl:text-xl text-white duration-300 active:scale-95">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReplayMessageForm;
