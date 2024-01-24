import React, { useState } from "react";
import Logo from "../assets/MMU.png";
import Menubar from "../components/Menubar";
import { IoNotifications, IoPerson, IoSearch } from "react-icons/io5";
function Navbar({ handleSideBar, open }) {
  return (
    <header className="flex items-center px-3 py-2 w-full h-[65px] shadow-lg justify-between gap-2 fixed z-[999] bg-white">
      <a href="/">
        <img
          src={Logo}
          alt="mmust logo"
          className="object-cover w-[50px] h-[50px]"
        />
      </a>
      <div>
        <h1 className="hidden md:block text-blue-500 uppercase font-bold text-lg">
          Masinde Murilo University Of Science And Technology
        </h1>
      </div>

      <div className="divinput flex-1 max-w-[50%]  md:max-w-[30%]">
        <IoSearch className="w-5 h-5" />
        <input className="input" type="search" placeholder="search..."></input>
      </div>

      <Menubar handleSideBar={handleSideBar} open={open} />
      <div className="flex items-center justify-between gap-2">
        <IoNotifications />
        <p className="md:flex items-center gap-2 px-2 hidden">
          <IoPerson />
          <span className="hidden md:inline-block text-sm text-blue-500">
            Hi, User!
          </span>
        </p>
      </div>
    </header>
  );
}

export default Navbar;
