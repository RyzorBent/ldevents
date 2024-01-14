import React from 'react';
import {Link} from 'gatsby'
import { Navbar, Container, Nav} from 'react-bootstrap';
import { collapse } from '../styles/menu.modules.css';
import Logo from '../images/logo.png';

export default function Menu() {
  return (
    <Navbar sticky='top' expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          {' '}
          <img
            src={Logo}
            width='160'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className={collapse}>
          <Nav>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
            <Nav.Link href='#gallery'>Pictures</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
            <Link to='/donate' className="nav-link" style={{ backgroundColor: '#FFCC00', borderRadius:'4px', color:'black' }}>
              Donate
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
