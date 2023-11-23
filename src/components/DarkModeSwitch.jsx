"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? "dark" : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="text-xl cursor-pointer hover:text-purple-700">
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
