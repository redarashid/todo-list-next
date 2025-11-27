"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import {
  LuList,
  LuDownload,
  LuChevronUp,
  LuChevronLeft,
  LuChevronRight,
  LuListTodo,
  LuContact,
  LuUser,
  LuGithub,
} from "react-icons/lu";
import { Tooltip } from "react-tooltip";

const SidebarMenu = ({
  name,
  icon,
  isActive,
  toggle,
  hideText,
  path,
  target,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      if (!target) {
        router.push(path);
      } else {
        window.open(path);
      }
    }
    if (toggle && window.innerWidth <= 768) {
      toggle();
    }
  };

  return (
    <li>
      <div
        className="flex justify-between items-center py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-md px-2 cursor-pointer"
        onClick={handleClick}>
        <div className="flex items-center">
          <span data-tooltip-id="sidebar-tooltip" data-tooltip-content={name}>
            {icon}
          </span>
          {!hideText && <span className="ml-2 text-sm w-56">{name}</span>}
        </div>
        {isActive && <LuChevronUp />}
      </div>
    </li>
  );
};

const menuItems = [
  {
    name: "My Tasks",
    icon: <LuListTodo className="text-xl text-orange-400" />,
    path: "/",
  },
  {
    name: "Categories",
    icon: <LuList className="text-xl text-orange-400" />,
    path: "/categories",
  },
  {
    name: "Import / Export",
    icon: <LuDownload className="text-xl text-orange-400" />,
    path: "/export",
  },
  {
    name: "Contact US",
    icon: <LuContact className="text-xl text-orange-400" />,
    path: "redarashid824@gmail.com",
    target: "_blank",
  },
  {
    name: "Developer",
    icon: <LuUser className="text-xl text-orange-400" />,
    path: "https://www.linkedin.com/in/rashid-reda-4048a5314/",
    target: "_blank",
  },
  {
    name: "Github Repo",
    icon: <LuGithub className="text-xl text-orange-400" />,
    path: "https://github.com/redarashid",
    target: "_blank",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useLocalStorage(
    "sidebarCollapsed",
    true
  );

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <aside
        className={`fixed z-40 pt-20 min-h-screen md:static md:block transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-1 p-0 md:pt-20 md:p-4 md:w-16" : "p-4 w-64"
        } 
                bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden`}>
        <div className="fixed top-3 h-10 w-10 bg-gray-500 bg-opacity-10 p-2 rounded-full left-3 flex justify-between items-center">
          <div
            onClick={toggleSidebar}
            className="cursor-pointer text-2xl text-orange-400">
            {isCollapsed ? (
              <LuChevronRight
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={"Show"}
              />
            ) : (
              <LuChevronLeft
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={"Collapse"}
              />
            )}
          </div>
        </div>

        <ul>
          {menuItems.map((item, index) => (
            <SidebarMenu
              key={index}
              hideText={isCollapsed}
              name={item.name}
              icon={item.icon}
              path={item.path}
              toggle={toggleSidebar}
              target={item.target}
            />
          ))}
        </ul>
      </aside>
      {/* React Tooltip */}
      <Tooltip id="sidebar-tooltip" place="right" effect="solid" />
    </>
  );
};

export default Sidebar;
