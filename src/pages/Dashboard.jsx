import React, { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

// import Dashboard from "../components/Proposers/Dashboard";
import useAuthToken from "../../hooks/useAuth";
import Login from "./Login";
import Admin from "../components/users/Admin";
import Reviewer from "../components/users/Reviewer";
import Coordinator from "../components/users/Coordinator";
import Proposer from "../components/users/Proposer";
import { useSidebar } from "../../hooks/useHandleSideBar";
function UsersDashboard() {
  const [selectedItem, setSelectedItem] = useState();
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
    setSelectedItem(getUserDetail?.role);
  }, []);
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();

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
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20 lg:pl-[100px]">
              Dashboard
            </h5>
            {selectedItem === "admin" && <Admin />}
            {selectedItem === "proposer" && <Proposer />}
            {selectedItem === "coordinator" && <Coordinator />}
            {selectedItem === "reviewer" && <Reviewer />}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UsersDashboard;
