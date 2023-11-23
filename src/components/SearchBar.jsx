"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl px-4 mx-auto justify-between items-center"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for keywords..."
        className="flex-1 w-full rounded-md h-14 font-semibold text-purple-900 dark:text-purple-300 placeholder-gray-500 outline-none bg-transparent"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-purple-700 font-semibold disabled:font-extralight disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
