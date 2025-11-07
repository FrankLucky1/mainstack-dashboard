"use client";

import { useState } from "react";
import Header from "@/component/Header";
import { ChevronDown } from "lucide-react";
import DownloadIcon from "../../public/Icons/DownloadIcon";
import TableItems from "@/component/Table/TableItems";
import {
  useGetUserTransactionsQuery,
  useGetUserWalletQuery,
} from "@/services/api";
import WalletTab from "@/component/Wallet/WalletTab";
import Loader from "@/component/Loader/Loader";
import ChartComponent from "@/component/Chart/ChartComponent";
import FloatingSideBar from "@/component/FloatingSideBar";
import Filter from "@/component/Filter/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterStore } from "@/store/useFilterStore";

export default function Home() {
  const { data: transactions, isLoading: loadingTransactions } =
    useGetUserTransactionsQuery();
  const { data: wallet, isLoading: loadingWallet } = useGetUserWalletQuery({});
  const [filterActive, setFilterActive] = useState(false);

  const { activeFilterCount, selectedTags } = useFilterStore();

  return (
    <div className="flex min-h-screen items-start justify-center bg-white font-sans relative">
      <div className="fixed pt-4 w-full px-4 flex items-center justify-center bg-white">
        <Header />
      </div>
      <div className="fixed top-[30%] pt-4 w-[1406px] mx-auto px-4 flex items-center justify-start bg-transparent">
        <FloatingSideBar />
      </div>
      <AnimatePresence>
        {filterActive && (
          <div className="fixed top-0 right-0 pt-4 mx-auto px-4 flex items-start justify-end">
            <>
              <motion.div
                onClick={() => setFilterActive(false)}
                className="absolute top-0 right-0 w-screen h-screen bg-gray-300/50 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="z-20"
              >
                <Filter setFilterActive={setFilterActive} />
              </motion.div>
            </>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-36 w-[1160px] flex items-start justify-start flex-col">
        <div className="flex justify-between items-start w-full">
          <div className="min-w-[765px] w-full flex flex-col items-start justify-start">
            <div className="flex justify-between items-start gap-16">
              <div>
                <p className="text-sm font-medium text-[#56616B]">
                  Available Balance
                </p>
                {loadingWallet ? (
                  <Loader />
                ) : (
                  <p className="text-[28px] font-bold text-[#131316]">
                    USD {wallet?.balance ?? "0.00"}
                  </p>
                )}
              </div>
              <button
                disabled={loadingWallet}
                className="disabled:cursor-not-allowed cursor-pointer bg-[#131316] text-[#EFF1F6] font-semibold px-[30px] py-3 rounded-full flex items-center justify-center gap-1"
              >
                Withdraw
              </button>
            </div>
            <div className="w-[80%] h-[287px] flex items-end justify-start mt-2">
              <ChartComponent />
            </div>
          </div>
          <WalletTab data={wallet} loading={loadingWallet} />
        </div>
        <div className="flex w-full justify-between items-start mt-[82px] mb-[33px] h-[72px] border-b border-[#EFF1F6]">
          <div className="flex flex-col ">
            <h3 className="text-black font-bold text-2xl">
              {transactions?.length ?? 0} Transactions
            </h3>
            {selectedTags && (
              <p className="text-sm font-medium text-[#56616B]">
                Your transactions for the{" "}
                {selectedTags.length > 0 ? ` ${selectedTags[0]}` : " last 7 days"}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setFilterActive((prev) => !prev)}
              className="cursor-pointer bg-[#EFF1F6] text-[#131316] px-[30px] py-3 rounded-full flex items-center justify-center gap-1"
            >
              <p>Filter </p>{" "}
              {activeFilterCount > 0 && (
                <span className="bg-black text-white text-sm font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {activeFilterCount}
                </span>
              )}{" "}
              <span>
                <ChevronDown size={"20px"} />
              </span>
            </button>
            <button className="cursor-pointer bg-[#EFF1F6] text-[#131316] px-[30px] py-3 rounded-full flex items-center justify-center gap-1">
              <p>Export list </p>{" "}
              <span>
                <DownloadIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-8">
          {loadingTransactions ? (
            <Loader />
          ) : (
            transactions?.map((transaction, i) => (
              <TableItems key={i} data={transaction} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

