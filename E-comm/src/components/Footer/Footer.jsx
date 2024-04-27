import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto h-full bg-white flex items-start justify-between flex-col flex-wrap sm:flex-row gap-4 p-2 py-6 md:p-5 md:py-8 flex-1">
          {/* <div className="left w-[60%] flex items-center justify-between"> */}
          <div className="about w-full sm:w-[30%] ">
            <h1 className="text-lg text black font-semibold">
              About
            </h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Veritatis libero omnis quaerat sint quod, necessitatibus
            non facere eaque eligendi placeat.
          </div>
          <div className="contact flex-1 flex flex-col gap-2">
            <h1 className="text-lg text black font-semibold">
              Contact
            </h1>
            <div className=" flex gap-2 ">
              <span className="mt-[6px]">
                <FaLocationArrow />
              </span>
              Example Rd. example. 123456
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <MdOutlinePhoneIphone />
              </span>
              03330123456
            </div>
            <div className=" flex gap-2 items-center">
              <span>
                <CiMail />
              </span>
              exm@example.com
            </div>
          </div>
          {/* </div> */}
          {/* <div className="right flex items-center justify-between w-[40%]"> */}
          <div className="categories flex-1 list-none">
            <h1 className="text-lg text black font-semibold">
              Categories
            </h1>
            <li>Headphones</li>
            <li>Smart Watches</li>
            <li>Bluetooth speaker</li>
            <li>Projector</li>
          </div>
          <div className="pages flex-1 list-none">
            <h1 className="text-lg text black font-semibold">
              Pages
            </h1>
            <li>Home</li>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </div>
          {/* </div> */}
        </div>
        <div className="text-center text-[12px] sm:text-[15px] text-gray-800 bg-gray-200 py-1">
          Copyright © 2024 nomishop.com All rights reserved
        </div>
      </div>
    </div>
  );
}
