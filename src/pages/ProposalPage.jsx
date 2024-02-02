import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useFetch from "../../hooks/useFetch";
import { useSidebar } from "../../hooks/useHandleSideBar";
import useAuthToken from "../../hooks/useAuth";
import { useParams, Link } from "react-router-dom";

function CreateSassProposal() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const { proposalName } = useParams();
  const Templates = useFetch(`https://oppsapi.onrender.com/api/v1/proposal/templates/${proposalName}/`);

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
              Create Your {proposalName} Proposal
            </h5>
            <p className="mt-4">Choose The Category for your proposal</p>
            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
              {Templates?.data?.map((template) => (
                <li
                  className="bg-[#f5f5f5] flex hover:cursor-pointer hover:bg-blue-500 hover:font-semibold transition-all duration-200 ease-in-out hover:text-white hover:scale-105 justify-center items-center p-3 rounded-md"
                  key={template.id}
                >
                  {/* Pass template.id as a parameter in the Link */}
                  <Link to={`/createproposal/${proposalName}/${template.id}`}>
                    {template.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CreateSassProposal;
