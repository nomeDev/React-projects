import React from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Products({ title }) {
  return (
    <div className="">
      <h1 className="text-3xl p-2 font-bold bg-white">{title}</h1>
      <div className="products w-full flex flex-wrap justify-center lg:justify-between gap-7 xsm:gap-4 sm:gap-7 md:gap-7 py-6 xsm:px-1 px-2 sm:px-3 lg:px-0">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
