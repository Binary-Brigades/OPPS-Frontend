import React from "react";
import Piechart from "./Piechart";
import Card from "./Card";
import ProposalList from "./ProposalList";

function Dashboard() {
  const data = [
    { name: "Pending", value: 40 },
    { name: "Approved", value: 1 },
  ];
  const User = "Antony";

  return (
    <div className="pt-12 h-full justify-start items-start w-full flex text-black flex-col">
      <div className="flex w-full flex-col">
        <p className="font-bold">Welcome back {User}</p>
        <div className=" pr-8 flex  md:flex-row  justify-even gap-4 md:gap-12">
          {data.map((item) => (
            <Card State={item.name} Value={item.value} key={item.name} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[#1763D6] font-bold py-3">Recent Proposals</p>
          <ProposalList/>
        </div>
        <div className="items-left justify-left p-8 max-w-80%">
          <Piechart data={data} /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
