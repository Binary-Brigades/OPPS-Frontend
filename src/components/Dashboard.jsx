import React from "react";
import Piechart from "./Piechart";

function Dashboard() {
  const data = [
    { name: 'Pending', value: 40 },
    { name: 'Approved', value: 1 },
   
  ];

  return (
    <div className="h-full items-center justify-start w-full flex text-black md:pl-[200px]">
      <p>this is Dashboard</p>
      <div >
      <Piechart data= {data}/>
      </div>
    </div>
  );
}

export default Dashboard;
