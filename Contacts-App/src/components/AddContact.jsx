import React from 'react';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../config/firbase';
import useDisclose from '../hooks/useDisclose';
import { toast } from 'react-toastify';

export default function AddContact({
  isOpen,
  onClose,
  isUpdate,
  contact,
}) {
  let { setIsOpen } = useDisclose();

  const addContact = async (contact) => {
    try {
      const contactRef = collection(
        db,
        'contacts'
      );
      await addDoc(contactRef, contact);
      onClose();
      toast.success(
        'Contact Added Successfully'
      );
    } catch (error) {
      console.log(error);
    }
    // window.location.reload();
  };

  const updateContact = async (
    contact,
    id
  ) => {
    try {
      const contactRef = doc(
        db,
        'contacts',
        id
      );
      await updateDoc(contactRef, contact);
      onClose();
      toast.success(
        'Contact Updated Successfully'
      );
    } catch (error) {
      console.log(error);
    }
    // window.location.reload();
    console.log('updateed');
  };

  return (
    <div className='text-left'>
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: '',
                  email: '',
                }
          }
          onSubmit={(values) => {
            isUpdate
              ? updateContact(
                  values,
                  contact.id
                )
              : addContact(values);
            setIsOpen(false);
          }}>
          <Form className='flex flex-col gap-1'>
            <div className='flex  flex-col gap-1'>
              <label htmlFor='name'>
                Name:
              </label>
              <Field
                autoComplete='none'
                name='name'
                className='h-10 px-2 border w-full'
                required
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email'>
                Email:
              </label>
              <Field
                autoComplete='none'
                type='email'
                name='email'
                className='h-10 px-2 border w-full'
                required
              />
            </div>
            <button
              className='bg-orange mt-2 self-end px-3 py-1.5 border'
              type='submit'>
              {isUpdate ? 'Update ' : 'Add '}
              Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
