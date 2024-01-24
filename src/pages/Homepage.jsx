// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Profile from "./Profile";
// import Proposals from "../components/Proposals";
// import Settings from "../components/Settings";
// import Dashboard from "../components/Dashboard";

// function Homepage() {
//   const prof = "profile";
//   const [selectedItem, setSelectedItem] = useState("Dashboard");
//   const routeConfig = {
//     Dashboard,
//     profile: Profile,
//     proposals: Proposals,
//     settings: Settings,
//   };
//   const [open, setOpen] = useState(false);
//   const handleSideBar = () => {
//     setOpen(!open);
//   };
//   const handleSidebarItemClick = (item) => {
//     setSelectedItem(item);
//     setOpen(false);
//   };
//   return (
//     <div className=" w-screen h-screen flex-col">
//       <Navbar handleSideBar={handleSideBar} open={open} />

//       <div className=" flex flex-col w-full h-full">
//         <div>
//           <Sidebar
//             open={open}
//             handleSideBar={handleSideBar}
//             onItemClick={handleSidebarItemClick}
//           />
//         </div>
//         <div className="px-10 py-5 h-full ml-10 relative mt-[65px]">
//           {React.createElement(routeConfig[selectedItem])}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;
