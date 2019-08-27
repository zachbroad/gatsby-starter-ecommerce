import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import get from 'lodash/get'
import {Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import PropertyListingCard from '../components/PropertyListingCard'

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
      <div className="text-center">
        <h1 className="text-xl font-bold">Bellahway Apartments</h1>
        <h4 className="text-xs font-thin">Find your next M.E. home!</h4>
      </div>

      <div className="container mx-auto">
        {properties.map(property => (
          <PropertyListingCard property={property} />
        ))}
      </div>
    </Layout>
  )
}

export default PropertyIndex
