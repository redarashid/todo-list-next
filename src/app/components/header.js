"use client";

import { LuListChecks } from "react-icons/lu";
import AvatarMenu from "./avatarMenu";
import ThemeToggle from "./themeToggle";

export default function Header() {
  return (
    <header className="sticky z-30 left-0 pl-16 md:pl-4 top-0 right-0 bg-gray-100 dark:bg-gray-700 dark:bg-opacity-20 text-gray-900 dark:text-gray-100 px-4 py-3">
      <div className="flex justify-between items-center">
        {/* App Title */}
        <h1 className="text-xl font-semibold inline-flex gap-3 items-center">
          <LuListChecks className="text-2xl text-orange-400" />
          Todo App
        </h1>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Dark Mode Toggle */}
          <ThemeToggle />

          {/* Avatar Menu */}
          <AvatarMenu />
        </div>
      </div>
    </header>
  );
}
