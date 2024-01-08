import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegPlusSquare } from 'react-icons/fa';
import { FaRegMinusSquare } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {
  remvoveFromCart,
  incrQty,
  decrQty,
} from '../redux/slices/CartSlice';

export default function CartItem({ name, id, qty, price, imgUrl }) {
  const dispatch = useDispatch();
  return (
    <div className='item shadow-md bg-white rounded-md flex justify-between p-1 items-center w-full '>
      <div className='flex gap-2'>
        <img className='w-[65px] h-[65px]' src={imgUrl} alt='' />
        <div className='flex flex-col justify-between '>
          <p>{name.slice(0, 12)}</p>
          <p className='text-yellow-600'>
            Rs: <span>{price}</span>
          </p>
        </div>
      </div>
      <div className='flex text-2xl items-end flex-col justify-between '>
        <MdDelete
          onClick={() => {
            dispatch(remvoveFromCart(id));
            toast(`'${name}' Removed`, {
              icon: '👋',
            });
          }}
          className='text-gray-500 cursor-pointer'
        />
        <div className='flex items-center gap-1 select-none'>
          <FaRegMinusSquare
            onClick={() => dispatch(decrQty(id))}
            className='text-yellow-600 cursor-pointer'
          />
          <span className='text-xl w-4 text-center text-gray-500'>
            {qty}
          </span>
          <FaRegPlusSquare
            onClick={() => dispatch(incrQty(id))}
            className='text-yellow-600 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
