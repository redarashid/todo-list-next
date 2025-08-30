"use client";

import { LuPlus } from "react-icons/lu";
import Button from "./button";
import { useTodos } from "@/context/todoContext";

const EmptyTaskCard = () => {
  const { setOpenTodoModal } = useTodos();

  const openModal = () => {
    setOpenTodoModal(true);
  };

  return (
    <div className="bg-white min-h-content dark:bg-gray-800 p-4 rounded-lg justify-center items-center flex">
      <div className="flex flex-col items-center text-center">
        <p className="text-xl text-gray-800 dark:text-gray-100 mb-4">
          Tasks Not Available
        </p>
        <Button onClick={openModal}>
          <LuPlus className="mr-2 text-xl z-10 relative" /> Add Task
        </Button>
      </div>
    </div>
  );
};

export default EmptyTaskCard;
