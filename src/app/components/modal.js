"use client";

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className=" fixed inset-0 z-50 flex md:items-center justify-center bg-black bg-opacity-50">

    </div>
  );
};

export default Modal;
