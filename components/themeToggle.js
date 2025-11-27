"use client";

import { useState, useEffect } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with system preference or saved setting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
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
    <div className="flex items-center gap-2">
      <div
        onClick={toggleTheme}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={
          isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
        } // Updated tooltip
        className={`relative px-1 inline-flex justify-between items-center w-14 h-7  bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-all`}>
        {/* Moon Icon with Tooltip */}
        <LuMoon
          className={`text-xl ${isDarkMode ? "text-white" : "text-gray-400"}`}
        />

        <div
          className={`absolute w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ${
            isDarkMode ? "translate-x-7" : "translate-x-0"
          }`}></div>

        {/* Sun Icon with Tooltip */}
        <LuSun
          className={`text-xl ${
            !isDarkMode ? "text-orange-400" : "text-gray-400"
          }`}
        />
      </div>

      {/* React Tooltip */}
      <Tooltip id="theme-tooltip" place="top" effect="solid" />
    </div>
  );
}
