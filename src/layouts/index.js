import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../css/normalize.css'
import '../css/style.css'
import './sitewide.css'

class Template extends React.Component {
  render() {
    const { location, children, data } = this.props

    return (
      <div>
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
              <meta name="twitter:site" content="@simplyagree" />
              <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Roboto" rel="stylesheet" />
          </Helmet>
        <Header />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
