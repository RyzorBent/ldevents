import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { sections } from '../../styles/sections.module.css';
import Image from 'react-bootstrap/Image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ data }) => {
    const data1 = useStaticQuery(graphql`
      query CloudinaryImages {
        allCloudinaryMedia {
          edges {
            node {
              secure_url
            }
          }
        }
      }
    `);
  const clImages = data1.allCloudinaryMedia.edges;

  const settings = {
    autoPlay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className={sections} >
      <h2 className='text-5xl font-bold mb-6'>Gallery</h2>
      <div className='row'>
        {clImages.map((image, index) => (
          <div className='col-12 col-sm-6 col-lg-3'>
            <div
              data-target='#theCarausel'
              data-slide-to={`${index}`}
              key={`${index}-cl`}
            >
              <Zoom>
                <Image
                  className='w-100'
                  src={image.node.secure_url}
                  fluid
                  rounded
                />
              </Zoom>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
