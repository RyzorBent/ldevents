import React from 'react';
import Button from 'react-bootstrap/Button';
import heroImage from '../images/hero.jpeg';

export default function Hero() {
  return (
    <div className='flex flex-row min-h-screen pt-60 pb-4 mx-5'>
      {/* Hero Text Section */}
      <div className='flex-1 my-auto'>
        <h1 className='text-5xl font-bold text-white'>
          Welcome to LDEvents
        </h1>
        <p className='mt-4 text-lg text-white'>
          Planning your special event is effortless with our team! We handle every detail, from cozy
          gatherings to large corporate functions, ensuring personalized service. Trust us to
          coordinate your ideal event, allowing you to create lasting memories with your guests.
        </p>
        <div className='mt-8 flex space-x-4'>
          <Button className='bg-white text-black hover:bg-gray-100'>Learn More</Button>
          <Button className='bg-black text-white hover:bg-gray-800'>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
