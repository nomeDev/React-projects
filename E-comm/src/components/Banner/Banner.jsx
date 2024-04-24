import React from 'react';

export default function Banner() {
    return (
        <div className="w-full h-full overflow-hidden bg-gradient-to-r from-purple-700 to-indigo-800">
            <div className="container w-full h-full max-w-[1400px] mx-auto flex gap-8 items-center justify-center overflow-hidden">
                <div className="content w-[35%] text-center text-white">
                    <h1 className="text-[130px] leading-[100%] font-[600] mb-6">
                        SALES
                    </h1>
                    <p className="text-[16px] leading-[100%] text-center mb-3">
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Harum sit totam iste ad ut
                        repellat.
                    </p>
                    <div className="btn mt-8">
                        <button className="text-lg py-2 px-3 border-white border-2 mr-3">
                            Read More
                        </button>
                        <button className="text-lg py-2 px-3 border-white border-2 bg-white ml-3">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="leftImg w-[35%]">
                    <img
                        src="./banner-img.png"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
