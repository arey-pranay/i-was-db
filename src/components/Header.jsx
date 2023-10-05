import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <Link href="/">
        <h2 className="text-2xl">
          <span className=" font-bold bg-purple-400 py-1 px-2 mr-3 rounded-lg">
            I was
          </span>

          <span className="text-xl hidden sm:inline">DB</span>
        </h2>
      </Link>
    </div>
  );
};

export default Header;
