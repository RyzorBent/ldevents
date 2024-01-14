import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { featured, html, details } from '../styles/blog-details.module.css';
import Layout from '../components/Layout';

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  console.log(' htmldata',html);
  return (
    <div className="layout">

    <div className={details}>
      <div className={featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} style={{borderRadius:'5px'}}/>
      </div>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
    </div>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100, maxHeight: 50){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
