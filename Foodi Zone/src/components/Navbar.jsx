import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/searchSlice';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col py-3 gap-2 sm:flex-row  items-center justify-between w-full'>
      <div>
        <h1 className='text-2xl sm:text-4xl font-bold text-orange-600'>
          Foodi Zone<span className='text-[60px]'>.</span>
        </h1>
      </div>
      <div className='border-2 w-[98%] bg-white sm:w-[40%] md:w-[40%] lg:w-[30%] flex justify-between items-center border-orange-600 rounded-lg overflow-hidden'>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type='search'
          placeholder='Search'
          autoComplete='off'
          className='border-0 w-[80%] outline-none py-1 px-2 text-sm'
        />
        <button className='bg-orange-600  text-white h-full p-1 px-2'>
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
