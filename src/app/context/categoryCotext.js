"use client";

import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CategoryContext = createContext();

const defaultCategories = [
  { id: 1, name: "Work", color: "D3D3D3" },
  { id: 2, name: "Personal", color: "#FF5733" },
];

const defaultColors = ["#D3D3D3", "#FF5733", "#33FF57", "#3357FF", "#FFC233"];

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useLocalStorage("categories", []);
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [newCategory, setNewCategory] = useState({
    name: "",
    color: "#D3D3D3",
  });
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  // Add default categories if categories array is empty
  useEffect(() => {
    if (categories.length === 0) {
      setCategories(defaultCategories);
    }
  }, [categories, setCategories]);

  // Add a new Category
  const addCategory = () => {
    if (!newCategory?.name?.trim()) {
      toast.error("Category name is required");
      return;
    }

    const newCategoryData = {
      id: Date.now(),
      name: newCategory?.name.trim(),
      color: newCategory?.color,
    };

    const found = categories.some(
      (category) =>
        category.name.toLowerCase() === newCategoryData.name.toLowerCase()
    );
    if (found) {
      toast.error(" Category already exists!");
      return;
    }

    const updatedCategories = [...categories, newCategoryData];
    toast.success("Category already successfully!");
    setCategories(updatedCategories);
    setNewCategory({
      name: "",
      color: "#D3D3D3",
    });
    setOpenCategoryModal(false);
  };

  // Update an existing category
  const updateCategory = () => {
    if (!editCategory) {
      toast.error("No category selected for editing.");
      return;
    }

    // check if the category is default
    if (defaultCategories.some((cat) => cat.id === editCategory.id)) {
      toast.error(" You connot edite defualt categories");
      return;
    }

    const found = categories.some(
      (category) =>
        category.name.toLowerCase() === editCategory.name.toLowerCase() &&
        category.id !== editCategory.id
    );
    if (found) {
      toast.error("Ctegory already exists!");
      return;
    }

    const updatedCategories = categories.map((category) =>
      category.id === editCategory.id ? editCategory : category
    );

    setCategories(updatedCategories);
    toast.success("Ctegory updated successfully!");
    setOpenCategoryModal(false);
    setEditCategory(null);
  };

  // Remove a category
  const removeCategory = () => {
    if (defaultCategories.some((cat) => cat.id === deleteCategory.id)) {
      toast.error("You connot delete default categories");
      return;
    }
    const name = deleteCategory?.name;
    const filteredCategories = categories.filter(
      (category) => category.name !== name
    );
    toast.success(`Category deleted successfully!`);
    setCategories(filteredCategories);
    setDeleteCategory(null);
  };

  const getCategoryById = (id) => {
    if (id) {
      const foundCategory = categories.find((category) => category.id === id);
      return foundCategory;
    }
    return null;
  };

  // Toggle category completion status
  const toggleTodo = (id) => {
    const updatedCategories = categories.map((category) =>
      category.id === id
        ? { ...category, completed: !category.completed }
        : category
    );
    setCategories(updatedCategories);
    const task = updatedCategories.find((task) => task.id === id);
    toast.success(task?.completed ? "Marked as completed." : "Marked as Todo");
  };

  return (
    <CategoryContext.Provider
      value={{
        newCategory,
        setNewCategory,
        defaultColors,
        categories,
        addCategory,
        updateCategory,
        editCategory,
        setEditCategory,
        openCategoryModal,
        setOpenCategoryModal,
        removeCategory,
        deleteCategory,
        setDeleteCategory,
        getCategoryById,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
