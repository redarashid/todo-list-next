"use client";

import Modal from "@/components/modal";
import Button from "@/components/button";
import { LuPlus } from "react-icons/lu";
import CategoryList from "@/components/todos/categoryList";
import { useCategories } from "@/context/categoryContext";
import DeleteConfirmationModal from "@/components/deleteConfirmationModal";
import AddEditCategoryForm from "@/components/todos/addEditCategoryForm";

const Home = () => {
  const {
    openCategoryModal,
    setOpenCategoryModal,
    setEditCategory,
    deleteCategory,
    setDeleteCategory,
    removeCategory,
  } = useCategories();

  const closeCategoryModal = () => {
    setOpenCategoryModal(false);
    setEditCategory(null);
    setDeleteCategory(null);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 md:gap-3 justify-between items-start mb-3 md:mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">Categories</h1>
        <Button onClick={() => setOpenCategoryModal(true)}>
          <LuPlus className="mr-2 text-xl" /> Add Category
        </Button>
      </div>

      <CategoryList />

      <Modal isOpen={openCategoryModal} onClose={closeCategoryModal}>
        <AddEditCategoryForm onClose={closeCategoryModal} />
      </Modal>

      <DeleteConfirmationModal
        itemName={deleteCategory?.name}
        isOpen={deleteCategory}
        onClose={closeCategoryModal}
        onDelete={removeCategory}
      />
    </div>
  );
};

export default Home;
