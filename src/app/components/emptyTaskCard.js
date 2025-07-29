"use client";

import React from "react";
import Button from "./button";
import { useTodos } from "../context/todoContext";
import { LuPlus } from "react-icons/lu";

const EmptyTaskCard = () => {
    // Empty Task Card
  const { setOpenTodoModal } = useTodos();

  // Open Modal
  const openModal = () => {
    setOpenTodoModal(true);
  };

  return (
    <div className=" bg-white min-h-content dark:bg-gray-800 p-4 rounded-lg justify-center items-center flex">
      <div className=" flex flex-col items-center text-center">
        <p className=" text-lg text-gray-800 dark:text-gray-100 mb-4">
          Tasks Not Available
        </p>
        <Button onClick={openModal}>
          <LuPlus className=" mr-2 text-xl z-10 relative" />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default EmptyTaskCard;
