"use client";
import { useState } from "react";
import Logo from "../../public/Icons/Logo";
import { NavLinks } from "./utils/constant.data";
import NotificationIcon from "../../public/Icons/NotificationIcon";
import ChatIcon from "../../public/Icons/ChatIcon";
import HambugerMenu from "../../public/Icons/HambugerMenu";
import { useGetUserQuery } from "@/services/api";
import Loader from "./Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";
import AppsMenu from "./Menu/AppsMenu";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Revenue");
  const [menuActive, setMenuActive] = useState(false);
  const { data, isLoading } = useGetUserQuery();
  console.log(data);
  return (
    <div className="w-full max-w-[1406px] h-16 flex items-center justify-between px-6 bg-white rounded-full shadow">
      <div>
        <Logo className="" />
      </div>
      <div className="flex items-center justify-center gap-5 relative">
        {NavLinks.map((item, i) => (
          <span
            key={i}
            onClick={() => setActiveTab(item.name)}
            className={`${
              activeTab === item.name
                ? "bg-black text-white fill-white"
                : "bg-transparent text-[#56616B]"
            } rounded-full flex items-center justify-center gap-1 px-[18px] py-2 cursor-pointer`}
          >
            <span>
              <item.icon className={`w-5 h-5 fill-white`} />
            </span>
            <p className="text-base font-semibold">{item.name}</p>
          </span>
        ))}
        <AnimatePresence>
          {activeTab === "Apps" && <AppsMenu />}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-end gap-4 re">
        <NotificationIcon />
        <ChatIcon />
        <div
          onClick={() => setMenuActive((prev) => !prev)}
          className="flex py-1 px-[5px] bg-[#EFF1F6] h-10 w-[81px] rounded-full items-center justify-start gap-2 relative"
        >
          <span className="bg-black rounded-full text-white text-sm font-semibold w-8 h-8 flex items-center justify-center">
            {isLoading ? (
              <Loader />
            ) : (
              (data?.first_name?.[0] ?? "N") + (data?.last_name?.[0] ?? "/A")
            )}
          </span>
          <HambugerMenu />
          <AnimatePresence>
            {menuActive && (
              <motion.div
                className="absolute cursor-pointer top-full right-0 min-w-[400px] flex flex-col gap-8 mt-5 h-auto py-5 px-6 bg-white text-black shadow rounded-[20px] p-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <span className="bg-black rounded-full text-white text-base font-semibold w-10 h-10 flex items-center justify-center">
                    {isLoading ? (
                      <Loader />
                    ) : (
                      (data?.first_name?.[0] ?? "N") +
                      (data?.last_name?.[0] ?? "/A")
                    )}
                  </span>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-[24px] text-black">
                      {data?.first_name} {data?.last_name}
                    </h2>
                    <p className="text-[#56616B] text-base">{data?.email}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;

