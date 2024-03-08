import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-800 pt-16 flex flex-col justify-between">
            <div className="terxtStrucure mt-40 xl:mt-32 px-10">
                {['we create', 'eye opening', 'presentations'].map(
                    (item, index) => (
                        <div
                            key={index}
                            className={`masker w-fit md:leading-[5vw] 
                               flex items-center 
                            `}>
                            {index === 1 && (
                                <div className="rounded-md mr-2 w-[11vw] md:w-[9vw] h-[45px] md:h-[49px] lg:h-[67px] 2xl:h-[5rem] 2xl:mt-3 mt-2 md:mt-[0.45rem] lg:mt-[.6rem] bg-red-400"></div>
                            )}
                            <h1 className="uppercase text-[4rem] leading-[90%] lg:text-8xl md:text-[70px] 2xl:text-[7.1rem] tracking-tighter font-semibold md:leading-[90%] lg:leading-[90%] ">
                                {item}
                            </h1>
                        </div>
                    )
                )}

                {/* <div className="marker">
                    <h1 className="uppercase text-7xl lg:text-9xl md:text-8xl leading-[5.5vw] tracking-tighter font-semibold">
                        eye opeining
                    </h1>
                </div>
                <div className="marker">
                    <h1 className="uppercase text-7xl lg:text-9xl md:text-8xl leading-[5.5vw] tracking-tighter font-semibold">
                        PRESENTATIONS
                    </h1>
                </div> */}
            </div>
            <div className="w-full h-[20vh] mt-10 ">
                <div className="flex w-full p-4 px-8 justify-between items-center border-t-[1px]  border-zinc-400">
                    <p className=" ">For public private companies </p>
                    <p>From the first pitch to IPO</p>
                    <div className="flex items-center gap-2 uppercase">
                        <button className="py-1 px-5 uppercase rounded-full border-whte border-[2px] ">
                            Start the Project
                        </button>
                        <div className=" text-white p-2 rounded-full border-[1px] border-white rotate-[315deg]">
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
