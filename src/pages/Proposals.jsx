import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

import ProposalCard from "../components/common/ProposalCard";
import useAuthToken from "../../hooks/useAuth";
import { useSidebar } from "../../hooks/useHandleSideBar";
import useFetch from "../../hooks/useFetch";
function Proposals() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const { data, loading, error } = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/assignments/"
  );
  console.log(data);
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
            handleSideBar={handleSideBar}
            open={open}
            getUserDetail={getUserDetail}
          />
          <div className="p-12 h-full justify-start items-start w-full flex text-black md:pl-[350px]  flex-col  md:px-[200px]  ">
            <h5 className="text-blue-500 text-xl font-bold uppercase  md:left-[250px] mt-20">
              Proposals
            </h5>
            <div className="flex items-center justify-between w-full mt-4 ">
              <p className="font-bold">ALL</p>
              <div className="gap-2 flex-row flex ">
                <span className="mr-2">Filter</span>
                <select className="w-full  rounded-sm px-3 md:px-4 outline-none h-8 border border-gray-500 bg-gray-200">
                  <option value="hello">option 1</option>
                  <option value="hello">option 2</option>
                  <option value="hello">option 2</option>
                </select>
              </div>
            </div>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center w-full mt-12">
              {data?.map((proposal, index) => (
                <ProposalCard key={index} proposal={proposal} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Proposals;
