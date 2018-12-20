import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import EveryKidCooksDemo from '../images/Every-Kid-Cooks-Demo.png';
import ExploreTruthDemo from '../images/Explore-Truth-Demo.png';
import NashvilleDemo from '../images/Nashville-Demo.png';
import NoPersonIsIllegalDemo from '../images/No-Person-Is-Illegal-Demo.png';
import SimplyAgreeDemo from '../images/SimplyAgree-Demo.png';
import SimplyBlogDemo from '../images/SimplyBlog-Demo.png';

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        var createGroupedArray = function(arr, chunkSize) {
            var groups = [], i;
            for (i = 0; i < arr.length; i += chunkSize) {
                groups.push(arr.slice(i, i + chunkSize));
            }
            return groups;
        }
        var groupedPosts = createGroupedArray(posts, 3);

        return (
            <div className="container content">
                {groupedPosts.map((array, index) => {
                    return(
                        <div className="row" key={index}>
                            {array.map(({ node }, index) => {
                                return(
                                    <div key={index} className="col">
                                        <div className="hover-box">
                                            <img src={node.frontmatter.photo} className="demo-image" />
                                            <Link to={node.fields.slug} className="hover-layer">
                                                <div className="hover-text text-center">
                                                    <h4>{node.frontmatter.client}<br />&mdash;<br /><em>{node.frontmatter.type}</em></h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            client
            photo
            type
          }
        }
      }
    }
  }
`
