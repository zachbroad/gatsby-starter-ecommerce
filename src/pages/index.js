import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import get from 'lodash/get'
import {Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const PropertyIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
              address
              area
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            id
            html
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const properties = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          {/* <Image src={logo} alt="logo" /> */}
          <h1>Bellahway Apartments</h1>
          <h4>Find your next M.E. home!</h4>
        </Header.Content>
      </Header>

      <div className="ui two column grid">
        {properties.map(property => (
          <div className="column" key={property.node.id}>
            <div className="ui fluid card">
              <Link
                className="image"
                to={`properties/${property.node.frontmatter.slug}/`}
              >
                <img
                  src={
                    property.node.frontmatter.thumbnail.childImageSharp.fluid
                      .src
                  }
                  alt=""
                />
              </Link>

              <div className="content">
                <Link to={`properties/${property.node.frontmatter.slug}/`}>
                  {property.node.frontmatter.title}
                </Link>
                <div className="meta">
                  <Link to={`properties/${property.node.frontmatter.slug}/`}>
                    {property.node.frontmatter.address}
                  </Link>
                </div>
              </div>
              <div className="ui buttons">
                <Link
                  to={`properties/${property.node.frontmatter.slug}/`}
                  className="ui button blue"
                >
                  View Property
                </Link>
                <div className="or"></div>
                <Link
                  to={`properties/${property.node.frontmatter.slug}/#apply`}
                  className="ui positive button"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PropertyIndex
