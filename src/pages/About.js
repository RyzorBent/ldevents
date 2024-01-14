import React from 'react';
import { sections } from '../styles/sections.module.css';

export default function About() {
  return (
    <div
    className={sections}
    >
      <div
      style={{
        backgroundColor: '#FFCC00',
        padding: '5px',
        borderRadius: '5px',
      }}
      
      >

      <h2 style={{ marginTop: '20px' }}>About Us</h2>
      <p>
        Diroboto is a robotics and coding accademy, Which uses{' '}
        <strong>fun and engaging </strong>
        ways of introducing technology to learners. We also believe that
        technical skills are complemented by{' '}
        <strong>good values and morals</strong>, And thus we also fuse lessons
        about morality into the curriculum.
      </p>
      <p></p>
      </div>
    </div>
  );
}
