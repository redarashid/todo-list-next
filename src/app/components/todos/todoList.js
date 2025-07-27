import { LuCheckCircle } from "react-icons/lu";
import { useTodos } from "@/app/context/todoContext";
const TodoList = () => {
  const { todos } = useTodos();
  return (
    <>
      <ul className=" w-full max-auto space-y-2">
        {todos.map((todo) => {
          const categoryData = getCategoryById(todo?.categoryId); // Get category data
          return (
            <li
              key={todo.id} // Unique key
              className="group hover:relative flex items-center gap-3 justify-between p-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-lg"
            >
              <div className=" flex items-center gap-0 md:gap-4">
                <div // Check icon
                  className={
                    todo.completed
                      ? " absolute md:static left-1 text-green-500 hidden md:block"
                      : " absolute md:static left-1 text-green-400 hidden md:block"
                  }
                >
                  <LuCheckCircle />
                </div>
                <div className="flex-grow space-y-1 flبex flex-col justify-start items-start">
                  {categoryData && ( // Category
                    <div
                      className=" px-2 mb-1 text-sm py-1 inline-flex"
                      style={{ backgroundColor: categoryData?.color }}
                    >
                      <span
                        style={{ color: getTextColor(categoryData?.color) }}
                      >
                        {categoryData?.color}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
