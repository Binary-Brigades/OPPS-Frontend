import React from "react";
import mmustLogo from "../assets/MMU.png";

function Login() {
  return (
    <div>
      <div className="grid cols-2 gap-0 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20 ">
        <img
          src="https://mmust.ac.ke/images/2021/04/09/sci.jpg"
          alt="login page"
          className="flex-1"
        />
        <div className="grid items-center justify-center object-cover p-2 bg-red-300">
          <img
            src={mmustLogo}
            alt="MMUST Logo"
            className="h-16 md:h-20 lg:h-[150px]"
          />
          <div className=" tex-left">
            <h1 className="font-inter">Login</h1>
          </div>
          <form>
            <input />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
