import React from "react";

export default function Product() {
  return (
    // public\images\watch-prod-3.webp
    <div>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="containers w-full h-[60vh] bg-gray-200 flex ">
          <div className="left w-[48%] h-full ">
            <img
              className="w-full"
              src="\images\watch-prod-3.webp"
              alt=""
            />
          </div>
          <div className="right-content w-[48%] flex flex-col gap-4 pt-3">
            <div className="head font-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt a officia laudantium cum ipsam?
            </div>
            <div className="price font-semibold text-xl">Rs:4499</div>
            <div className="desc text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo vero perferendis iure inventore sapiente libero
              minus tempore omnis accusantium, nostrum beatae eaque
              magnam totam placeat, incidunt animi? Quas accusamus
              labore veniam cumque, unde molestiae sint!
            </div>
            <div className="buttons flex">
              <div className="qunatity">
                <button className="p-3 border-white border-2 py-1">
                  -
                </button>
                <button className="p-2 border-white border-2 py-1 w-[55px]">
                  0
                </button>
                <button className="p-3 border-white border-2 py-1">
                  +
                </button>
              </div>
              <div className="addBtn">
                <button className="cart">ADD TO CART</button>
              </div>
            </div>
            <div className="categoryname">
              Category: <span>Smart Watches</span>
            </div>
            <div className="socilaLinks">
              Share: <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
