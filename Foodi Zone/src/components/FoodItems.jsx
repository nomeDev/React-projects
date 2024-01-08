import React from 'react';
import FoodCard from './FoodCard';
import cardData from '../assets/data/data';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

function FoodItems() {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleTost = (name) =>
    toast.success(` ${name} added to cart`);
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex gap-6 flex-wrap items-center justify-center lg:justify-between mb-10'>
        {cardData
          .filter((item) => {
            if (category === 'All') {
              // if (search > 0)
              return item.name
                .toLowerCase()
                .includes(search.toLowerCase());
              console.log(search);
            } else {
              // if (search > 0)
              return (
                category === item.category &&
                item.name.toLowerCase().includes(search.toLowerCase())
              );
            }
          })
          .map((card) => (
            <FoodCard
              key={card.id}
              id={card.id}
              imgUrl={card.img}
              name={card.name}
              price={card.price}
              desc={card.desc}
              category={card.category}
              rating={card.rating}
              handleTost={handleTost}
            />
          ))}
      </div>
    </>
  );
}

export default FoodItems;
