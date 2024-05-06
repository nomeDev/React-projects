import React from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Products() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold bg-white">
        Popular Products
      </h1>
      <div className="products w-full flex flex-wrap justify-center lg:justify-between gap-7 py-6 px-3 lg:px-0">
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
