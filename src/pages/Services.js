import React from 'react';
import Button from 'react-bootstrap/Button';
import cateringImage from '../images/catering.jpg';
import corporateImage from '../images/corporate.jpeg';
import socialImage from '../images/social.jpeg';

const Services = () => {
  return (
    <div className='bg-[#f4f1ea] h-3/5 py-16 overflow-auto'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center'>
          <h2  className='text-5xl font-bold'>Our Services</h2>
          <p className='text-lg mt-6'>Discover our wide range of event management services</p>
          {/* <Button className='mt-6' variant='primary'>
            View All Events
          </Button> */}
        </div>
        <div className='flex justify-center items-center mt-12 gap-8'>
          <div className='flex flex-col items-center'>
            <img
              alt='Decoration'
              className='rounded-lg'
              src={cateringImage}
              style={{ width: '360px', height: '240px', objectFit: 'cover' }}
            />
            <h3 className='text-xl font-semibold mt-4'>Decoration</h3>
          </div>
          <div className='flex flex-col items-center'>
            <img
              alt='Corporate Events'
              className='rounded-lg'
              src={corporateImage}
              style={{ width: '360px', height: '240px', objectFit: 'cover' }}
            />
            <h3 className='text-xl font-semibold mt-4'>Corporate Events</h3>
          </div>
          <div className='flex flex-col items-center'>
            <img
              alt='Social Events'
              className='rounded-lg'
              src={socialImage}
              style={{ width: '360px', height: '240px', objectFit: 'cover' }}
            />
            <h3 className='text-xl font-semibold mt-4'>Social Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
