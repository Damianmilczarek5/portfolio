import React from 'react';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            <div className="my-4">
            <h2 className="text-2xl">Name</h2>
            <p className="text-lg">Damian Milczarek</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl">Country</h2>
              <p className="text-lg">Sweden</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl">Languages</h2>
              <p className="text-lg">Swedish, English, Polish</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl">Age</h2>
              <p className="text-lg">24</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl">Phone</h2>
              <p className="text-lg">+46704169092</p>
            </div>
            <div className="my-4">
              <h2 className="text-2xl">Email</h2>
              <p className="text-lg">damian.milczarek2000@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

