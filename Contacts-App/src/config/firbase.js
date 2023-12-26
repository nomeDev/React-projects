// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX6Q-n2z413Dt3WQrd3AgwXJNUhsazHqU",
  authDomain: "vite-contact-919b5.firebaseapp.com",
  projectId: "vite-contact-919b5",
  storageBucket: "vite-contact-919b5.appspot.com",
  messagingSenderId: "735534481994",
  appId: "1:735534481994:web:45d8d82320de8e6b8e5cb3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
