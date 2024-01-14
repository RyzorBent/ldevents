import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <Card.Footer className='bg-[#4A4A4A] text-white p-10'>
      <Container className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <div className='flex items-center space-x-2 mb-4'>
            {/* Placeholder for FlagIcon, replace with actual icon */}
            <span className='text-2xl font-bold'>EVENT EASE</span>
          </div>
          <p className='mb-4'>
            We specialize in turning your vision into an extraordinary reality. Experience the
            simplicity of seamless events.
          </p>
          <div className='flex space-x-4'>
            <Facebook size={24} />
            <Instagram size={24} />
            <Linkedin size={24} />
            <Youtube size={24} />
          </div>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Contact</h3>
          <div className='flex items-center mb-2'>
            <Phone size={24} className='mr-2' />
            <span>Call us</span>
          </div>
          <p className='mb-4'>+41 44 668 18 00</p>
          <div className='flex items-center mb-2'>
            <Envelope size={24} className='mr-2' />
            <span>Write to us</span>
          </div>
          <p>EventEase@europe.in</p>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Explore</h3>
          <ul className='space-y-2'>
            <li>About us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>
    </Card.Footer>
  );
};

export default Footer;
