import React from 'react';
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import Landing from '../components/Landing';
import FoodItems from '../components/FoodItems';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <Landing />
      <CategoryMenu />
      <FoodItems />
      <Cart />
      <Footer />
    </div>
  );
}
