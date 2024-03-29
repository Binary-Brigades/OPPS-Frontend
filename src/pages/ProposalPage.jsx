import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useFetch from "../../hooks/useFetch";
import { useSidebar } from "../../hooks/useHandleSideBar";
import useAuthToken from "../../hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import EmptyLottie from "../components/common/EmptyLottie";
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function CreateSassProposal() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const { proposalName } = useParams();
  const Templates = useFetch(
    `https://oppsapi.onrender.com/api/v1/proposal/templates/${proposalName}/`
  );
  const [loading, setLoading] = useState(false);

  const handleItemClick = async(id,title) => {
    console.log(id, "Clicked, ", title, token);
    try {
      setLoading(true);
      const response = await fetch(
        `https://oppsapi.onrender.com/api/v1/proposal/add_proposal/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          
          },
          body: JSON.stringify({
            template: id,
            name: title,
          })
        }
      
      );
      
      const data = await response.json();
      console.log(data);
      if (response.status === 200)
      localStorage.setItem("proposalId", JSON.stringify(data.id));
        toast.success("Creating template questions");
      setTimeout(() => {
        window.location.href = `/createproposal/${proposalName}/${id}`;
      }, 5000);
    } catch (error) {
      toast.error("Something went wrong");
    }finally{
      setLoading(false);
    }
    
  };
  return (
    <>
      {token !== null ? (
        <div>
          <ToastContainer />

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

            {Templates?.data?.length > 0 ? (
              <>
                <p className="mt-4">Choose The Category for your proposal</p>
                <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Templates?.data?.map((template) => (
                    <li
                      onClick={() =>
                          handleItemClick(template.id, template.title)
                        }
                      className="bg-[#f5f5f5] flex hover:cursor-pointer hover:bg-blue-500 hover:font-semibold transition-all duration-200 ease-in-out hover:text-white hover:scale-105 justify-center items-center p-3 rounded-md"
                      key={template.id}
                    >
                      {/* Pass template.id as a parameter in the Link */}
                      <p
                        

                      >
                        {template?.title}
                      </p>
                    </li>
                  ))}{" "}
                </ul>
              </>
            ) : (
              <>
                {" "}
                <EmptyLottie />
                <p className="font-bold text-2xl">No templates yet!</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CreateSassProposal;
