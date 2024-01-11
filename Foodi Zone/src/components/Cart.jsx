import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { GrCart } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [isCart, setIsCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  if (!isCart)
    return (
      <div
        onClick={() => setIsCart(true)}
        className={`fixed bottom-20 p-2 sm:p-3 shadow-lg z-[10] cursor-pointer bg-white rounded-full  ${
          cartItems.length > 0 && 'anime'
        }`}>
        <span className='absolute text-[12px] sm:text-sm top-0 right-0 sm:top-2 sm:right-2 w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center bg-orange-400 text-white text-sm rounded-xl px-1.5'>
          {totalQty}
        </span>
        <GrCart
          className={`text-2xl sm:text-4xl text-orange-600 shadow-sm cursor-pointer `}
        />
      </div>
    );
  else
    return (
      <div className='fixed z-20 shadow-2xl p-1 top-0   w-full  sm:w-[300px] md:w-[300px] lg:w-[350px] xl:w-[350px] h-screen bg-white'>
        <div className='w-full overflow-hidden  h-full relative'>
          <div className=' text-xl flex items-center  px-3 py-1 justify-between'>
            <h3>My order</h3>
            <MdOutlineClose
              onClick={() => setIsCart(false)}
              className='text-4xl cursor-pointer'
            />
          </div>

          <div className='cart  gap-2 my-2 p-1 overflow-x-auto scroll-p-0 w-full no-scrollbar h-[70%] z-0 flex flex-col'>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  qty={item.qty}
                />
              ))
            ) : (
              <h2 className='text-center text-xl'>
                {' '}
                Your cart is empty
              </h2>
            )}
          </div>

          <div className='absolute z-10 bg-white   bottom-0 left-0 w-full'>
            <p className='font-bold'>
              Items:{' '}
              <span className='text-yellow-600 text-lg'>
                {totalQty}
              </span>
            </p>
            <p className='font-bold'>
              Total Amount:{' '}
              <span className='text-yellow-600 ml-2 text-xl'>
                RS {totalAmount}
              </span>
            </p>
            <button
              onClick={() =>
                cartItems.length > 0 && navigate('/success')
              }
              className='w-full my-2 bg-yellow-600 text-white py-2 rounded'>
              CheckOut
            </button>
          </div>
        </div>
      </div>
    );
}
