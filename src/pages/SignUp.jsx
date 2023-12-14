import React from "react";
import mmustLogo from "../assets/MMU.png";
import student from "../assets/sci.jpg";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
function SignUp() {
  const gradientColors = [
    "rgb(229 231 235)",
    "rgb(229 231 235)",
    "rgb(229 231 235)",
  ];
  return (
    <div className="relative w-screen h-screen  gap-6 bg-gray-200 px-5 py-5 flex flex-col items-center justify-center rounded-xl">
      <div className="rounded-tr-xl rounded-br-xl md:rounded-tr-none w-[99%] h-[600px] md:h-[95%] flex  items-center  shadow-xl shadow-slate-400 mt-5 flex-row-reverse">
        <div className="flex  justify-center items-center w-full h-[100%] flex-1 bg-[#fff] rounded-xl   md:rounded-tl-none">
          <form
            action=""
            className="z-[888] relative w-full md:w-[82%] h-full flex flex-col justify-between items-center p-6 md:p-14 rounded-xl"
          >
            <img
              className="w-[100px] h-[100px] object-cover"
              src={mmustLogo}
              alt=""
            />
            <h1 className="text-left absolute top-[26%] left-[5%] md:left-[12%] text-md uppercase  text-blue-500 font-bold">
              Sign Up
            </h1>
            <div
              className="flex justify-between gap-x-2 md:gap-2 items-center w-full 
        "
            >
              <div className="divinput">
                <input
                  className="input w-full"
                  type="text"
                  placeholder="firstname"
                ></input>
              </div>
              <div className="divinput">
                <input
                  className="input w-full"
                  type="text"
                  placeholder="lastname"
                ></input>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center mt-[-30px]">
              <div className="divinput">
                <MdOutlineEmail className="w-5 h-5 text-black font-bold" />
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <div className="divinput mt-6 mb-6">
                <IoLockClosedOutline className="w-5 h-5 font-bold text-black" />
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                ></input>
              </div>
              <div className="divinput mt-2 mb-2">
                <CiLock className="w-5 h-5 font-bold text-black" />
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <p className="mt-[5px] md:mb-5">
                Already have an account?{" "}
                <Link
                  className="font-bold text-blue-500 cursor-pointer ml-2"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
            <input
              className="btn w-full mt-[-40px] rounded-lg uppercase"
              type="submit"
              value="Sign Up"
            ></input>
          </form>
        </div>
        <div className="hidden h-full md:block flex-1  rounded-tl-xl rounded-bl-xl ">
          <img
            className="h-full object-cover object-center rounded-tl-xl rounded-bl-xl"
            src={student}
            alt=""
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="hidden md:block absolute bottom-0 w-[100%] z-[11]"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                style={{ stopColor: color }}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,181.3C672,192,768,224,864,224C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default SignUp;
