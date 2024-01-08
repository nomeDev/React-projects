import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
export default function Success() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='flex items-center flex-col justify-center w-full h-screen '>
      {loading ? (
        <PulseLoader color='#36d7b7' />
      ) : (
        <div>
          <h2 className='text-xl text-center sm:text-3xl font-semibold mb-2'>
            Order Successfull!
          </h2>
          <p>Your order has been successfully placed</p>{' '}
        </div>
      )}
    </div>
  );
}
