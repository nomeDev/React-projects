import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";

export default function Home() {
  return (
    <div className="h-fit w-full max-w-[1200px] mx-auto">
      <Banner />
      <Category />
      <Products />
    </div>
  );
}
