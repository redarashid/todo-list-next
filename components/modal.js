"use client";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center md:items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-4 w-full md:w-96 md:rounded-xl relative">
        <div className="flex justify-end absolute top-5 end-5">
          <button
            onClick={onClose}
            className="text-gray-500 text-xl hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
