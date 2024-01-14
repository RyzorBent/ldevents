import React from 'react'
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import diroboto404 from '../images/diroboto-404.png'

export default function notFound({ data }) {
    console.log('datara', data)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div>
          <h1
            style={{ color: '#cacbcc', textAlign: 'center', marginTop: '40px' }}
          >
            Page not found
          </h1>
        </div>
        <div >
                <Img fluid={data.file.childImageSharp.fluid} style={{marginLeft:'100px', height: '50%', width: '50%'}}/>
        </div>
      </div>
    );
}

export const query = graphql`
  query notFound {
    file(relativePath: { eq: "diroboto-404.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
