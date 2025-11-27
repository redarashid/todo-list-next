"use client";

import { useTodos } from "@/context/todoContext";
import { LuCheck, LuPencil, LuTrash, LuUndo } from "react-icons/lu";
import { BiCheckCircle } from "react-icons/bi";
import EmptyTaskCard from "@/components/emptyTaskCard";
import { useCategories } from "@/context/categoryContext";
import { getTextColor } from "@/utils/helper";
import { Tooltip } from "react-tooltip";

const TodoList = () => {
  const { todos, setEditTodo, setDeleteTodo, toggleTodo, setOpenTodoModal } =
    useTodos();
  const { getCategoryById } = useCategories();

  if (todos.length === 0) {
    return <EmptyTaskCard />;
  }

  const onEditButtonClick = (todo) => {
    setEditTodo(todo);
    setOpenTodoModal(true);
  };

  const onDeleteButtonClick = (todo) => {
    setDeleteTodo(todo);
  };

  const onToggleButtonClick = (todo) => {
    toggleTodo(todo.id);
  };

  return (
    <>
      <ul className="w-full mx-auto space-y-2">
        {todos.map((todo) => {
          const categoryData = getCategoryById(todo?.categoryId);
          return (
            <li
              key={todo.id}
              className="group hover:relative flex items-center gap-3 justify-between p-4 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-0 md:gap-4">
                <div
                  className={
                    todo.completed
                      ? "absolute md:static left-1 text-green-500 hidden md:block "
                      : "absolute md:static left-1 text-gray-400 hidden md:block "
                  }>
                  <BiCheckCircle className="text-2xl" />
                </div>
                <div className="flex-grow space-y-1 flex flex-col justify-start items-start">
                  {categoryData && (
                    <div
                      className="px-2 mb-1 rounded-md text-sm py-1 inline-flex"
                      style={{ backgroundColor: categoryData?.color }}>
                      <span
                        style={{ color: getTextColor(categoryData?.color) }}>
                        {categoryData?.name}
                      </span>
                    </div>
                  )}
                  <div
                    className={`font-bold ${
                      todo.completed
                        ? "line-through font-semibold text-gray-900 dark:text-gray-100 text-lg"
                        : "font-semibold text-gray-900 dark:text-gray-100 text-lg"
                    }`}>
                    {todo.title}
                  </div>
                  <div
                    className={`${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-400"
                    } text-sm`}>
                    {todo.description}
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 md:invisible group-hover:visible flex items-center space-x-1">
                <button
                  className="text-green-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-green-600 dark:hover:bg-green-900 transition-all"
                  onClick={() => onToggleButtonClick(todo)}
                  data-tooltip-id="todo-tooltip"
                  data-tooltip-content={
                    todo?.completed ? "Undo" : "Mark as Completed"
                  }>
                  {todo?.completed ? <LuUndo /> : <LuCheck />}
                </button>
                <button
                  className="text-blue-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-900 transition-all"
                  onClick={() => onEditButtonClick(todo)}
                  data-tooltip-id="todo-tooltip"
                  data-tooltip-content={"Edit Task"}>
                  <LuPencil />
                </button>
                <button
                  className="text-red-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-red-600 dark:hover:bg-red-900 transition-all"
                  onClick={() => onDeleteButtonClick(todo)}
                  data-tooltip-id="todo-tooltip"
                  data-tooltip-content={"Delete Task"}>
                  <LuTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* React Tooltip */}
      <Tooltip id="todo-tooltip" place="bottom" effect="solid" />
    </>
  );
};

export default TodoList;
