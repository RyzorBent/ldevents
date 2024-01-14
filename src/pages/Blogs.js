import React from 'react';
import { sections } from '../styles/sections.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Badge from 'react-bootstrap/Badge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Blogs() {
  const data = useStaticQuery(graphql`
    query EventsPage {
      blogs: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            slug
            stack
            title
            date
            sub
            thumb {
              childImageSharp {
                fixed(width: 325, height: 325) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          id
        }
      }
      contact: site {
        siteMetadata {
          contact
        }
      }
    }
  `);
  const blogsData = data.blogs.nodes;
  return (
    <div className={sections}>
      <h2 style={{ textAlign: 'center' }}>Blog Posts</h2>
      <div className='d-flex d-flex-row flex-wrap justify-content-center'>
        {blogsData.slice(0,3).map((blog) => {
          let relativeDate =
            dayjs(blog.frontmatter.date).fromNow(true) + ' ago';
          return (
            <div style={{ margin: '10px' }}>
              <div
                className='card w-95 h-100 mx-auto'
                style={{ border: 'none' }}
              >
                <div
                  className='card-body'
                  style={{
                    backgroundColor: '#2ad4ff86',
                    borderRadius: '9px',
                  }}
                >
                  <Img
                    fixed={blog.frontmatter.thumb.childImageSharp.fixed}
                    style={{borderRadius:'6px'}}
                  />
                  <h5 className='card-title' style={{ marginTop: '15px' }}>
                    {blog.frontmatter.title}
                  </h5>
                  <p>{blog.frontmatter.sub}</p>
                  <p className='card-text'>
                    <Badge pill bg='secondary'>
                      {relativeDate}
                    </Badge>
                  </p>
                  <Link
                    to={'/blogs/' + blog.frontmatter.slug}
                    class='btn btn-primary'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default Blogs;

// export page query
// export const query = graphql`
//   query EventsPage {
//     blogs: allMarkdownRemark(
//       sort: { order: DESC, fields: frontmatter___date }
//     ) {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//           thumb {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         id
//       }
//     }
//     contact: site {
//       siteMetadata {
//         contact
//       }
//     }
//   }
// `;
