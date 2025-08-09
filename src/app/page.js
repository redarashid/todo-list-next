"use client";

import Button from "./components/button";
import { LuPlus } from "react-icons/lu";
import TodoList from "./components/todos/todoList";
import { useTodos } from "./context/todoContext";
import Modal from "./components/modal";
import AddTodoForm from "./components/todos/addTodoForm";
import DeleteConfirmationModal from "./components/deleteConfirmationModal";

export default function Home() {
  // Home component
  const {
    openTodoModal,
    setOpenTodoModal,
    setEditTodo,
    deleteTodo,
    setDeleteTodo,
    removeTodo,
  } = useTodos();
  const closeTodoModal = () => {
    setOpenTodoModal(false);
    setEditTodo(null);
    setDeleteTodo(null);
  };

  return (
    <div className=" p-4">
      <div className=" flex flex-wrap gap-4 md:gap-3 justify-between items-center mb-3 md:mb-4">
        <h1 className="text-lg md:text-2xl font-semibold">My Tasks</h1>
        <Button onClick={() => setOpenTodoModal(true)}>
          <LuPlus className="mr-2 text-xl" />
          Add Task
        </Button>
      </div>
      <TodoList />

      <Modal isOpen={openTodoModal} onClose={closeTodoModal}>
        <AddTodoForm onClose={closeTodoModal} />
      </Modal>

      <DeleteConfirmationModal // Delete confirmation modal
        itemName={deleteTodo?.title} // Item name
        onConfirm={removeTodo} // Remove todo
        onClose={closeTodoModal} // Close modal
        isOpen={deleteTodo} // Open modal
      />
    </div>
  );
}
