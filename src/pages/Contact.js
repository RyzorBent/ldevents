import React from 'react';
import { sections } from '../styles/sections.module.css';

export default function ContactForm() {
  return (
    <div className={`${sections} bg-gray-700 mt-6 mb-16 p-6 text-white rounded-lg`}>
      <h2 className='text-center text-5xl font-bold pt-6'>Contact Idevents for Event Planning</h2>
      <p className='text-center mt-4 mb-8 text-white'>
        Contact Idevents for all your event planning needs. Get in touch with us today to find out
        more about the services we offer.
      </p>
      <form
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        name='contact'
        className='max-w-4xl mx-auto grid grid-cols-1 gap-6'
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <input
            type='text'
            name='first_name'
            placeholder='First Name'
            className='bg-gray-800 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-md'
            required
          />
          <input
            type='text'
            name='last_name'
            placeholder='Last Name'
            className='bg-gray-800 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-md'
            required
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='bg-gray-800 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-md'
          required
        />
        <textarea
          name='message'
          rows='3'
          placeholder='Type your message here.'
          className='bg-gray-800 border border-gray-600 text-white placeholder-gray-400 p-3 rounded-md'
          required
        ></textarea>
        <div className='flex justify-between items-center mt-6'>
          <button
            type='submit'
            className='bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
