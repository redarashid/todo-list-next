import React from "react";
import Modal from "./modal";
import { LuAlertCircle } from "react-icons/lu";
import Button from "./button";
const DeleteConfirmationModal = ({ itemName, isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" p-4">
        <h2 className=" text-lg text-orange-800 font-bold inline-flex gap-3 items-center">
          <LuAlertCircle />
        </h2>
        <p className=" mb-4">Are you sure you want to delete `{itemName}`?</p>
        <div className=" flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
