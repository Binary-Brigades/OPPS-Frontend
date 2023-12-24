import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Homepage() {
  const [open, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar handleSideBar={handleSideBar} open={open} />

      <Sidebar open={open} handleSideBar={handleSideBar} />
    </div>
  );
}

export default Homepage;
