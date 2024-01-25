import React from "react";
import Piechart from "../common/Piechart";
import Card from "../common/Card";
import ProposalList from "../common/ProposalList";

function Dashboard({ getUserDetail }) {
  const data = [
    { name: "Pending", value: 40 },
    { name: "Approved", value: 1 },
  ];

  return (
    <div className="pt-12 h-full justify-start items-start w-full flex text-black flex-col">
      <div className="flex w-full flex-col">
        <p className="font-bold">
          Welcome back <span className="font-bold text-[20px]">{getUserDetail.username}</span>
        </p>
        <div className=" pr-8 flex  md:flex-row  justify-even gap-4 md:gap-12">
          {data.map((item) => (
            <Card State={item.name} Value={item.value} key={item.name} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[#1763D6] font-bold py-3">Recent Proposals</p>
          <ProposalList />
        </div>
        <div className="items-left justify-left p-8 max-w-80%">
          <Piechart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
