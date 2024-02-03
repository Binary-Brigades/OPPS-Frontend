import React from "react";
import Lottie from "lottie-react";
import lottie from "../../assets/Lottie/Animation - 1706963454691.json";

function EmptyLottie() {
  return (
    <div>
      <Lottie className="h-[100%] w-full object-cover" animationData={lottie} />
    </div>
  );
}

export default EmptyLottie;
