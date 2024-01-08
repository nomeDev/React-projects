import React, { useEffect, useState } from 'react';
import cardsData from '../assets/data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/categorySlice';

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const disipatch = useDispatch();
  const defaultSelected = useSelector(
    (state) => state.category.category
  );
  const listUniqCategories = () => {
    const uniqCategories = [
      ...new Set(cardsData.map((food) => food.category)),
    ];
    setCategories(uniqCategories);
  };
  useEffect(() => {
    listUniqCategories();
  }, []);

  return (
    <div className=' text-center'>
      <div className='flex gap-2 items-center py-3 my-3 justify-start sm:justify-center  snap-x  overflow-x-auto lg:overflow-x-hidden'>
        <button
          onClick={() => {
            disipatch(setCategory('All'));
          }}
          className={`bg-gray-300  text-sm md:text-lg px-2 md:px-4 py-1 rounded hover:bg-orange-400 hover:text-white ${
            defaultSelected === 'All' && 'bg-orange-600 text-white'
          }`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => {
                disipatch(setCategory(category));
              }}
              key={index}
              className={`bg-gray-300 text-sm md:text-lg px-2 md:px-4 py-1 rounded hover:bg-orange-400 hover:text-white ${
                defaultSelected === category &&
                'bg-orange-600 text-white'
              }`}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
