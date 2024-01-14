import React from 'react'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

export default function LayoutNoMenu({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata
  return (
    <div className="layout">
      <div className="content">
        { children }
      </div>
      <footer>
        <p>{ copyright }</p>
      </footer>
    </div>
  )
}