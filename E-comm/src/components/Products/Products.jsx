import React from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Products() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Popular Products</h1>
      <div className="products w-full flex flex-wrap justify-center gap-7">
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
