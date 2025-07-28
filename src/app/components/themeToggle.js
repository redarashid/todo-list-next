"use client";
import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

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
          isDarkMode ? "Switch to light mode" : "Switch to dark mode"
        }
        className={` relative px-1 inline-flex justify-between items-center w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-all`}
      >
        <LuMoon
          className={` text-xl ${isDarkMode ? "text-white" : "text-gray-400"}`}
        />
        <div
          className={` absolute w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ${
            isDarkMode ? " translate-x-7" : " translate-x-0"
          }`}
        ></div>
        <LuSun
          className={` text-xl ${
            !isDarkMode ? " text-orange-400" : " text-gray-400"
          }`}
        />
      </div>
      <Tooltip id="theme-tooltip" place="top" effect="solid" />
    </div>
  );
};

export default ThemeToggle;
