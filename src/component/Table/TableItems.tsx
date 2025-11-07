import React from "react";
import SlantArrowIcon from "../../../public/Icons/SlantArrowIcon";
import { Transaction } from "@/types/responseTypes";

type Props = {
  data: Transaction;
  loadin?: boolean;
};
const TableItems = ({ data }: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center gap-[14.5px]">
        <span
          className={`h-[42px] w-[42px] rounded-full  flex items-center justify-center ${
            data.type === "withdrawal" ? "rotate-180 bg-[#F9E3E0] text-[#961100]" : 'bg-[#E3FCF2] text-[#075132]'
          }`}
        >
          <SlantArrowIcon className="" />
        </span>
        <div className="flex flex-col justify-between items-start">
          <p className="text-base font-medium text-[#131316]">
            {data?.metadata?.product_name ??
              (data?.type ? `Cash ${data.type}` : "Product name missing")}
          </p>
          <p
            className={`text-sm font-medium ${
              !data?.metadata && data.status === "successful"
                ? "text-[#0EA163]"
                : "text-[#56616B]"
            }`}
          >
            {data?.metadata?.type ??
              (data?.status ? ` ${data.status}` : "Product name missing")}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <p className="text-base font-bold text-[#131316]">
          USD {data?.amount ?? "0.00"}
        </p>
        <p className="text-[#56616B] text-sm font-medium">{data.date}</p>
      </div>
    </div>
  );
};

export default TableItems;

