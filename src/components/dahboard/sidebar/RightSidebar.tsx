import ArchivedQuestions from "@/components/UI/dashboard/rightSidebar/ArchivedQuestions";
import { DocumentAnswer } from "@/components/UI/dashboard/rightSidebar/DocumentAnswer";
import React from "react";

const RightSidebar = () => {
  return (
    <>
      <div className=" ml-4 drp_shadow mt-5 p-3">
        {/* document  answer ================>  */}
        <DocumentAnswer />
        {/* Archived Questions  =================> */}
        <ArchivedQuestions />
      </div>
    </>
  );
};

export default RightSidebar;
