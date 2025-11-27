"use client";

import Button from "../button";
import { LuPencil, LuPlus } from "react-icons/lu";
import { useCategories } from "@/context/categoryContext";
import { getTextColor } from "@/utils/helper";

const AddEditCategoryForm = () => {
  const {
    addCategory,
    editCategory,
    setEditCategory,
    defaultColors,
    updateCategory,
    newCategory,
    setNewCategory,
  } = useCategories();

  const categoryName = editCategory
    ? editCategory?.name
    : newCategory?.name ?? "";
  const categoryColor = editCategory
    ? editCategory?.color
    : newCategory?.color ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editCategory) {
      updateCategory();
      return;
    }

    addCategory();
  };

  const handleOnChange = (name, value) => {
    if (editCategory) {
      setEditCategory({ ...editCategory, [name]: value });
      return;
    }

    setNewCategory({ ...newCategory, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 max-w-md mx-auto p-4">
      {editCategory ? (
        <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPencil /> Edit Category
        </h2>
      ) : (
        <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 items-center">
          <LuPlus /> Add Category
        </h2>
      )}

      <div className="flex flex-col items-start justify-start">
        <label htmlFor="categoryName" className="font-normal mb-1">
          Name
        </label>
        <input
          id="categoryName"
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => handleOnChange("name", e.target.value)}
          className="border w-full rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col items-start justify-start mb-4">
        <label htmlFor="categoryColor" className="font-normal mb-1">
          Color
        </label>

        <div
          className="relative w-full p-2 px-3 h-10 mb-4 rounded-md"
          style={{ backgroundColor: categoryColor }}>
          <span style={{ color: getTextColor(categoryColor) }}>
            {categoryColor}
          </span>
        </div>

        <div className="flex gap-3 items-center">
          {defaultColors?.map((color, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOnChange("color", color)}
              className={`w-8 h-8 rounded-full transition-all duration-300 
                            ${
                              categoryColor === color
                                ? "ring-4 ring-orange-500"
                                : "ring-2"
                            } focus:outline-none`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}

          <button
            type="button"
            onClick={() =>
              document.getElementById("categoryColorInput").click()
            }
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all">
            <LuPlus className="text-lg" />
          </button>

          <input
            id="categoryColorInput"
            type="color"
            value={categoryColor}
            onChange={(e) => handleOnChange("color", e.target.value)} // Changed to onChange
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      <div className="block ml-auto mt-4">
        <Button type="submit">{editCategory ? "Update" : "Add"}</Button>
      </div>
    </form>
  );
};

export default AddEditCategoryForm;
