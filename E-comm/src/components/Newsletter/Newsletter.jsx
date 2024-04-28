import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div>
      <div
        className={`w-full min-h-[40vh] bg-gray-400 bg-[url(./images/newsletter-bg.jpeg)] bg-center bg-cover flex items-center justify-center`}>
        <div className="container w-full text-center py-7 sm:py-2">
          <p className="text-zinc-800">NEWSLETTER</p>
          <h3 className="text-lg md:text-2xl font-bold my-3">
            SIGN UP FOR LATEST UPDATES AND OFFERS
          </h3>
          <div className="input">
            <input
              className="px-2 py-[3.4px] border-[1px] border-gray-300 outline-none w-[90%]  sm:w-[250px] "
              placeholder="Email Address"
              type="text"
            />
            <button className="bg-purple-600 text-white px-3 py-1 my-2 sm:my-0 border-[1] border-purple-500 h-full">
              Subscribe
            </button>
          </div>
          <p className="text-zinc-700 my-3">
            Will be used in accordance with out Privacy Policy
          </p>
          <div className="icons text-[18] flex items-center justify-center gap-2">
            <div className="w-[35px] h-[35px] rounded-full bg-zinc-800 flex items-center justify-center">
              <FaFacebookF className="fill-white bg-zinc-800" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-zinc-800 flex items-center justify-center">
              <FaLinkedinIn className="fill-white bg-zinc-800" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-zinc-800 flex items-center justify-center">
              <FaTwitter className="fill-white bg-zinc-800" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-zinc-800 flex items-center justify-center">
              <FaInstagram className="fill-white bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
