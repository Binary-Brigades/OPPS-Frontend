import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function Menubar({ handleSideBar, open }) {
  return (
    <div className="md:hidden" onClick={handleSideBar}>
      {open ? (
        <IoClose className=" h-8 w-8" />
      ) : (
        <IoMenu className=" h-8 w-8" />
      )}
    </div>
  );
}

export default Menubar;
