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
  const [selectedOption, setSelectedOption] = useState("");
  const { data, loading, error } = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/reviewers/"
  );

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
            <div className="grid grid-cols-3  gap-1 items-center w-full  md:left-[250px] mt-2 lg:pl-[100px]">
              <span className="mr-2 font-bold">Date</span>
              <span className="mr-2 font-bold">Status</span>
              <span className="mr-2 font-bold">Reviewer</span>
            </div>

            {data?.proposals.length > 0 ? (
              data.proposals.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-3  gap-1 items-center w-full  md:left-[250px] mt-2 lg:pl-[100px]"
                >
                  {item.status == "pending" ? (
                    <div>
                      <p className="text-sm">
                        {item.status == "pending" ? item.created_on : null}
                      </p>
                    </div>
                  ) : null}
                  {item.status == "pending" ? (
                    <div>
                      <p
                        className={`${
                          item.status == "pending" ? "text-yellow-500" : ""
                        }`}
                      >
                        {item.status == "pending" ? "Pending" : null}
                      </p>
                    </div>
                  ) : null}

                  {item.status == "pending" ? (
                    <div className="gap-2 flex-col flex md:flex-row md:gap-6">
                      <select
                        className="rounded-sm px-3 md:px-4 outline-none h-8 border border-gray-500 bg-gray-200"
                        // value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        {data?.reviewers.map((option) => (
                          <option value={option.pk} key={option.pk}>
                            {option.username}
                          </option>
                        ))}
                      </select>
                      <button className="bg-blue-500 rounded-sm px-3 md:px-4 outline-none h-8 border border-gray-500">Assign</button>
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <p>{loading && "loading..."}</p>
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Assignproposal;
