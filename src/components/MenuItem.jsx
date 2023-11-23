import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-6 lg:mx-6 hover:text-purple-700">
        {<Icon className="text-2xl mx-4 sm:hidden" />}{" "}
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
