import React from "react";
import { IoPencil } from "react-icons/io5";

function ProposalCard() {
  return (
    <div className="px-4 py-4 flex-1 flex bg-gray-200 hover:bg-gray-300 hover:scale-105 transition-all ease-in-out duration-200 rounded-lg shadow-lg flex-col items-center justify-between">
      <div>
        <h2 className="text-start font-bold">Online Clearance</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex w-full justify-between">
        <a href="#" className="text-blue-500">
          view
        </a>
        <a href="#" className="text-gray-500">
          <IoPencil />
        </a>
      </div>
    </div>
  );
}

export default ProposalCard;
