import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import getItem from "../../../hooks/useAuth";
import { MdCreateNewFolder } from "react-icons/md";

function DropButton() {
  const [Clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!Clicked);
  const Token = getItem();
  
  return (
    <div
      className="relative transition-all duration-300 ease-in-out flex gap-3 py-2 px-2  cursor-pointer 0"
      onMouseLeave={handleClicked}
    >
      <MdCreateNewFolder className="mt-1" width={40} height={40} />
      <div>
        <p className="flex" onClick={handleClicked}>
          Create Proposal{" "}
          <span className="font-bold relative">
            <TiArrowSortedDown className="absolute bottom-[20%]" />
          </span>
        </p>
        <ul className={`${Clicked ? "block" : "hidden"}`}>
          <li>
            <a
              href="/createsassproposal"
              className="hover:border-b transition-all duration-300 ease-in-out"
            >
              SASS
            </a>
          </li>
          <li>
            <a
              href="/createsonasproposal"
              className="hover:border-b transition-all duration-300 ease-in-out"
            >
              SONAS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropButton;
