import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-fit py-6 md:h-[calc(100vh-93px)] overflow-hidden bg-gradient-to-r from-purple-700 to-indigo-800">
      <div className="container w-full h-full max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row gap-4 sm:gap-12 items-center justify-center overflow-hidden">
        <div className="content w-[100%] md:w-[35%] text-center text-white">
          <h1 className="lg:text-[130px] md:text-[100px] text-[60px] sm:text-[110px] leading-[100%] font-[600] mb-6">
            SALES
          </h1>
          <p className="text-[16px] leading-[100%] text-center mb-3 px-6 md:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum sit totam iste ad ut repellat.
          </p>
          <div className="btn mt-8">
            <button className="text-[16px] md:text-lg py-1 md:py-2 px-3 border-white border-2 mr-1 md:mr-3 hover:bg-white hover:text-black transition">
              Read More
            </button>
            <button className="text-[16px] md:text-lg py-1 md:py-2 px-3 border-white border-2 text-black transition bg-white ml-1 md:ml-3 hover:bg-transparent hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="leftImg w-[50%] xsm:w-[45%] sm:w-[35%] md:w-[30%]">
          <img
            src="./images/banner-img.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
