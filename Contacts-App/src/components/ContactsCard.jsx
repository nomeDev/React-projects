import React, { useEffect } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { db } from '../config/firbase';

import {
  deleteDoc,
  doc,
} from 'firebase/firestore';
export default function ContactsCard({
  contact,
}) {
  const deletContact = async (id) => {
    try {
      await deleteDoc(
        doc(db, 'contacts', id)
      );
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };
  useEffect(() => {
    //
  }, [deletContact]);

  return (
    <div className='bg-yellow flex items-center py-2 rounded-lg   pl-1 justify-between'>
      <div className='flex gap-2 items-center'>
        <HiOutlineUserCircle className='text-orange text-5xl' />
        <div className='leading-5'>
          <h2 className='text-[18px] text-left capitalize leading-5 font-medium'>
            {contact.name}
          </h2>
          <p className='text-[15]'>
            {contact.email}
          </p>
        </div>
      </div>
      <div className='flex text-4xl gap-2'>
        <RiEditCircleLine className='cursor-pointer' />
        <IoMdTrash
          onClick={() =>
            deletContact(contact.id)
          }
          className='text-orange cursor-pointer'
        />
      </div>
    </div>
  );
}
