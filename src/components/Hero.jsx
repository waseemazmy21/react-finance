import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='flex flex-col items-center max-w-[800px] mx-auto pt-32 pb-60 px-4 text-center text-white'>
      <p className='text-green font-bold mb-2'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold mb-2 md:mb-6'>
        Grow with data.
      </h1>
      <div className='flex items-center mb-4'>
        <p className='text-xl sm:text-4xl md:text-5xl font-bold '>
          Fast, flexible financing for
        </p>
        <TypeAnimation
          className='text-xl sm:text-4xl md:text-5xl font-bold text-gray-600 ml-2 md:ml-4'
          sequence={['BTB', 2000, 'BTC', 2000, 'SASS', 2000]}
          wrapper='span'
          speed={20}
          deletionSpeed={20}
          repeat={Infinity}
        />
      </div>
      <p className='text-xl md:text-2xl font-bold text-gray-600 mb-6'>
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
      </p>
      <button className='bg-green hover:bg-white hover:text-green  rounded-md text-xl font-medium py-3  w-[200px]'>
        Get Started
      </button>
    </div>
  );
};

export default Hero;
