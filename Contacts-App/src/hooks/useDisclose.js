import React, { useState } from 'react';

export default function useDisclose() {
  const [isOpen, setIsOpen] =
    useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return {
    onClose,
    onOpen,
    isOpen,
    setIsOpen,
  };
}
