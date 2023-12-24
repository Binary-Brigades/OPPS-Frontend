import React, { useState } from "react";
import {
  IoClose,
  IoFolder,
  IoGrid,
  IoMenu,
  IoPerson,
  IoPersonCircle,
  IoSettings,
} from "react-icons/io5";

function Sidebar({ open, onItemClick }) {
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  return (
    <div
      className={`px-3 text-white
    py-10 h-[90vh] mt-[65px] fixed bg-blue-500 w-[200px] z-10 overflow-y-hidden ${
      open ? "left-0 smooth" : "left-[-100%]"
    } md:left-0 smooth `}
    >
      <p className="mb-5 shadow-lg py-2  flex md:hidden items-center gap-2 px-2">
        <IoPerson className="w-8 h-8" />
        <span className="md:hidden  text-sm">Hi, User!</span>
      </p>
      <div>
        <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
          <IoGrid />
          <p onClick={() => handleItemClick("Dashboard")}>Dashboard</p>
        </div>
        <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
          <IoPersonCircle />
          <p onClick={() => handleItemClick("profile")}>Profile</p>
        </div>
        <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
          <IoFolder />
          <p onClick={() => handleItemClick("proposals")}>Proposals</p>
        </div>
      </div>
      <div className="mt-[40vh]">
        <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
          <IoSettings />
          <p onClick={() => handleItemClick("settings")}>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
