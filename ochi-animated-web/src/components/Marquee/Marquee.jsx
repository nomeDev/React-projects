import { motion } from 'framer-motion';
import React from 'react';

export default function Marquee() {
    return (
        <div className="w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl py-[6vw] bg-[#004D43] text-white">
            <div className="flex text-[25vh] font-[Oswald] border-t-[1px] pb-[12px] border-b-[1px] border-gray-400 leading-[90%] font-semibold tracking-tighter gap-6 uppercase whitespace-nowrap">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 8,
                    }}
                    className="">
                    We are ochi{' '}
                </motion.h1>{' '}
                <motion.h1
                    initial={{ x: '0' }}
                    animate={{ x: '-100%' }}
                    transition={{
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 8,
                    }}
                    className="">
                    We are ochi
                </motion.h1>
            </div>
        </div>
    );
}
