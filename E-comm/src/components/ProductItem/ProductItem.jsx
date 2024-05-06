import React from "react";

export default function ProductItem() {
  return (
    //working on responsive of product items
    <div className="w-[45%] sm:w-[200px] md:w-[250px] rounded-md shadow relative">
      <div className="overflow-hidden bg-zinc-100 h-[65%]">
        <img
          className="hover:scale-110 duration-100 h-full w-full object-contain"
          src="./images/earbuds-prod-1.webp"
          alt="img"
        />
      </div>
      <div className="name px-2 py-1">
        <p className="name text-sm text-black py-1">
          Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="price-btn w-full flex justify-between items-center bg-zinc-00  px-2 py-1 absolute bottom-0 right-0 ">
        <p className="price font-semibold">RS 399</p>
        <button className="bg-gray-700 hover:bg-gray-800 hover:translate-y-[2px] duration-75 text-sm py-2 px-2 rounded-md text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
