import React from "react";

const ArchivedQuestions = () => {
  return (
    <>
      {/* achive questions heading  */}
      <div className="bg-[#FAFAFA] mt-2 rounded-[10px] p-3 border border-[#E2E2E2]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-semibold">Archived Questions</h3>
          <span className="text-[#3062F9] text-xs">88% Similar</span>
        </div>
        {/* answer content  */}
        <h4 className="text-[#050D1F] text-xs font-semibold">
          Q: Order to help you locate the correct parts and repair{" "}
        </h4>
        <p className="mt-1 text-[#050D1F]">
          Order to help you locate the correct parts and repair information, we
          will need more information about the problem you are facing. Please
          submit a new question with more details, and we will be happy to help
          you. Looking forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default ArchivedQuestions;
