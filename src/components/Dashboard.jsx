import React from "react";
import Piechart from "./Piechart";

function Dashboard() {
  return (
    <div className="h-full items-center justify-start w-full flex text-black md:pl-[200px]">
      <p>this is Dashboard</p>
      <Piechart/>
    </div>
  );
}

export default Dashboard;
