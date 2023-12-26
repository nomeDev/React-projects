// import { createPortal } from "react-dom"
// import React from "react"

import { Children } from 'react';
import { RiCloseFill } from 'react-icons/ri';

export default function Modal({
  isOpen,
  onClose,
  children,
}) {
  return (
    <>
      {isOpen && (
        <>
          <div className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-3 rounded-lg'>
            <div className=' flex justify-end '>
              <RiCloseFill
                onClick={onClose}
                className='text-3xl cursor-pointer hover:text-b text-gray '
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className='backdrop-blur z-40 h-screen w-full absolute top-0 left-0 '
          />
        </>
      )}
    </>
  );
}
