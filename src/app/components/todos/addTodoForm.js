"use client";
import { useCategories } from "@/app/context/categoryCotext";
import { useTodos } from "../../../app/context/todoContext";
import { LuPlus } from "react-icons/lu";
import Button from "../button";

const AddTodoForm = () => {
  const { addTodo, editTodo, setEditTodo, newTodo, setNewTodo, updateTodo } =
    useTodos();
  const { categories } = useCategories();

  const todoTitle = editTodo ? editTodo?.title : newTodo?.title ?? "";
  const todoDescription = editTodo
    ? editTodo?.description
    : newTodo?.description ?? "";
  const todoCategoryId = editTodo ? editTodo?.categoryId : newTodo?.categoryId;

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
    } else {
      setNewTodo({ ...newTodo, [name]: value });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col space-y-3 max-w-md mx-auto p-4"
    >
      {editTodo ? (
        <h2 className=" text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPlus />
          Edite Task
        </h2>
      ) : (
        <h2 className=" text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPlus />
          Add Task
        </h2>
      )}
      <div className=" flex flex-col justify-start items-start">
        <lable htmlFor="todoTitle">Title</lable>
        <input
          type="text"
          id="todoTitle"
          value={todoTitle}
          onChange={(e) => handleOnChange("title", e.target.value)}
          className=" border w-full rounded px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>
      <div className=" flex flex-col justify-start items-start">
        <lable htmlFor="todoDescription">Description</lable>
        <input
          type="text"
          id="todoDescription"
          value={todoDescription}
          onChange={(e) => handleOnChange("description", e.target.value)}
          className="border w-full rounded px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>
      <div className=" flex flex-col justify-start items-start">
        <lable htmlFor="todoCategory">Category</lable>
        <select
          id="todoCategory"
          value={todoCategoryId}
          onChange={(e) => handleOnChange("categoryId", e.target.value)}
          className="border w-full rounded px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className=" block ml-auto mt-4">
        <Button type="submit">{editTodo ? "Update" : "Add"}</Button>
      </div>
    </form>
  );
};

export default AddTodoForm;