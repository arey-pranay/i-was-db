"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
function NavbarItem({ title, param }) {
  const searchKey = useSearchParams();
  const genre = searchKey.get("genre");
  return (
    <div className="">
      <Link
        className={`text-white hover:text-purple-200 dark:hover:text-purple-600 font-semibold ${
          genre &&
          genre === param &&
          "underline underline-offset-2 decoration-2 decoration-purple-200 dark:decoration-purple-500"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
