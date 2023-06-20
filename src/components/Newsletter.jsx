import React from 'react';

const Newsletter = () => {
  return (
    <div className='container py-16 text-white grid grid-rows-[auto_auto] lg:grid-cols-2 lg:grid-rows-1 gap-8 text-center lg:text-left'>
      <div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
          Want tips & tricks to optimize your flow?
        </h2>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='flex flex-col  sm:flex-row sm:items-center  gap-4 mb-6'>
          <input
            className='flex-grow px-3 py-3 text-black text-xl rounded-md'
            type='email'
            placeholder='Type your email'
            required
          />
          <button className='self-center bg-green hover:bg-white hover:text-green hover:border-green rounded-md text-xl font-medium py-3 w-[200px]'>
            Notify Me
          </button>
        </div>
        <p>
          We care bout the protection of your data. Read our{' '}
          <a
            href='#'
            className='text-green border-b border-transparent hover:border-green'
          >
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
