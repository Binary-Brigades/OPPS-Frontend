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
import {
  MdAssignmentAdd,
  MdCreateNewFolder,
  MdQuestionAnswer,
} from "react-icons/md";
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
    py-10 h-[120vh] mt-[65px] fixed bg-blue-500 w-[220px] z-10 overflow-y-hidden ${
      open ? "left-0 smooth" : "left-[-100%]"
    } md:left-0 smooth `}
      >
        <p className="mb-5 shadow-lg py-2  flex md:hidden items-center gap-2 px-2 bg-white text-blue-500 rounded-lg">
          <IoPerson className="w-8 h-8" />
          <span className="md:hidden  text-sm capitalize font-semibold">
            {getUserDetail?.role}
          </span>
        </p>
        <div>
          <div className="flex items-center gap-3 py-6 px-2 cursor-pointer">
            <IoGrid />
            <a href="/dashboard">Dashboard</a>
          </div>
          {/* 
          {getUserDetail?.role == "proposer" && (
            <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
              <IoFolder />
              <a href="/proposals">My Proposals</a>
            </div>
          )} */}
          {getUserDetail?.role == "reviewer" && (
            <div className="flex items-center gap-3 py-2 px-2 cursor-pointer w-full">
              <IoFolder />
              <a href="/proposals">My Assignments</a>
            </div>
          )}

          {getUserDetail?.role == "proposer" && (
            <div className="flex items-center gap-2">
              <DropButton />
            </div>
          )}
          {getUserDetail?.role == "coordinator" && (
            <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
              <MdQuestionAnswer />
              <a href="/createquestions">Create questions</a>
            </div>
          )}
          {getUserDetail?.role == "coordinator" && (
            <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
              <MdAssignmentAdd />
              <a href="/assignproposals">Assign proposals</a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
          <IoPersonCircle />
          <a href="/profile">Profile</a>
        </div>
        <div className="mt-[30%]">
          <div className="flex items-center gap-3 py-2 px-2 cursor-pointer">
            <button
              className="shadow-lg px-8 py-2 items-center flex gap-2 font-bold hover:gap-3 bg-white text-blue-500 rounded-lg"
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
