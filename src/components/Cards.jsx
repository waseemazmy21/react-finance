import React from 'react';
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='bg-white py-40 px-8'>
      <div className=' max-w-[400px] md:max-w-[77.5rem] mx-auto grid grid-cols-1 md:grid-cols-3  gap-x-8 gap-y-12'>
        <div className='shadow-xl flex flex-col text-center p-4 rounded-lg duration-300 hover:scale-105'>
          <img className='w-20 mt-[-3rem] mx-auto  ' src={single} alt='' />
          <h3 className='text-2xl font-bold my-8'>Single User</h3>
          <p className='text-4xl font-bold mb-8'>$149</p>
          <div className='font-medium mb-6'>
            <p className='py-2 border-b'>500 GB Storage</p>
            <p className='py-2 border-b'>1 Granted User</p>
            <p className='py-2 border-b'>Send up to 2 GB</p>
          </div>
          <button
            className=' bg-green text-white rounded-md text-xl font-medium py-3 w-full max-w-[200px] mx-auto'
            type='button'
          >
            Start Trial
          </button>
        </div>
        <div className=' shadow-xl flex flex-col text-center p-4 rounded-lg duration-300 hover:scale-105 md:my-[-2rem] md:bg-gray-100'>
          <img className='w-20 mt-[-3rem] mx-auto  ' src={double} alt='' />
          <h3 className='text-2xl font-bold my-8'>Single User</h3>
          <p className='text-4xl font-bold mb-8'>$149</p>
          <div className='font-medium mb-6'>
            <p className='py-2 border-b'>500 GB Storage</p>
            <p className='py-2 border-b'>1 Granted User</p>
            <p className='py-2 border-b'>Send up to 2 GB</p>
          </div>
          <button
            className=' bg-green text-white rounded-md text-xl font-medium py-3 w-full max-w-[200px] mx-auto'
            type='button'
          >
            Start Trial
          </button>
        </div>
        <div className=' shadow-xl flex flex-col text-center p-4 rounded-lg duration-300 hover:scale-105'>
          <img className='w-20 mt-[-3rem] mx-auto  ' src={triple} alt='' />
          <h3 className='text-2xl font-bold my-8'>Single User</h3>
          <p className='text-4xl font-bold mb-8'>$149</p>
          <div className='font-medium mb-6'>
            <p className='py-2 border-b'>500 GB Storage</p>
            <p className='py-2 border-b'>1 Granted User</p>
            <p className='py-2 border-b'>Send up to 2 GB</p>
          </div>
          <button
            className=' bg-green text-white rounded-md text-xl font-medium py-3 w-full max-w-[200px] mx-auto'
            type='button'
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
