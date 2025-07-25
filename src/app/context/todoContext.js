"use client";

import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const todoContext = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", [])

  return <div></div>;
};

export default todoContext;
