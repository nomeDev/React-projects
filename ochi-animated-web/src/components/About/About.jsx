import React from 'react';

export default function About() {
    return (
        <div className="w-full py-[5vh]  rounded-tl-3xl rounded-tr-3xl text-black bg-[#CDEA68]">
            <div className="text w-full px-5 pb-[3vh] max-w-[85%] lg:text-[50px] text-[5vw] leading-[100%] tracking-tighter font-[Roboto]">
                Ochi is a strategic partner for fast-grow­ing tech
                businesses that need to raise funds, sell prod­ucts,
                ex­plain com­plex ideas, and hire great peo­ple.
            </div>
            {/* <div className="line w-full h-[2px] bg-gray-400"></div> */}

            <div className="centeral w-full flex border-b-2 border-t-2 border-gray-400 justify-between flex-wrap md:flex-row flex-col p-5">
                <div className=" md:w-[25%]">
                    <p className="mb-10 md:mb-0 font-semibold">
                        What you can expect:
                    </p>
                </div>
                <div className="md:w-[30%]">
                    <p className="mb-5">
                        We create tailored presentations to help you
                        persuade your colleagues, clients, or
                        investors. Whether it’s live or digital,
                        delivered for one or a hundred people.
                    </p>
                    <p className="mt-5 ">
                        We believe the mix of strategy and design
                        (with a bit of coffee) is what makes your
                        message clear, convincing, and captivating.
                    </p>
                </div>
                <div className="links md:w-[25%] underline">
                    <p className="py-5 no-underline mt-5 md:mt-0 md:pl-5">
                        S:
                    </p>
                    <ul>
                        <li>Instagram</li>
                        <li>Behance</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>

            <div className="approach w-full p-6 flex justify-between flex-wrap">
                <div className="md:w-[38%] mb-10 md:mb-0">
                    <h2 className="text-[45px] font-semibold md:text-[5vw] lg:text-[55px] mb-10">
                        Our Approach:
                    </h2>
                    <button className="py-[10px] px-5 rounded-full text-white bg-black">
                        Reed More{' '}
                    </button>
                </div>
                <div className="w-full md:w-[50%] rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full"
                        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
