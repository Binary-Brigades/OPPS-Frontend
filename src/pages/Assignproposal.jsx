import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useAuthToken from "../../hooks/useAuth";
import Login from "./Login";
import { useSidebar } from "../../hooks/useHandleSideBar";
import useFetch from "../../hooks/useFetch";

function Assignproposal() {
  const { getItem, removeItem } = useAuthToken();
  const { token, getUserDetail, getTemplateId } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const { data, loading, error } = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/reviewers/"
  );
  console.log(data);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  return (
    <>
      <Toaster />
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
          />
          <div className="p-8 h-full justify-start items-start w-full flex text-black md:pl-[250px]  flex-col">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20 lg:pl-[100px]">
              Assign Proposal
            </h5>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Assignproposal;
