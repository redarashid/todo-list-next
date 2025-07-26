import Button from "./components/button";
import { LuPlus } from "react-icons/lu";
import { useTodos } from "../app/context/todoContext";

export default function Home() {
  const { openTodoModal, setOpenTodoModal, setEditeTodo, deleteTodo, setDeleteTodo, removeTodo } = useTodos();
  const closeTodoModal = () => {
    setOpenTodoModal(false);
  };
  return (
    <div className=" p-4">
      <div className=" flex flex-wrap gap-4 md:gap-3 justify-between items-center mb-3 md:mb-4">
        <h1 className=" text-lg md:text-2xl font-semibold">My Tasks</h1>
        <Button onClick={() => setOpenTodoModal(true)}>
          <LuPlus className=" mr-2 text-xl" />
          Add Task
        </Button>
      </div>
    </div>
  );
}
