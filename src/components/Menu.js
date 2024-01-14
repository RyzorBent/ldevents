import React from 'react';
import {Link} from 'gatsby'
import { Navbar, Container, Nav} from 'react-bootstrap';
import { collapse } from '../styles/menu.modules.css';
import Logo from '../images/logo.png';

export default function Menu() {
  return (
    <Navbar fixed='top'  data-bs-theme='light'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link href='#about'>About Us</Nav.Link>
          <Nav.Link href='#services'>Services</Nav.Link>
          <Nav.Link href='#gallery'>Gallery</Nav.Link>
          {/* <Nav.Link href='#blog'>Blog</Nav.Link> */}
          <Nav.Link href='#contact'>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
