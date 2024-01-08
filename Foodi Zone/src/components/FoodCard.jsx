import React from 'react';
import { FaStar } from 'react-icons/fa';
// import image from '';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

function FoodCard({
  name,
  imgUrl,
  price,
  desc,
  id,
  category,
  rating,
  handleTost,
}) {
  const dispatch = useDispatch();

  return (
    <div key={id}>
      <div className='card  justify-between overflow-hidden w-[180px] sm:w-[242px] h-[280px] sm:h-[350px] shadow-lg bg-white p-2 flex item-center  rounded-lg flex-col'>
        <img
          src={imgUrl}
          className=' h-[40%] sm:h-[50%] hover:scale-110 transition-all ease-in 0.2s z-0'
          alt='image'
        />

        <div className='flex z-10 text-sm sm:text-lg justify-between font-bold text-orange-600'>
          <p className='text-black'>{name}</p>
          <p>
            Rs<span>{price}</span>
          </p>
        </div>
        <p className='leading-4 text-sm'>{desc.slice(0, 70)}.</p>
        <div className='flex w-full mt-4 justify-between'>
          <div className='flex items-center gap-1'>
            <FaStar />
            <span>{rating}</span>
          </div>

          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id,
                  name,
                  imgUrl,
                  price,
                  rating,
                  qty: 1,
                })
              );
              handleTost(name);
            }}
            className='bg-orange-600 text-white  py-1 px-2 rounded hover:bg-orange-700'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
