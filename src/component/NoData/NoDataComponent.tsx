import React from "react";
import RecieptLong from "../../../public/Icons/RecieptLong";

const NoDataComponent = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-[40vh]">
      <div className="flex flex-col items-start justify-start w-full max-w-[369px] ">
        <span className="flex items-center justify-center bg-[#DBDEE5] rounded-2xl">
          <RecieptLong />
        </span>
        <h2 className="text-[28px] mb-2.5 font-bold text-[#131316]">
          No matching transaction found for the selected filter
        </h2>
        <p className="text-base mb-8 font-medium text-[#56616B]">
          Change your filters to see more results, or add a new product.
        </p>
      </div>
    </div>
  );
};

export default NoDataComponent;

