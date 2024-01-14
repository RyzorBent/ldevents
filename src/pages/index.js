import React from 'react';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { header } from '../styles/home.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import About from './About';
import Blogs from './Blogs';
import Gallery from './gallery/index';
import Contact from './Contact';
import Img from 'gatsby-image';
import Badge from 'react-bootstrap/Badge';

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header} id='home'>
        <div>
          <h2>Robotics Academy</h2>
          <h3>Coding & Social Media Ethics</h3>
          <p>
            Based in <Badge bg='secondary'>Alexandra</Badge> Gauteng and{' '}
            <Badge bg='secondary'>Mokgwaneng</Badge> Limpopo.
          </p>
          <AnchorLink className='btn' href='#contact'>
            Join Us
          </AnchorLink>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
      <section id='about'>
        {' '}
        <About />
      </section>
      <section id='blogs'>
        <Blogs />
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "robot.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
