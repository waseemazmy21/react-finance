import React from 'react';
import laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='bg-white py-16'>
      <div className=' container grid grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-1 gap-x-8 gap-y-4'>
        <img
          className='w-full max-w-[500px] justify-self-center md:justify-self-start'
          src={laptop}
          alt='laptop'
        />
        <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left'>
          <p className='text-green font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
            Manage Data Analytics Centrally
          </h2>
          <p className='mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white hover:bg-green   rounded-md text-xl font-medium py-3  w-[200px]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
