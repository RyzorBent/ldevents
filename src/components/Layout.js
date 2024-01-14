import React from 'react';
import Menu from './Menu';
import '../styles/global.css';
import { graphql, useStaticQuery } from 'gatsby';

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
      <footer>
        <p>
          {copyright} by{' '}
          <a
            href='https://www.codegarden.co.za'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            {developer}
          </a>
        </p>
      </footer>
    </div>
  );
}
