import React from 'react';
import Menu from './Menu';
import '../styles/global.css';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from './Footer';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          developer
        }
      }
    }
  `);
  const { copyright, developer } = data.site.siteMetadata;
  return (
    <div className='layout'>
      <Menu />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
}
