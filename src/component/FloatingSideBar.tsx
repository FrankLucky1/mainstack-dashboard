import React from "react";
import SideBarIcon1 from "../../public/Icons/SideBarIcon1";
import SideBarIcon2 from "../../public/Icons/SideBarIcon2";
import SideBarIcon3 from "../../public/Icons/SideBarIcon3";
import SideBarIcon4 from "../../public/Icons/SideBarIcon4";

const FloatingSideBar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-12 h-48 shadow bg-white rounded-full p-2 ">
      <SideBarIcon1 className="grayscale group-hover:grayscale-0 cursor-pointer" />
      <SideBarIcon2 className="grayscale group-hover:grayscale-0 cursor-pointer" />
      <SideBarIcon3 className="grayscale group-hover:grayscale-0 cursor-pointer" />
      <SideBarIcon4 className="grayscale group-hover:grayscale-0 cursor-pointer" />
    </div>
  );
};

export default FloatingSideBar;

