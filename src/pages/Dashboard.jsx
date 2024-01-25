import React, { useState } from "react";
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
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { useSidebar } from "../../hooks/useHandleSideBar";
import Dashboard from "../components/Proposers/Dashboard";
import useAuthToken from "../../hooks/useAuth";
import Login from "./Login";
import Admin from "../components/users/Admin";
import Reviewer from "../components/users/Reviewer";
import Coordinator from "../components/users/Coordinator";
import Proposer from "../components/users/Proposer";
function UsersDashboard() {
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const [selectedItem, setSelectedItem] = useState(getUserDetail.role);
  const routeConfig = {
    admin: Admin,
    proposer: Proposer,
    coordinator: Coordinator,
    reviewer: Reviewer,
  };

  return (
    <>
      {token !== null ? (
        <div>
          <Navbar
            handleSideBar={handleSideBar}
            open={open}
            getUserDetail={getUserDetail}
          />
          <Sidebar
            open={open}
            handleSideBar={handleSideBar}
            getUserDetail={getUserDetail}
            // onItemClick={handleSidebarItemClick}
          />
          <div className="p-8 h-full justify-start items-start w-full flex text-black md:pl-[250px]  flex-col">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
              Dashboard
            </h5>
            {React.createElement(routeConfig[selectedItem])}
            {/* <Dashboard getUserDetail={getUserDetail} /> */}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UsersDashboard;
