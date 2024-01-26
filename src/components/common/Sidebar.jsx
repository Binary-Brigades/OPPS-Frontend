import React, { useState } from "react";
import {
  IoClose,
  IoFolder,
  IoGrid,
  IoLogOut,
  IoMenu,
  IoPerson,
  IoPersonCircle,
  IoSettings,
} from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import useAuthToken from "../../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import DropButton from "../Proposers/DropButton";

/**
 * Render the sidebar component based on the open state.
 *
 * @param {Object} open - Indicates whether the sidebar is open
 * @return {JSX.Element} The sidebar component
 */
function Sidebar({ open, getUserDetail }) {
  const { clearAuthToken } = useAuthToken();
  const handleLogout = () => {
    const notification = toast.loading("loging out...");
    clearAuthToken();
    toast.success("Logout successful", {
      id: notification,
    });
    window.location.href = "/login";
  };
  return (
    <>
      <Toaster />
      <div
        className={`px-3 text-white
    py-10 h-[120vh] mt-[65px] fixed bg-blue-500 w-[200px] z-10 overflow-y-hidden ${
      open ? "left-0 smooth" : "left-[-100%]"
    } md:left-0 smooth `}
      >
        <p className="mb-5 shadow-lg py-2  flex md:hidden items-center gap-2 px-2">
          <IoPerson className="w-8 h-8" />
          <span className="md:hidden  text-sm">
            Hi, {getUserDetail.username}!
          </span>
        </p>
        <div>
          <div className="flex items-center gap-3 py-6 px-2 cursor-pointer">
            <IoGrid />
            <a href="/dashboard">Dashboard</a>
          </div>
          <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
            <IoPersonCircle />
            <a href="/profile">Profile</a>
          </div>
          <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
            <IoFolder />
            <a href="/proposals">Proposals</a>
          </div>

          {getUserDetail.role == "student" && (
            <div className="flex items-center gap-2">
              <DropButton />
            </div>
          )}
        </div>

        <div className="mt-[30%]">
          <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
            <button
              className="shadow-lg px-8 py-2 items-center flex gap-2 font-bold hover:gap-3"
              onClick={handleLogout}
            >
              Logout <IoLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
