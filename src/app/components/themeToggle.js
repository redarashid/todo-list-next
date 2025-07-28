"use client";
import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //
  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    if (
      saveTheme === "dark" ||
      (!saveTheme && window.matchMedia(`(prefers-color-scheme: dark)`).matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    root.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className=" flex items-center gap-2">
      <div
        onClick={toggleTheme}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={
          isDarkMode ? "Switch a light mode" : "Switch al dark mode"
        }
        className={` relative px-1 inline-flex justify-between items-center w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-all`}
      >
        <LuMoon
          className={` text-xl ${isDarkMode ? "text-white" : "text-gray-400"}`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
