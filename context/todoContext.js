"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    categoryId: null,
    completed: false,
  });
  const [editTodo, setEditTodo] = useState(null);
  const [deleteTodo, setDeleteTodo] = useState(null);
  const [openTodoModal, setOpenTodoModal] = useState(false);

  // Add a new todo
  const addTodo = () => {
    if (!newTodo.title.trim()) {
      toast.error("Todo text is required.");
      return;
    }
    if (!newTodo.categoryId) {
      toast.error("Category is required.");
      return;
    }

    const newTodoData = {
      id: Date.now(),
      title: newTodo.title.trim(),
      description: newTodo.description.trim(),
      categoryId: newTodo.categoryId,
      completed: false,
    };

    setTodos([...todos, newTodoData]);
    toast.success("Todo added successfully!");
    setNewTodo({
      title: "",
      description: "",
      categoryId: null,
      completed: false,
    });
    setOpenTodoModal(false);
  };

  // Update an existing todo
  const updateTodo = () => {
    if (!editTodo) {
      toast.error("No todo selected for editing.");
      return;
    }

    const updatedTodos = todos.map((todo) =>
      todo.id === editTodo.id ? editTodo : todo
    );

    setTodos(updatedTodos);
    toast.success("Todo updated successfully!");
    setEditTodo(null);
    setOpenTodoModal(false);
  };

  // Remove a todo
  const removeTodo = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== deleteTodo?.id);
    setTodos(filteredTodos);
    toast.success("Todo deleted successfully!");
    setDeleteTodo(null);
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    const task = updatedTodos.find((task) => task.id === id);
    toast.success(task?.completed ? "Marked as completed." : "Marked as Todo");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        addTodo,
        editTodo,
        setEditTodo,
        updateTodo,
        deleteTodo,
        setDeleteTodo,
        removeTodo,
        toggleTodo,
        openTodoModal,
        setOpenTodoModal,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
