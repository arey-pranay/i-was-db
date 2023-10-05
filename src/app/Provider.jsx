"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
export default function Provider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-800 dark:text-purple-100 text-gray-800 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
