import React from "react";
function Card(props) {
  const Value = props.Value;

  const State = props.State;
  return (
    <div className="bg-gray-200 border md:hover:scale-105 hover:cursor-pointer ease-in-out transition-all durration-500 rounded-md  p-4 h-[100px] text-center hover:scale-[101%]">
      <p className="text-[#1763D6] font-semibold text-sm">{State} Proposals</p>
      <p className="font-bold flex text-sm ml-[50%] mt-4">
        {Value} <span className="mx-auto"> {">"}</span>
      </p>
    </div>
  );
}

export default Card;
