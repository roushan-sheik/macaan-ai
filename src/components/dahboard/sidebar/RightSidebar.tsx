import ArchivedQuestions from "@/components/UI/dashboard/rightSidebar/ArchivedQuestions";
import { DocumentAnswer } from "@/components/UI/dashboard/rightSidebar/DocumentAnswer";
import Faqs from "@/components/UI/dashboard/rightSidebar/Faqs";
import UnsolvableQuestionForm from "@/components/UI/dashboard/rightSidebar/UnsolvableQuestionForm";
import React from "react";

const RightSidebar = () => {
  return (
    <>
      <div className=" ml-4 drp_shadow mt-5 p-3">
        {/* document  answer ================>  */}
        <DocumentAnswer />
        {/* Archived Questions  =================> */}
        <ArchivedQuestions />
        {/* FAQ Questions  =================> */}
        <div className="mt-3">
          <Faqs />
          <Faqs />
          <Faqs />
        </div>
        {/* Unsolvable Question ===================> */}
        <UnsolvableQuestionForm />
      </div>
    </>
  );
};

export default RightSidebar;
