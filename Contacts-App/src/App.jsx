import './App.css';
import Navbar from './components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { db } from './config/firbase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactsCard from './components/ContactsCard';
import Modal from './components/Modal';
import AddContact from './components/addContact';
import useDisclose from './hooks/useDisclose';
function App() {
  const [contacts, SetContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map(
            (doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            }
          );
          SetContacts(contactsList);
          return contactsList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContects = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, 'contacts');
    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterdContacts = contactsList.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes.toLowerCase()
      );

      SetContacts(filterdContacts);

      return filterdContacts;
    });
  };

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
            onChange={(e) => filterContects(e)}
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
      <AddContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </div>
  );
}

export default App;
