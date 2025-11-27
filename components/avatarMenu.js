"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuList, LuListTodo } from "react-icons/lu";

export default function AvatarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuOptions = [
    { name: "My Tasks", icon: <LuListTodo className="text-xl" />, link: "/" },
    {
      name: "Categories",
      icon: <LuList className="text-xl" />,
      link: "/categories",
    },
  ];

  return (
    <div className="relative z-20">
      {/* Avatar */}
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/profile.jpg`}
        alt="User Avatar"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"
        onClick={toggleMenu}
        unoptimized
      />

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute z-20 right-0 p-2 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg">
          <ul>
            {menuOptions.map((option, index) => (
              <li
                key={index}
                className=" rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-opacity-50 dark:hover:bg-gray-600 cursor-pointer">
                <Link
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                  href={option?.link}>
                  {option.icon}
                  <span className="ml-2 text-sm">{option.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
