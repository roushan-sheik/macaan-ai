import React from "react";

const UnsolvableQuestionForm = () => {
  return (
    <>
      {/* top button  box */}
      <div className="bg-[#FFDCE0] button_box_border mt-3 flex items-center justify-between rounded-[10px] p-2  ">
        <h4 className="text-[#E5354A] text-sm">Unsolvable Question</h4>
        <button className="text-sm text-white bg-[#E5354A] rounded-md py-2 px-3">
          Escalate Ques
        </button>
      </div>
      {/* form box  */}
      <form className="bg-[#FDFDFD]  border-[2px] border-[#F0F0F0] mt-3   rounded-[10px] p-2  ">
        <div>
          <label htmlFor="question">Reason for Escalation</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#DFDFDF] w-full mt-2 max-w-xs"
          />
        </div>
        {/* form button box  */}
        <div className="mt-3 flex gap-2 justify-end items-center">
          <button className=" rounded-lg  text-sm xl:text-sm bg-[#EAEAEA] px-3 py-2 xl:px-6 lg:py-3 2xl:text-xl text-[#515151] duration-300 active:scale-95">
            Cancel
          </button>
          <button className=" rounded-lg text-sm xl:text-sm bg-[#3062F9] px-3 py-2  xl:px-6 lg:py-3 2xl:text-xl text-[#FFFFFF] duration-300 active:scale-95">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UnsolvableQuestionForm;
