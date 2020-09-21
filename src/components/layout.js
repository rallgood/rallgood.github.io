import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import '../css/normalize.css';
import '../css/style.css';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={
      graphql`
          query LayoutQuery {
              site {
                  siteMetadata {
                      title
                  }
              }
          }
      `
    }
    render={data => (
      <>
        <Helmet
            title={data.site.siteMetadata.title}
        >
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            // <meta property="og:image" content={data.site.siteMetadata.image} />
            <meta property="og:url" content="https://roballgood.com" />
            <meta property="og:site_name" content="Rob Allgood | Design" />
            <meta name="twitter:card" content="summary_large_image" />
            // <meta name="twitter:image" content={data.site.siteMetadata.image} />
            <meta name="twitter:image:alt" content={data.site.siteMetadata.title} />
            <link rel="stylesheet" href="https://use.typekit.net/pky1xev.css" />
        </Helmet>
        <Header />
        {children}
      </>
    )}
  />
)

export default Layout
