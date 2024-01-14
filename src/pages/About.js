import React from 'react';
import { sections } from '../styles/sections.module.css';
import AboutImage from '../images/about.jpeg';

export default function About() {
  return (
    <div className={`${sections} flex items-center h-3/5`}>
      {' '}
      {/* Flex container with 60vh height */}
      <div
        className='flex-1' // For text container
      >
        <h2 className='text-5xl font-bold '>About Us</h2>
        <p className='mt-4 text-lg'>
          ldevents, based in Gauteng, is your{' '}
          <strong>go-to planner for unique, memorable events</strong>. From corporate affairs to
          private parties and birthdays, our team{' '}
          <strong>transforms your vision into reality</strong>, providing a{' '}
          <strong>seamless, stress-free experience</strong>. Trust ldevents to{' '}
          <strong>create moments that turn into lasting memories</strong>.
        </p>
      </div>
      <img
        src={AboutImage} 
        alt='Description' 
        style={{ height: '490px', borderBottomLeftRadius: '4px' }} // Set the height
      />
    </div>
  );
}
