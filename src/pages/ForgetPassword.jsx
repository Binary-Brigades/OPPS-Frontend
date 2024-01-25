import React from "react";
import {
  IoLockClosed,
  IoPencil,
  IoLockClosedOutline,
  IoPerson,
} from "react-icons/io5";
import {
  MdLock,
  MdMail,
  MdNumbers,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";
import { CiLock, CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../assets/MMU.png";
import NavBar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar";
import { useSidebar } from "../../hooks/useHandleSideBar";
function ForgetPassword() {
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  return (
    <div>
      <Navbar handleSideBar={handleSideBar} open={open} />
      <Sidebar
        open={open}
        handleSideBar={handleSideBar}
        // onItemClick={handleSidebarItemClick}
      />

      <div className="p-12 h-full justify-start items-start w-full flex text-black md:pl-[350px]  flex-col">
        {" "}
        <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
          Profile setting
        </h5>
        <div className="flex md:flex-row gap-4 md:gap-32 items-start justify-between mt-12 w-full flex-col md:max-w-[75%]">
          <div className="w-full md:w-[200px] flex md:flex-col md:justify-start items-start md:gap-2 md:flex-2 flex-row justify-between">
            <div className="flex gap-1 items-center justify-center">
              <IoPencil />
              <p>Edit profile</p>
            </div>
          </div>
          <div className="flex w-full md:flex-[2]">
            <form
              action=""
              className="relative w-full md:w-[97%] h-full flex flex-col justify-between items-center "
            >
              <div className="flex flex-col w-full justify-center gap-4">
                <span className="font-bold">Current password</span>
                <div className="divinput">
                  <input
                    className="input"
                    type="password"
                    placeholder="current password..."
                  ></input>
                </div>
                <span className="font-bold">New password</span>
                <div className="divinput">
                  <input
                    className="input"
                    type="password"
                    placeholder="New password..."
                  ></input>
                </div>
                <span className="font-bold">Confirm password</span>
                <div className="divinput">
                  <input
                    className="input"
                    type="password"
                    placeholder="confirm password..."
                  ></input>
                </div>
              </div>
              <input
                className="btn w-full  rounded-lg uppercase mt-8"
                type="submit"
                value="save"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
