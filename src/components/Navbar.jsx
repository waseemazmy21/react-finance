import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MobileMenu from './MobileMenu';

const Navbar = ({ isMenuOpened, handleMenuToggle }) => {
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

      <MobileMenu isMenuOpened={isMenuOpened} />
    </div>
  );
};

export default Navbar;
