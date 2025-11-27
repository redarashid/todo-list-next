"use client";

import { useCategories } from "@/context/categoryContext";
import { LuPencil, LuTrash } from "react-icons/lu";
import EmptyCategoryCard from "../emptyCategoryCard";
import { Tooltip } from "react-tooltip";

const CategoryList = () => {
  const {
    categories,
    setEditCategory,
    setDeleteCategory,
    setOpenCategoryModal,
  } = useCategories();

  if (categories.length === 0) {
    return <EmptyCategoryCard />;
  }

  const onEditButtonClick = (category) => {
    setEditCategory(category);
    setOpenCategoryModal(true);
  };

  const onDeleteButtonClick = (category) => {
    setDeleteCategory(category);
  };

  const isDefaultCategory = (category) => {
    return category.id < 5;
  };

  return (
    <>
      <ul className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-start items-start">
        {categories.map((category) => (
          <li
            key={category.id}
            className="group h-full flex items-center gap-3 justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: category.color }}
                title={category.name}
              />
              <div className="flex-grow">
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {category.name}
                </div>
              </div>
            </div>
            <div className="md:invisible group-hover:visible flex items-center space-x-1">
              {!isDefaultCategory(category) && (
                <>
                  <button
                    className="text-blue-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-900 transition-all"
                    onClick={() => onEditButtonClick(category)}
                    data-tooltip-id="category-tooltip"
                    data-tooltip-content={"Edit Category"}>
                    <LuPencil />
                  </button>
                  <button
                    className="text-red-500 hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-red-600 dark:hover:bg-red-900 transition-all"
                    onClick={() => onDeleteButtonClick(category)}
                    data-tooltip-id="category-tooltip"
                    data-tooltip-content={"Delete Category"}>
                    <LuTrash />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      {/* React Tooltip */}
      <Tooltip id="category-tooltip" place="bottom" effect="solid" />
    </>
  );
};

export default CategoryList;
