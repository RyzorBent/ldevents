import React from 'react';
import {
  center,
  container,
  stubborn,
  theForm,
} from '../styles/contact.module.css';
import { sections } from '../styles/sections.module.css';

export default function Contact() {
  return (
    <div className={sections}>
      <div
        className={container}
        style={{
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 className={center}>Contact Us</h2>
        <form
          method='post'
          netlify-honeypot='bot-field'
          data-netlify='true'
          netlify
          name='contact'
          className={theForm}
        >
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='contact' />
          <input
            className={stubborn}
            name='first_name'
            type='text'
            required
            placeholder='Name'
          />
          <input
            className={stubborn}
            name='last_name'
            type='text'
            required
            placeholder='Surname'
          />
          <input
            name='email'
            type='email'
            required
            placeholder='you@domain.com'
          />
          <textarea
            name='message'
            cols='30'
            rows='4'
            placeholder='Enter your message here ...'
          ></textarea>
          <div className={center}>
            <input className='btn' type='submit' value='Send' />
          </div>
        </form>
      </div>
    </div>
  );
}
