/* eslint-disable */
import React from 'react'
import {graphql, Link} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/Layout'

class PropertyListingTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMarkdownRemark')
    const data = productInfo.edges[0].node
    const frontmatter = data.frontmatter
    const {slug, title, address, area} = frontmatter
    const thumbnail = data.frontmatter.thumbnail.childImageSharp.fluid

    return (
      <Layout location={this.props.location}>
        <SEO title={slug} />

        <div className="container mx-auto">
          <div className="ui bordered wide">
            <div className="image">
              <img className="ui fluid image" src={thumbnail.src} alt="" />
            </div>

            <h1 className="text-lg font-bold">{title}</h1>
            <h4 className="text-md font-thin">{address}</h4>
            <p>{area} sq/ft</p>
          </div>
          <div className="inline-flex">
            <Link
              to={`properties/`}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Apply
            </Link>
            <Link
              to={`properties/`}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Share
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{__html: data.html}}></div>
        </div>
      </Layout>
    )
  }
}

export default PropertyListingTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMarkdownRemark(filter: {id: {eq: $id}}) {
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
`
