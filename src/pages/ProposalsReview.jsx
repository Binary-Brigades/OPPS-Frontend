import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import useFetch from "../../hooks/useFetch";
import { useSidebar } from "../../hooks/useHandleSideBar";
import useAuthToken from "../../hooks/useAuth";
import EmptyLottie from "../components/common/EmptyLottie";

import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router";
function ProposalsReview() {
  const location = useLocation();

  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const { open, handleSideBar, handleSidebarItemClick } = useSidebar();
  const [marks, setMarks] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewData, setReviewData] = useState();
  //   console.log(location.state);
  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch(
          `https://oppsapi.onrender.com/api/v1/proposal/preview_proposal/${location?.state?.id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        // if (response.status === 200) {
        //   const data = await response.json();

        // }
        const data = await response.json();
        console.log(data);
        setReviewData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProposals();
  }, []);
  console.log(reviewData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notify = () => toast.loading("Submitting review");
    try {
      const response = await fetch(
        `https://oppsapi.onrender.com/api/v1/proposal/review/add/${location?.state?.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            marks: marks,
            comments: comment,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        toast.success("Review submitted successfully", {
          id: notify,
        });
        window.location.href = "/proposals";
      }
    } catch (error) {
      toast.error("Error submitting review", {
        id: notify,
      });
      console.log(error);
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
              Proposals Review
            </h5>
            <div>
              <p className="font-bold text-2xl py-4">{reviewData?.title}</p>
              {reviewData?.answers?.map((item) => (
                <div className="py-2 flex flex-col">
                  <p className="font-semibold">{item?.question.question}</p>
                  <p className="">{item?.answer}</p>
                </div>
              ))}
            </div>
            <form className="flex flex-col gap-2 w-[280px]">
              <input
                onChange={(e) => setMarks(e.target.value)}
                type="number"
                min={5}
                className="w-full border-2 p-2 outline-none rounded-lg border-gray-500"
                required
              />
              <textarea
                onChange={(e) => setComment(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full border-2 p-2 outline-none rounded-lg border-gray-500"
                placeholder="Enter your comment"
                required
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 rounded-md px-xl py-2 text-white font-bold"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default ProposalsReview;
