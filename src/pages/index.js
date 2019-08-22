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
          <div className="text-center">
            <h1 className="text-xl">Bellahway Apartments</h1>
            <h4 className={'text-xs'}>Find your next M.E. home!</h4>
          </div>
        </Header.Content>
      </Header>

      <div className="container-md mx-auto">
        <div className="flex flex-row flex-wrap">
          {properties.map(property => (
            <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
              <div className="ui fluid card">
                <Link
                  className="image"
                  to={`properties/${property.node.frontmatter.slug}/`}
                >
                  <img
                    className={'w-full'}
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
                <div className="flex flex-row">
                  <Link
                    to={`properties/${property.node.frontmatter.slug}/`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </Link>
                  <Link
                    to={`properties/${property.node.frontmatter.slug}/#apply`}
                    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PropertyIndex
