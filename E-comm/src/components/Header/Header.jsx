import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

export default function Header() {
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
    return (
        <div className="w-full">
            <header className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-10 py-5">
                <div className="logo font-bold text-3xl">
                    NOMI <span className="font-normal">SHOP</span>
                </div>
                <nav>
                    <ul className="flex gap-10 text-[18px]">
                        {navItems.map((item) => (
                            <NavLink
                                className={({
                                    isActive,
                                    isPending,
                                }) =>
                                    isActive
                                        ? 'text-red-500'
                                        : isPending
                                        ? ''
                                        : '' +
                                          ' hover:underline underline-offset-4  '
                                }
                                to={item.slug}
                                key={item.name}>
                                {item.name}
                            </NavLink>
                        ))}
                    </ul>
                </nav>
                <div className="icons flex text-[28px] gap-7 justify-end w-[25%]">
                    <IoSearch className="cursor-pointer" />
                    <div className="relative">
                        <MdOutlineShoppingCart className="cursor-pointer" />
                        <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-zinc-900 rounded-full text-white text-[14px] text-center leading-[18px]">
                            0
                        </span>
                    </div>

                    <div className="relative">
                        <FaRegHeart className="cursor-pointer" />
                        <span className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] bg-zinc-900 rounded-full text-white text-[14px] text-center leading-[18px]">
                            0
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
}
