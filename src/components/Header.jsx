import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto items-center py-6 px-4">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-xl">
            <span className=" font-bold bg-purple-500 text-white py-1 px-3 mr-1 rounded-lg">
              <span className="text-xl inline sm:hidden">iWdb</span>

              <span className="text-xl hidden sm:inline">I was DB</span>
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
