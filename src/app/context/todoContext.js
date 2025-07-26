"use client";

import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

const TodoContext = createContext();

export const todoContext = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", [])
  const [newTodo, setNewTodo] = useState({ title: "", description: "", categoryId: null, completed: false })
  const [openTodoModal, setOpenTodoModal] = useState(false)
  const [editeTodo, setEditeTodo] = useState(null)

  // Add Todo
  const addTodo = () => {
    if (!newTodo.title.trim()) {
      toast.error("Todo text is required.")
      return;
    }
    if (newTodo.categoryId) {
      toast.error("Category is required")
      return;
    }

    const newTodoData = {
      id: Date.now(), // Generate unique id
      title: newTodo.title.trim(), // Remove leading and trailing spaces
      description: newTodo.description.trim(), // Remove leading and trailing spaces
      categoryId: newTodo.categoryId, // category id
      completed: false // default value
    }
    setTodos([...todos, newTodoData]) // Add new todo to todos array
    setNewTodo({ title: "", description: "", categoryId: null, completed: false }) // Reset new todo
    toast.success("Todo added successfully!") // Show success message
    setOpenTodoModal(false) // Close modal
  }

  // Update Todo
  const updateTodo = () => {
    if (!editeTodo) { // If todo not found
      toast.error("Todo not found") // Show error message
      return;
    }
    const updatedTodo = todos.map((todo) => // Update Todo
      todo.id === editeTodo.id ? editeTodo : todo // If todo found update it
    )
    setTodos(updatedTodo) // Update todos array
    toast.success("Todo updated successfully!")
    setEditeTodo(null)
  }

  // Delete Todo
  const deleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filterTodo)
    toast.success("Todo deleted successfully!")
    setOpenTodoModal(false)
  }



  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, openTodoModal, setOpenTodoModal, editeTodo, setEditeTodo }}> // Provide value to all children
      {children}
    </TodoContext.Provider>

  )
};

export default todoContext;
