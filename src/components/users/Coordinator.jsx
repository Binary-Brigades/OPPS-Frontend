import React from "react";
import Piechart from "../common/Piechart";
import Card from "../common/Card";
import ProposalList from "../common/ProposalList";
import useAuthToken from "../../../hooks/useAuth";

function Coordinator() {
  const { getItem } = useAuthToken();
  const { token, getUserDetail } = getItem();
  const data = [
    { name: "Recieved", value: 40 },
    { name: "Pending", value: 1 },
    { name: "Approved", value: 1 },
  ];

  return (
    <div className="pt-12 h-full justify-start items-start w-full flex text-black flex-col lg:pl-[100px]">
      <div className="flex w-full md:w-[80%] flex-col">
        <p className="font-bold">
          Welcome back{" "}
          <span className="font-bold text-[20px]">
            {getUserDetail.username}
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3   items-center gap-1 md:gap-2 ">
          {data.map((item) => (
            <Card State={item.name} Value={item.value} key={item.name} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-[#1763D6] font-bold py-3">Recent Proposals</p>
          {/* <ProposalList /> */}
        </div>
        <div className="items-left justify-left p-8 max-w-80%">
          <Piechart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Coordinator;
