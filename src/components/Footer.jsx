import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container py-16 grid lg:grid-cols-[1fr_2fr] gap-8 text-gray-300'>
      <div>
        <h1 className='text-green text-3xl font-bold mb-4'>React</h1>
        <p className='mb-4 max-w-lg'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className='flex gap-4'>
          <FaFacebookSquare size={30} className='hover:text-green' />
          <FaInstagram size={30} className='hover:text-green' />
          <FaTwitterSquare size={30} className='hover:text-green' />
          <FaGithubSquare size={30} className='hover:text-green' />
          <FaDribbbleSquare size={30} className='hover:text-green' />
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Analytics
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Marketing
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Commerce
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Pricing
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Documentation
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Guides
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              About
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Blog
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Jobs
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Press
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Claim
            </li>
             <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Policy
            </li>
            <li className='py-2 text-sm cursor-pointer hover:text-green'>
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
