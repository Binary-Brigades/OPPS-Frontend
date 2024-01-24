import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Proposals from "../components/Proposals";
import Settings from "../components/Settings";
import Dashboard from "../components/Dashboard";

function Homepage() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const routeConfig = {
    Dashboard,
    profile: Profile,
    proposals: Proposals,
    settings: Settings,
  };
  const [open, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!open);
  };
  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    setOpen(false);
  };
  return (
    <div className=" w-screen h-screen flex-col">
      <Navbar handleSideBar={handleSideBar} open={open} />

      <div className=" flex flex-col w-full h-full">
        <div>
          <Sidebar
            open={open}
            handleSideBar={handleSideBar}
            onItemClick={handleSidebarItemClick}
          />
        </div>
        <div className="md:px-10 py-5 h-full md:ml-10 ml-4 relative ">
          <h5 className="text-blue-500 text-xl font-bold uppercase absolute top-[100px] md:left-[250px]">
            {selectedItem}
          </h5>
          {React.createElement(routeConfig[selectedItem])}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
