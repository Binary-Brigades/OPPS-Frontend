import React from "react";
import { IoFolder, IoGrid, IoPerson, IoSettings } from "react-icons/io5";

function Sidebar() {
  return (
    <div
      className="px-3 text-white
    py-10 h-[90vh] mt-[65px] absolute bg-blue-500 w-[200px] z-10 overflow-y-hidden"
    >
      <div>
        <div className="flex items-center gap-3 py-2 px-2">
          <IoGrid />
          <p>
            <a href="">Dashboard</a>
          </p>
        </div>
        <div className="flex items-center gap-3 py-2 px-2">
          <IoPerson />
          <p>
            <a href="">Profile</a>
          </p>
        </div>
        <div className="flex items-center gap-3 py-2 px-2">
          <IoFolder />
          <p>
            <a href="">Proposals</a>
          </p>
        </div>
      </div>
      <div className="mt-[40vh]">
        <div className="flex items-center gap-3 py-2 px-2">
          <IoSettings />
          <p>
            <a href="">Settings</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
