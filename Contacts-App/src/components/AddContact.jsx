import React from 'react';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import {
  addDoc,
  collection,
} from 'firebase/firestore';
import { db } from '../config/firbase';
export default function AddContact({
  isOpen,
  setIsOpen,
  onClose,
}) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(
        db,
        'contacts'
      );
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='text-left'>
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          onSubmit={(values) => {
            addContact(values);
            setIsOpen(false);
            window.location.reload();
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
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
