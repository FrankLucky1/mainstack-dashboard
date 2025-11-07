"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import MultiSelectDropdown from "../DropDown/MultiSelectDropdown";
import {
  filterOptions,
  transactionStatuses,
  transactionTypes,
} from "../utils/constant.data";
import DateRangePicker from "../DatePicker/DateRangePicker";
import { useFilterStore } from "@/store/useFilterStore";

type Props = {
  setFilterActive: (active: boolean) => void;
};
const Filter = ({ setFilterActive }: Props) => {
  const {
    dateRange,
    transactionTypes: selectedTypes,
    transactionStatuses: selectedStatuses,
    selectedTags,
    setDateRange,
    setTransactionTypes,
    setTransactionStatuses,
    setSelectedTags,
    clearFilters,
  } = useFilterStore();

  const [startDate, setStartDate] = useState<Date | null>(dateRange.startDate);
  const [endDate, setEndDate] = useState<Date | null>(dateRange.endDate);
  const handleApply = () => {
    setDateRange({ startDate, endDate });
    setFilterActive(false);
  };
  return (
    <div className="bg-white z-30 text-[#131316] h-[97vh] w-[520px] rounded-[20px] py-5 flex flex-col justify-between items-center">
      <div className="flex flex-col items-start justify-start h-full">
        <div className="flex items-center justify-between w-full px-6">
          <p className="text-[24px] font-bold">Filter</p>
          <span>
            <X
              onClick={() => setFilterActive(false)}
              className="cursor-pointer"
            />
          </span>
        </div>

        <div className="flex flex-col items-start justify-center px-[22px]">
          <div className="flex w-full gap-3 items-center justify-center mt-7">
            {filterOptions.map((option, i) => (
              <span
                key={i}
                onClick={() => setSelectedTags([option])}
                className={`${
                  selectedTags.includes(option) && "border-black"
                } border border-[#EFF1F6] whitespace-normal text-sm font-semibold rounded-[100px] px-[18px] py-2.5 cursor-pointer`}
              >
                {option}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between w-full mt-6 gap-3">
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <div className="flex items-center justify-between w-full"></div>
          </div>
          <div className="flex flex-col items-start justify-between w-full mt-6 gap-3">
            <label htmlFor="Date" className="font-semibold">
              Transaction Type
            </label>
            <div className="flex items-center justify-between max-w-full w-full">
              <MultiSelectDropdown
                options={transactionTypes}
                placeholder="Select type"
                onChange={setTransactionTypes}
                value={selectedTypes}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between w-full mt-6 gap-3">
            <label htmlFor="Date" className="font-semibold">
              Transaction Status
            </label>
            <div className="flex items-center justify-between max-w-full w-full">
              <MultiSelectDropdown
                options={transactionStatuses}
                placeholder="Select status"
                onChange={setTransactionStatuses}
                value={selectedStatuses}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3 items-center justify-center">
        <button
          onClick={() => clearFilters()}
          className="w-[198px] h-12 rounded-[100px] border border-[#EFF1F6] font-semibold"
        >
          Clear
        </button>
        <button
          onClick={handleApply}
          className="w-[198px] h-12 rounded-[100px] border border-[#EFF1F6] font-semibold bg-[#131316] text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;

