import React from 'react';

export default function Footer() {
  return (
    <div className='flex flex-col bg-gray-300 '>
      <div className='w-full h-auto flex gap-5 justify-between px-8 sm:px-16 flex-wrap lg:px-20 py-5'>
        <div>
          <div className='flex flex-col '>
            <h1 className='text-4xl font-bold text-orange-600'>
              Foodi Zone<span className='text-[60px]'>.</span>
            </h1>
            <h2 className='text-2xl font-semibold mt-5'>
              Find The Best <br /> Food Here.
            </h2>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-semibold mb-2'>Links</h1>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-semibold mb-2'>Service</h1>
          <p>Free Delivery</p>
          <p>25% discount</p>
          <p>Free for disabled</p>
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-semibold mb-2'>
            For complaint
          </h1>
          <p>Phone: +923004000</p>
          <p>Email: abc@foodizone.com</p>
          <p>Whatsapp: +9201110011</p>
        </div>
      </div>
      <div className='w-full text-sm sm:text-[16px] text-center border-t-2 py-2s bg-gray-400 border-gray-400'>
        copyright © www.foodizone.com All right reserve
      </div>
    </div>
  );
}
