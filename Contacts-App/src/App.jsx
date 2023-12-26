import './App.css';
import Navbar from './components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from './config/firbase';

import ContactsCard from './components/ContactsCard';
import Modal from './components/Modal';
import AddContact from './components/addContact';
function App() {
  const [contacts, SetContacts] = useState(
    []
  );
  const [isOpen, setIsOpen] =
    useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(
          db,
          'contacts'
        );

        const contactsSnapshot =
          await getDocs(contactsRef);
        const contactsList =
          contactsSnapshot.docs.map(
            (doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            }
          );
        SetContacts(contactsList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className='max-w-[400px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-1 items-center'>
        <div className='flex relative flex-grow items-center'>
          {/* <FiSearch className=' pr-1 left-1 text-white text-3xl absolute ' /> */}
          <input
            type='text'
            className='rounded-md border  text-white pl-9 bg-gray border-white bg-transparent h-10 flex-grow '
            placeholder='Search'
          />
        </div>

        <FaPlusCircle
          onClick={onOpen}
          className='text-4xl text-white cursor-pointer'
        />
      </div>
      <div className='pt-8 flex flex-col gap-3'>
        {contacts.map((contact) => (
          <ContactsCard
            contact={contact}
            key={contact.id}
          />
        ))}
      </div>
      <AddContact
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
}

export default App;
