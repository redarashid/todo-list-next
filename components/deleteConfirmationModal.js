import React from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import Modal from "./modal";
import Button from "./button";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete, itemName }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl text-orange-500 font-bold inline-flex gap-3 mb-3 items-center">
          <IoAlertCircleOutline /> Delete Confirmation
        </h2>
        <p className="mb-4">Are you sure you want to delete "{itemName}"?</p>
        <div className="flex justify-end gap-4">
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
