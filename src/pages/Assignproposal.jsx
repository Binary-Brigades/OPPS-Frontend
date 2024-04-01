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
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const { data, loading, error } = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/reviewers/"
  );

  const handleAssignproposals = async (id) => {
    if (!selectedOption) {
      toast.error("Please select a reviewer");
      return;
    }
    // console.log(id);
    // console.log(selectedOption);
    try {
      const response = await fetch(
        `https://oppsapi.onrender.com/api/v1/proposal/assign1/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            proposal: id,
            reviewer: selectedOption,
          }),
        }
      );
      if (response.status === 200) {
        toast.success("Proposal assigned successfully");
        setIsInputDisabled(true);
      }
      setSelectedOption("");
      if (response.status === 400) {
        toast.error("Error assigning proposal");
      }
      const data = await response.json();
      setItemId(data?.proposal);
      console.log(data?.proposal);
    } catch (error) {
      toast.error("Error assigning proposal");
      console.log(error);
    }
  };
  console.log(data, error, loading);
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
            <div className="grid grid-cols-3 md:grid-cols-4  gap-1 items-center w-full  md:left-[250px] mt-2 lg:pl-[100px]">
              <span className="mr-2 font-bold">Title</span>
              <span className="mr-2 font-bold flex">Date</span>
              {/* <span className="mr-2 font-bold">Status</span> */}
              <span className="mr-2 font-bold">Reviewer</span>
            </div>

            {data?.proposals?.length > 0 ? (
              data?.proposals?.map((item) => (
                <div
                  key={item?.id}
                  className="grid grid-cols-3 md:grid-cols-4  gap-1 items-center w-full  md:left-[250px] mt-2 lg:pl-[100px]"
                >
                  {item?.assigned == false ? (
                    <div>
                      <p className="text-sm">
                        {item?.assigned == false ? item?.name : null}
                      </p>
                    </div>
                  ) : null}
                  <div className="flex">
                    {item?.assigned == false ? (
                      <div>
                        <p className="text-sm">
                          {item?.assigned == false ? item?.created_on : null}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  {/* {item?.assigned == false ? (
                    <div>
                      <p
                        className={`${
                          item?.assigned == false ? "text-yellow-500" : ""
                        }`}
                      >
                        {item?.assigned == false ? "Not assigned" : null}
                      </p>
                    </div>
                  ) : null} */}

                  {item?.assigned == false ? (
                    <div className="gap-2 flex-col flex md:flex-row md:gap-6">
                      <select
                        className="rounded-sm px-3 md:px-4 outline-none h-8 border border-gray-500 bg-gray-200 z-[999]"
                        // value={selectedOption}
                        onChange={(event) =>
                          setSelectedOption(event.target.value)
                        }
                      >
                        <option value="">Select Reviewer</option>
                        {data?.reviewers?.map((option) => (
                          <option value={option?.pk} key={option?.pk}>
                            {option?.username}
                          </option>
                        ))}
                      </select>

                      <button
                        disabled={item.id == itemId && isInputDisabled}
                        className={`bg-blue-500 rounded-sm px-3 md:px-4 outline-none h-8 border border-gray-500 ${
                          item.id == itemId &&
                          isInputDisabled &&
                          "cursor-not-allowed"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleAssignproposals(item?.id);
                        }}
                      >
                        Assign
                      </button>
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
