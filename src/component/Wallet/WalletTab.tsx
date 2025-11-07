import React from "react";
import InfoIcon from "../../../public/Icons/InfoIcon";
// import { Loader } from "lucide-react";
import Loader from "../Loader/Loader";

type Prop = {
  data: {
    balance: number;
    ledger_balance: number;
    pending_payout: number;
    total_payout: number;
    total_revenue: number;
  };
  loading: boolean;
};
const WalletTab = ({ data, loading }: Prop) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-auto">
      <div className="flex justify-between items-start w-[271px]">
        <div>
          <p className="text-sm font-medium text-[#56616B]">Ledger Balance</p>
          {loading ? (
            <Loader />
          ) : (
            <p className="text-[28px] font-bold text-[#131316]">
              USD {data?.ledger_balance ?? "0.00"}{" "}
            </p>
          )}
        </div>
        <InfoIcon />
      </div>
      <div className="flex justify-between items-start w-[271px]">
        <div>
          <p className="text-sm font-medium text-[#56616B]">Total Payout</p>
          {loading ? (
            <Loader />
          ) : (
            <p className="text-[28px] font-bold text-[#131316]">
              USD {data?.total_payout ?? "0.00"}{" "}
            </p>
          )}
        </div>
        <InfoIcon />
      </div>
      <div className="flex justify-between items-start w-[271px]">
        <div>
          <p className="text-sm font-medium text-[#56616B]">Total Revenue</p>
          {loading ? (
            <Loader />
          ) : (
            <p className="text-[28px] font-bold text-[#131316]">
              USD {data?.total_revenue ?? "0.00"}{" "}
            </p>
          )}
        </div>
        <InfoIcon />
      </div>
      <div className="flex justify-between items-start w-[271px]">
        <div>
          <p className="text-sm font-medium text-[#56616B]">Pending Payout</p>
          {loading ? (
            <Loader />
          ) : (
            <p className="text-[28px] font-bold text-[#131316]">
              USD {data?.pending_payout ?? "0.00"}{" "}
            </p>
          )}
        </div>
        <InfoIcon />
      </div>
    </div>
  );
};

export default WalletTab;

