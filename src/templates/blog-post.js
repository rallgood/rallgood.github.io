import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import './blog-post.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const descriptionStyle = {
        backgroundColor: post.frontmatter.color,
        color: 'white'
    };

    return (
      <div className="container content">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="row">
            <div className="col">
                <img className="demo-image" src={post.frontmatter.photo} />
                <div className="description-container" style={descriptionStyle}>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </div>
        <div className="row">

        </div>

        <ul className="post-nav">
          {previous && (
            <li className="pull-left">
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li className="pull-right">
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title,
        photo,
        client,
        type,
        color
      }
    }
  }
`
