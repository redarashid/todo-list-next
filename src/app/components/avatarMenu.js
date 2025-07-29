import Image from "next/image";
import React from "react";

const AvatarMenu = () => {
  return (
    <div className=" relative z-20">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/profile.jpg`}
        alt="profile"
        width={40}
        height={40}
        className=" w-10 h-10 rounded-full bg-gray-500 cursor-pointer"
        unoptimized
      />
    </div>
  );
};

export default AvatarMenu;
