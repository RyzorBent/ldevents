import React from 'react';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { header } from '../styles/home.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import About from './About';
import Blogs from './Blogs';
import Hero from './Hero';
import Gallery from './gallery/index';
import Contact from './Contact';
import Services from './Services';
import Img from 'gatsby-image';
import Badge from 'react-bootstrap/Badge';

export default function Home({ data }) {
  const heroImageData = data.file.childImageSharp.fluid;
  console.log({ data })

  return (
    <Layout>
      <section className={header} id='home'></section>
      <section
        id='hero'
        className={header}
        style={{
          backgroundImage: `url(${heroImageData.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative',
          left: '50%',
          right: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust color and opacity as needed
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          {' '}
          <Hero />
        </div>
      </section>

      <section id='about'>
        {' '}
        <About />
      </section>
      <section id='services'>
<Services/>
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
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 99) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
