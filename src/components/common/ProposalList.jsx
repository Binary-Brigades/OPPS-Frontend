import React from "react";
import FormatDate from "../../../hooks/FormatDate";
import useFetch from "../../../hooks/useFetch";

const ProposalList = () => {
  const proposals = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/my_proposal"
  );
  console.log(proposals?.data);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-semibold">
        <p>Name</p>
        <p className="md:block hidden">Submission Date</p>
        <p>Status</p>
      </div>

      {proposals?.data?.length > 0 ? (
        proposals?.data.map((proposal, index) => (
          <div
            key={index}
            className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 pb-2"
          >
            <div>{proposal?.name}</div>
            <div className="md:block hidden">{FormatDate(proposal?.created_on)}</div>
            <div
              className={`${
                proposal?.status === "pending"
                  ? "text-[#F3C300]"
                  : "text-[#32CD32]"
              }`}
            >
              {proposal?.status}
            </div>
          </div>
        ))
      ) : (
        <div>{proposals?.data?.message}</div>
      )}
    </div>
  );
};

export default ProposalList;
