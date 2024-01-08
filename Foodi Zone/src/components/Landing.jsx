import React from 'react';

function Landing() {
  return (
    <div>
      <div className="w-full text-2xl px-2 sm:text-4xl lg:text-5xl h-[50vh] lg:h-[80vh]  bg-[url('assets/heroImage.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-blend-darken flex-col  bg-black/30 ">
        <h3 className='  font-bold text-white'>
          Finde the best food
        </h3>
        <h3 className=' text-white font-bold'>Here</h3>
        <div>
          <button className='bg-red-800 text-white py-1 px-2 lg:py-2 lg:px-4 text-lg md:text-2xl lg:text-4xl rounded-lg my-2 sm:mt-5'>
            Oder Now
          </button>
        </div>
        <h1 className='text-sm uppercase pl-3 md:text-lg lg:text-2xl w-full text-left text-white  '>
          Get{' '}
          <span className='text-lg text-yellow-500 md:text-2xl lg:text-3xl'>
            25%
          </span>{' '}
          Off <br /> ON every SEcond <br /> perchase of your order
        </h1>
      </div>
    </div>
  );
}

export default Landing;
