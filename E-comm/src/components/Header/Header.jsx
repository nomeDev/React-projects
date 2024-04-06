import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
        },
        {
            name: 'Category',
            slug: '/category/:id',
        },
        {
            name: 'Products',
            slug: '/product/:id',
        },
    ];
    useEffect(() => {
        isMenuOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'scroll');
    }, [isMenuOpen]);

    return (
        <div className="w-full border-b-2 bg-zinc-800 border-black text-white">
            <header className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-3 py-3 md:px-10 md:py-5  z-10  relative">
                <div className="logo font-bold text-xl sm:text-3xl lg:text-4xl">
                    NOMI <span className="font-normal">SHOP</span>
                </div>
                <nav>
                    <ul
                        className={`hidden sm:flex items-center  pb-0 border-b-2 border-black sm:border-0 sm:p-0   sm:w-auto sm:gap-4  sm:static   md:gap-5 lg:gap-11 text-[18px] z-0 duration-150 sm:translate-y-0  ${
                            isMenuOpen
                                ? 'top-12 opacity-100'
                                : 'translate-y-[-100%] opacity-'
                        }`}>
                        {navItems.map((item, i) => (
                            <NavLink
                                className={({ isActive }) => `
                                    ${
                                        isActive
                                            ? 'text-red-400'
                                            : 'text-whtie'
                                    } 
                                       w-full  p-3  sm:hover:underline underline-offset-4   ${
                                           i === 2
                                               ? 'border-0'
                                               : 'border-b-2'
                                       } sm:border-0 border-black`}
                                to={item.slug}
                                key={item.name}>
                                {item.name}
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex sm:hidden items-center ">
                    Menu{' '}
                    <span
                        className={`text-xl1 ease duration-100 ${
                            isMenuOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <IoIosArrowDown />{' '}
                    </span>
                </button>
                <div className="icons flex text-[28px] gap-7 justify-end w-auto md:w-[25%] ">
                    <IoSearch className="cursor-pointer md:block hidden" />
                    <div className="relative">
                        <MdOutlineShoppingCart className="cursor-pointer" />
                        <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-blue-800 rounded-full text-white text-[14px] text-center leading-[18px]">
                            0
                        </span>
                    </div>

                    <div className="relative md:block hidden">
                        <FaRegHeart className="cursor-pointer" />
                        <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-blue-800 rounded-full text-white text-[14px] text-center leading-[18px]">
                            0
                        </span>
                    </div>
                </div>
            </header>
            <div
                className={` menu overflow-hidden absolute top-0 left-0 w-full min-h-[calc(100vh)] bg-yellow-300 ${
                    isMenuOpen ? 'block sm:hidden' : 'hidden'
                } `}>
                <ul
                    className={`menu flex w-full sm:hidden flex-col  items-center  pb-0 border-b-2 border-black sm:border-0    sm:w-auto   absolute top-12 left-[50%] -translate-x-[50%] sm:translate-x-0 sm:static bg-amber-200  text-[18px] z-0 duration-150 sm:translate-y-0  ${
                        isMenuOpen
                            ? 'top-12 opacity-100'
                            : 'translate-y-[-100%] opacity-'
                    }`}>
                    {navItems.map((item, i) => (
                        <NavLink
                            className={({ isActive }) => `
                                    ${
                                        isActive
                                            ? 'text-red-500'
                                            : 'text-black'
                                    } 
                                       w-full  p-3  hover:underline underline-offset-4   ${
                                           i === 2
                                               ? 'border-0'
                                               : 'border-b-2'
                                       } sm:border-0 border-black`}
                            to={item.slug}
                            key={item.name}
                            onClick={() =>
                                setIsMenuOpen(!isMenuOpen)
                            }>
                            {item.name}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}
