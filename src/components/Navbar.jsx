import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpened(!isMenuOpened);
  }
  return (
    <div className='container flex justify-between items-center h-24 text-white'>
      <h1 className='text-green text-3xl font-bold'>React</h1>

      <ul className='hidden md:flex items-centers gap-6'>
        <li className=' pb-1 cursor-pointer border-b-2 border-transparent duration-100 hover:border-white hover:scale-[1.1]'>
          Home
        </li>
        <li className='b-2 cursor-pointer border-b-2 border-transparent duration-100 hover:border-white hover:scale-[1.1]'>
          Company
        </li>
        <li className='b-2 cursor-pointer border-b-2 border-transparent duration-100 hover:border-white hover:scale-[1.1]'>
          Resources
        </li>
        <li className='b-2 cursor-pointer border-b-2 border-transparent duration-100 hover:border-white hover:scale-[1.1]'>
          About
        </li>
        <li className='b-2 cursor-pointer border-b-2 border-transparent duration-100 hover:border-white hover:scale-[1.1]'>
          Contact
        </li>
      </ul>

      <div className='md:hidden cursor-pointer' onClick={handleMenuToggle}>
        {isMenuOpened ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>

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
    </div>
  );
};

export default Navbar;
