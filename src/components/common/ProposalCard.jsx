import React from "react";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProposalCard({ proposal }) {
  console.log(proposal);
  return (
    <Link
      to={`/proposals/review/${proposal?.id}`}
      className="h-full cursor-pointer"
      state={proposal}
    >
      <div className="px-4 py-4  flex bg-gray-200 hover:bg-gray-300 hover:scale-105 transition-all ease-in-out duration-200 rounded-lg shadow-lg flex-col items-center justify-between flex-1 h-full">
        <div>
          <h2 className="text-start font-bold">{proposal?.name}</h2>
          <p className="">{proposal?.status}.</p>
        </div>
      </div>
    </Link>
  );
}

export default ProposalCard;
