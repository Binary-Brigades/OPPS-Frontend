import React, { useState } from "react";
import mmustLogo from "../assets/MMU.png";
import student from "../assets/sci.jpg";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import useAuthToken from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const { updateAuthToken } = useAuthToken();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const notification = toast.loading("authenticating...");

    try {
      const response = await fetch(
        "https://oops-n5cn.onrender.com/api/v1/account/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        // Perform login logic here
        toast.success("Login successful", {
          id: notification,
        });
        updateAuthToken(data.key);
        window.location.href = "/";
      } else {
        toast.error(data.message, {
          id: notification,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const gradientColors = [
    "rgb(229 231 235)",
    "rgb(229 231 235)",
    "rgb(229 231 235)",
  ];
  return (
    <>
      <Toaster />
      <div className="relative w-screen h-screen  gap-6 bg-gray-200 px-5 py-5 flex flex-col items-center justify-center rounded-xl ">
        <div className="rounded-tr-xl rounded-br-xl md:rounded-tr-none w-[99%] h-[600px] md:h-[95%] flex  items-center  shadow-xl shadow-slate-400 mt-5 flex-row-reverse">
          <div className="flex  justify-center items-center w-full h-[100%] flex-1 bg-[#fff] rounded-xl   md:rounded-tl-none">
            <form
              onSubmit={handleLogin}
              action=""
              className="z-[888] relative w-full md:w-[72%] h-full flex flex-col justify-between items-center p-6 md:p-14 rounded-xl"
            >
              <img
                className="w-[100px] h-[100px] object-cover"
                src={mmustLogo}
                alt=""
              />
              <h1 className="text-left absolute top-[28%] left-[50px] md:left-[70px] text-md uppercase  text-blue-500 font-bold tracking-widest">
                Login To OPPS
              </h1>
              <p className="text-left  text-md ml-[50px] mb-[-60px] w-full ">
                Welcome back!
              </p>
              <p className="text-left  text-md md:ml-[50px]  mb-[-40px] w-full ml-[50px] ">
               
                Please fill in your credentials...
              </p>
              <div className="flex flex-col justify-center w-[90%] text-start">
                <div className="divinput mb-[-1px]">
                  <MdOutlineEmail className="w-5 h-5 text-black font-bold" />
                  <input
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="input"
                    type="text"
                    placeholder="username..."
                  ></input>
                </div>
                <div className="divinput mt-4 mb-6">
                  <IoLockClosedOutline className="w-5 h-5 font-bold text-black" />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    type="password"
                    placeholder="password..."
                  ></input>
                </div>
                {/* <div className="mb-5">

                <input type="checkbox" name="" id="" /> Remember me
              </div> */}
                <div className="flex flex-col gap-8 text-sm">
                  <p className="mt-[-5px] md:mb-5">
                    <Link
                      className=" text-blue-500 cursor-pointer ml-2"
                      to="/forgot-password"
                    >
                      Forgot password?
                    </Link>
                  </p>
                  <p className="mt-[-10px] md:mb-5">
                    Don't have an account?
                    <Link
                      className="font-bold text-blue-500 cursor-pointer ml-2"
                      to="/signup"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
              <input
                className="btn w-full mt-[-30px] mb-5 rounded-lg uppercase"
                type="submit"
                value="Login"
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
    </>
  );
}

export default Login;
