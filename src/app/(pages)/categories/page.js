import React from "react";
import Button from "../../components/button";
import { LuPlus } from "react-icons/lu";
import { useCategories } from "../../context/categoryCotext";

const Categories = () => {
  const [openCategoryModal, setOpenCategoryModal] = useCategories();
  return (
    <div className=" p-4">
      <div className=" flex justify-between items-start flex-wrap gap-2 md:gap-3 mb-3 md:mb-3">
        <h1 className=" text-lg md:text-2xl font-semibold">Categories</h1>
        <Button onClick={() => setOpenCategoryModal(true)}>
          <LuPlus className=" mr-2 text-xl" />
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default Categories;
