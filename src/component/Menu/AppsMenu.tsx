import React from "react";
import SideBarIcon4 from "../../../public/Icons/SideBarIcon4";
import SideBarIcon3 from "../../../public/Icons/SideBarIcon3";
import SideBarIcon2 from "../../../public/Icons/SideBarIcon2";
import SideBarIcon1 from "../../../public/Icons/SideBarIcon1";
import { motion } from "framer-motion";

const AppsMenu = () => {
  return (
    <motion.div
      className="absolute cursor-pointer top-full right-0 min-w-[400px] flex flex-col gap-8 mt-5 h-auto py-5 px-6 bg-white text-black shadow rounded-[20px] p-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex gap-3 items-center justify-start w-full p-3 border border-transparent rounded-2xl hover:shadow-lg cursor-pointer">
        <span className="w-15 h-15 flex items-center justify-center border rounded-2xl border-[#888F95]/10">
          <SideBarIcon1 className="cursor-pointer" />
        </span>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-base font-semibold">Link in Bio</p>
          <p className="text-base text-[#56616B]">Manage your Link in Bio</p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-start w-full p-3 border border-transparent rounded-2xl hover:shadow-lg cursor-pointer">
        <span className="w-15 h-15 flex items-center justify-center border rounded-2xl border-[#888F95]/10">
          <SideBarIcon2 className="cursor-pointer" />
        </span>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-base font-semibold">Store</p>
          <p className="text-base text-[#56616B]">
            Manage your Store activities
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-start w-full p-3 border border-transparent rounded-2xl hover:shadow-lg cursor-pointer">
        <span className="w-15 h-15 flex items-center justify-center border rounded-2xl border-[#888F95]/10">
          <SideBarIcon3 className="cursor-pointer" />
        </span>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-base font-semibold">Media Kit</p>
          <p className="text-base text-[#56616B]">
            Manage your Store Media Kit
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-start w-full p-3 border border-transparent rounded-2xl hover:shadow-lg cursor-pointer">
        <span className="w-15 h-15 flex items-center justify-center border rounded-2xl border-[#888F95]/10">
          <SideBarIcon4 className="cursor-pointer" />
        </span>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-base font-semibold">Invoicing</p>
          <p className="text-base text-[#56616B]">Manage your Invoice</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppsMenu;

