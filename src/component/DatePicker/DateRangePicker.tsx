import { DateType } from "@/types/responseTypes";
import { ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";

const DateRangePicker = ({
  endDate,
  startDate,
  setEndDate,
  setStartDate,
}: DateType) => {
  return (
    <div className="flex flex-col items-start justify-between w-full mt-6 gap-3">
      <label htmlFor="Date" className="font-semibold">
        Date Range
      </label>

      <div className="flex items-center justify-between w-full gap-4">
        {/* FROM date */}
        <div className="relative w-1/2 flex items-center justify-between">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="From"
            dateFormat="MMM d, yyyy"
            className="w-full px-4 py-2 h-12 bg-[#EFF1F6] rounded-lg outline-none focus:ring-2 focus:ring-black"
          />
          <ChevronDown color="#31373D" className="absolute right-4 w-4! h-4!" />
        </div>

        {/* TO date */}
        <div className="relative w-1/2 flex items-center justify-between">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || undefined}
            placeholderText="To"
            dateFormat="MMM d, yyyy"
            className="w-full px-4 py-2 h-12 rounded-lg bg-[#EFF1F6] outline-none focus:ring-2 focus:ring-black"
          />
          <ChevronDown color="#31373D" className="absolute right-4 w-4! h-4!" />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

