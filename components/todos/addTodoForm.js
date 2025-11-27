"use client";

import Button from "../button";
import { LuPlus } from "react-icons/lu";
import { useTodos } from "@/context/todoContext";
import { useCategories } from "@/context/categoryContext";

const AddTodoForm = () => {
  const { addTodo, editTodo, setEditTodo, newTodo, setNewTodo, updateTodo } =
    useTodos();
  const { categories } = useCategories();

  const todoTitle = editTodo ? editTodo?.title : newTodo?.title ?? "";
  const todoDescription = editTodo
    ? editTodo?.description
    : newTodo?.description ?? "";
  const todoCategory = editTodo
    ? editTodo?.categoryId
    : newTodo?.categoryId ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo) {
      updateTodo();
      return;
    }

    addTodo();
  };

  const handleOnChange = (name, value) => {
    if (editTodo) {
      setEditTodo({ ...editTodo, [name]: value });
      return;
    }

    setNewTodo({ ...newTodo, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 max-w-md mx-auto p-4">
      {editTodo ? (
        <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPlus /> Edit Task
        </h2>
      ) : (
        <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPlus /> Add Task
        </h2>
      )}

      <div className="flex flex-col items-start justify-start">
        <label htmlFor="todoTitle" className="font-normal mb-1">
          Title
        </label>
        <input
          id="todoTitle"
          type="text"
          placeholder="Enter task title"
          value={todoTitle}
          onChange={(e) => handleOnChange("title", e.target.value)}
          className="border w-full rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="todoDescription" className="font-normal mb-1">
          Description
        </label>
        <textarea
          id="todoDescription"
          placeholder="Enter task description"
          value={todoDescription}
          onChange={(e) => handleOnChange("description", e.target.value)}
          className="border rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col items-start justify-start">
        <label htmlFor="todoCategory" className="font-normal mb-1">
          Category
        </label>
        <select
          id="todoCategory"
          value={todoCategory}
          onChange={(e) => handleOnChange("categoryId", e.target.value)}
          className="border w-full rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400">
          <option value="">Select a category</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <div className="block ml-auto mt-4">
        <Button type="submit">{editTodo ? "Update" : "Add"}</Button>
      </div>
    </form>
  );
};

export default AddTodoForm;
