import React from "react";

export default function Category() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-4 md:py-10 overflow-x-auto">
      <ul className="w-full md:flex  justify-around gap-2 hidden ">
        <li className="w-[200px] shadow-xl relative z-1 flex items-center justify-center h-[120px] bg-red-100 overflow-hidden ">
          <div className="bg w-full h-full z-0 bg-[url(./images/category/cat-1.jpg)] bg-center bg-cover hover:scale-[1.2] duration-150"></div>
        </li>
        <li className="w-[200px] shadow-xl flex items-center justify-center h-[120px] bg-red-100 overflow-hidden">
          <div className="bg w-full h-full z-0 bg-[url(./images/category/cat-2.jpg)] bg-center bg-cover hover:scale-[1.2] duration-150"></div>
        </li>
        <li className="w-[200px] shadow-xl flex items-center justify-center h-[120px] bg-red-100 overflow-hidden">
          <div className="bg w-full h-full z-0 bg-[url(./images/category/cat-3.jpg)] bg-center bg-cover hover:scale-[1.2] duration-150"></div>
        </li>
        <li className="w-[200px] shadow-xl flex items-center justify-center h-[120px] bg-red-100 overflow-hidden">
          <div className="bg w-full h-full z-0 bg-[url(./images/category/cat-4.jpg)] bg-center bg-cover hover:scale-[1.2] duration-150"></div>
        </li>
      </ul>
      {/* --------------------------------------- */}
      <ul className="w-fit md:hidden mx-auto flex gap-3 px-4  items-center justify-center">
        <li className="py-1 px-2 bg-cyan-900 hover:bg-cyan-800 shadow-md cursor-pointer text-white font-semibold rounded text-nowrap ">
          HeadPhones
        </li>
        <li className="py-1 px-2 bg-cyan-900 hover:bg-cyan-800 shadow-md cursor-pointer text-white font-semibold rounded text-nowrap ">
          Bluethooth Speakers
        </li>
        <li className="py-1 px-2 bg-cyan-900 hover:bg-cyan-800 shadow-md cursor-pointer text-white font-semibold rounded text-nowrap ">
          Smart Watches
        </li>
        <li className="py-1 px-2 bg-cyan-900 hover:bg-cyan-800 shadow-md cursor-pointer text-white font-semibold rounded text-nowrap ">
          Wireless Earpods
        </li>
      </ul>
    </div>
  );
}
