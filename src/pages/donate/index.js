import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PayfastButtons from '../../components/PayfastButtons';

export default function Donate({ data }) {
  return (
    <>
      <h1 style={{ color: '#cacbcc', textAlign: 'center', marginTop: '40px'}}>Thank you for your support</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '320px', marginRight:'10px' }}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ borderRadius: '6px' }}
          />
        </div>
        <div
          style={{
            marginLeft: '10px'
          }}
        >
          <PayfastButtons />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query DonateKids {
    file(relativePath: { eq: "african-kids.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
