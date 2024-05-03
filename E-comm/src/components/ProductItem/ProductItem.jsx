import React from "react";

export default function ProductItem() {
  return (
    <div className="w-[250px] bg-zinc-400">
      <div className="">
        <img src="./images/earbuds-prod-1.webp" alt="img" />
      </div>
      <div className="info">
        <p className="name">Lorem ipsum dolor sit amet.</p>
        <p className="price">RS 399</p>
      </div>
    </div>
  );
}
