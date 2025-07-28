"use client"
import React, { useEffect, useState } from "react";

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

  const themeToggle = () => {
    const root = document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    root.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className=" flex items-center gap-2">
      <div></div>
    </div>
  );
};

export default ThemeToggle;
