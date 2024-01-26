import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

import ProposalCard from "../components/common/ProposalCard";
import useAuthToken from "../../hooks/useAuth";
import { useSidebar } from "../../hooks/useHandleSideBar";
function Proposals() {
  const { getItem } = useAuthToken();
  const token = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  return (
    <>
      {token !== null ? (
        <div>
          <Navbar handleSideBar={handleSideBar} open={open} />
          <Sidebar handleSideBar={handleSideBar} open={open} />
          <div className="p-12 h-full justify-start items-start w-full flex text-black md:pl-[350px]  flex-col  md:px-[200px]  ">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
              Create Your Proposal
            </h5>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Proposals;
