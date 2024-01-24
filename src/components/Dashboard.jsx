import React from "react";
import Piechart from "./Piechart";
import Card from "./Card";

function Dashboard() {
  const data = [
    { name: "Pending", value: 40 },
    { name: "Approved", value: 1 },
  ];
  const User = "Antony";

  return (
    <div className="top-[100px]  items-center justify-start w-full flex text-black md:pl-[200px] mt-12">
      <div className="flex w-full flex-col">
        <p className="font-bold">Welcome back {User}</p>
        <div className=" pr-8 flex  md:flex-row  justify-even gap-4 md:gap-12">
          {data.map((item) => (
            <Card State={item.name} Value={item.value} key={item.name} />
          ))}
        </div>
        <div className="w-full md:w-[400px] justify-left">
          <Piechart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
