import Image from "next/image";
import React from "react";
import { Dropdown, Space } from "antd";
import { LuListTodo, LuList, LuDownload } from "react-icons/lu";

const items = [
  {
    key: "1",
    label: "My Tasks",
    icon: <LuListTodo className=" text-xl" />,
  },
  {
    key: "2",
    label: "Categories",
    icon: <LuList className=" text-xl" />,
  },
  {
    key: "3",
    label: "Import/Export",
    icon: <LuDownload className=" text-xl" />,
  },
];
const AvatarMenu = () => {
  return (
    <div className=" relative z-20">
      <Dropdown menu={{ items }}>
        <Space>
          <Image
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH || ""
            }/images/profile.jpg`}
            alt="profile"
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full bg-gray-500 cursor-pointer"
            unoptimized
          />
        </Space>
      </Dropdown>
    </div>
  );
};

export default AvatarMenu;
