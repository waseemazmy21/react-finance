import React from 'react';

const MobileMenu = ({ isMenuOpened }) => {
  return (
    <div
      id='menu'
      className={
        isMenuOpened
          ? 'fixed left-0 top-0 bottom-0 w-[60%] p-4 bg-dark-navy  border-r border-r-gray-900 ease-in-out duration-700 md:hidden'
          : 'fixed left-[-100%] top-0 bottom-0 w-[60%] p-4 bg-dark-navy  border-r border-r-gray-900 ease-in-out duration-700 md:hidden'
      }
    >
      <h1 className='text-green text-3xl font-bold p-4'>React</h1>
      <ul className='uppercase'>
        <li className='p-4 cursor-pointer border-b border-b-gray-600 hover:bg-gray-600'>
          Home
        </li>
        <li className='p-4 cursor-pointer border-b border-b-gray-600 hover:bg-gray-600'>
          Company
        </li>
        <li className='p-4 cursor-pointer border-b border-b-gray-600 hover:bg-gray-600'>
          Resources
        </li>
        <li className='p-4 cursor-pointer border-b border-b-gray-600 hover:bg-gray-600'>
          About
        </li>
        <li className='p-4 cursor-pointer hover:bg-gray-600'>Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
