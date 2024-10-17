import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query InstagramContent {
      allInstagramContent {
        edges {
          node {
            caption
            media_url
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className='p-5'>
      <h2 className='text-5xl font-bold mb-6 text-center'>Gallery</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.allInstagramContent.edges.map(({ node }) => (
          <div key={node.id} className='mb-4'>
            {/* Check if the image file exists before attempting to render it */}
            {node.localFile && node.localFile.childImageSharp && (
              <GatsbyImage
                image={getImage(node.localFile.childImageSharp.gatsbyImageData)}
                alt={node.caption || 'Instagram Post'}
                className='rounded-lg'
              />
            )}
            <p className='mt-2'>{node.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
